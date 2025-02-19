import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InventoryPage from "./pages/InventoryPage";


function App() {
  return (
    <Router>

      <div className="container">
        <Routes>
          <Route path="/" element={<InventoryPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
