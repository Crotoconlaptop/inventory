import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// Importar un archivo Excel
export const importExcel = (file, setInventory, setCategories) => {
  const reader = new FileReader();
  reader.readAsBinaryString(file);

  reader.onload = (e) => {
    const binaryString = e.target.result;
    const workbook = XLSX.read(binaryString, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Extraer categorías únicas
    const categoriesSet = new Set(data.map((item) => item.Categoría));
    setCategories(Array.from(categoriesSet));

    // Convertir datos en estructura de estado
    const formattedData = data.map((item, index) => ({
      id: index + 1,
      name: item.Producto,
      category: item.Categoría,
      quantity: item.Cantidad,
      unit: item.Unidad,
      expirationDate: item["Fecha de Vencimiento"] || "",
    }));

    setInventory(formattedData);
  };
};

// Exportar a Excel
export const exportExcel = (inventory) => {
    // Ordenar productos por categoría antes de exportar
    const sortedInventory = [...inventory].sort((a, b) => a.category.localeCompare(b.category));
  
    // Convertir datos a formato de Excel
    const worksheet = XLSX.utils.json_to_sheet(
      sortedInventory.map(({ name, category, quantity, unit, expirationDate }) => ({
        Product: name,
        Category: category,
        Quantity: quantity,
        Unit: unit,
        "Expiration date": expirationDate || "N/A",
      }))
    );
  
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inventario");
  
    // Guardar el archivo
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "Inventario_Bar.xlsx");
  };