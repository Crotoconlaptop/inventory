import { useRef } from "react";
import { importExcel, exportExcel } from "../utils/excelHelper";
import "../styles/excelManager.css";

const ExcelManager = ({ setInventory, setCategories, inventory }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) importExcel(file, setInventory, setCategories);
  };

  return (
    <div className="excel-manager">
      <input type="file" accept=".xlsx" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileUpload} />
      <button onClick={() => fileInputRef.current.click()}>Import Excel</button>
      <button onClick={() => exportExcel(inventory)}>Export Excel</button>
    </div>
  );
};

export default ExcelManager;
