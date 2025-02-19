import { useState } from "react";
import InventoryTable from "../components/InventoryTable";
import ExcelManager from "../components/ExcelManager";
import "../styles/inventory.css"; // Import styles

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <div className="inventory-page">
      <h2>Inventory Management</h2>
      <ExcelManager setInventory={setInventory} setCategories={setCategories} inventory={inventory} />
      <InventoryTable inventory={inventory} setInventory={setInventory} categories={categories} setCategories={setCategories} />
    </div>
  );
};

export default InventoryPage;
