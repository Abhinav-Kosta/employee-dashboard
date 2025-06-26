// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeDetails from "./pages/EmployeeDetails.jsx"; // create this in Step 3

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page shows all employees */}
        <Route path="/" element={<Home />} />

        {/* Details page for individual employee (will be built in Step 3) */}
        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;