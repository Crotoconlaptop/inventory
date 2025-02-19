import { useState } from "react";
import "../styles/inventoryTable.css";

const InventoryTable = ({ inventory, setInventory, categories, setCategories }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    unit: "Unit",
    expirationDate: "",
  });

  const [newCategory, setNewCategory] = useState("");
  const units = ["Unit", "Kg", "L", "Pack"];

  const handleAddCategory = () => {
    if (!newCategory.trim() || categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    setNewCategory("");
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.quantity || !newProduct.category) return;
    setInventory([...inventory, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: "", category: "", quantity: "", unit: "Unit", expirationDate: "" });
  };

  const handleDeleteProduct = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="inventory-container">
      <h3>Categories</h3>
      <div className="category-section">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>

      <h3>Products</h3>
      <div className="product-section">
        <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="Product Name" />
        <select value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <input type="number" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} placeholder="Quantity" />
        <select value={newProduct.unit} onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}>
          {units.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
        <input type="date" value={newProduct.expirationDate} onChange={(e) => setNewProduct({ ...newProduct, expirationDate: e.target.value })} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Expiration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.expirationDate || "N/A"}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDeleteProduct(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
