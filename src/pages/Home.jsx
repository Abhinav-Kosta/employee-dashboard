import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard.jsx";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          if (data.status === "success") {
            setEmployees(data.data);
            setFilteredEmployees(data.data);
          } else {
            throw new Error("API returned error");
          }
        })
        .catch((err) => {
          console.error("API fetch failed:", err);
          setLoading(false);
        });
  }, []);

  const handleSearch = (id) => {
    const result = employees.find((emp) => emp.id === id);
    if (result) {
      setFilteredEmployees([result]);
      setNotFound(false);
    } else {
      setFilteredEmployees([]);
      setNotFound(true);
    }
  };

  const handleDelete = (id) => {
    const updatedAll = employees.filter((emp) => emp.id !== id);
    const updatedFiltered = filteredEmployees.filter((emp) => emp.id !== id);
    setEmployees(updatedAll);
    setFilteredEmployees(updatedFiltered);
  };


  return (
      <div className="dashboard-container">
        <div className="header-row">
          <h1 className="page-title">Employee Dashboard</h1>

          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="info-section">
            <h2>Welcome to the Employee Dashboard</h2>
            <p>This portal allows you to manage and browse employee information in a simple, visual way.</p>
            <ul>
              <li>Use the search bar to look up an employee by ID.</li>
              <li>Scroll below to view all employee entries as individual cards.</li>
              <li>Click on any card to see full employee details.</li>
              <li>Use the Delete button to remove a card from the dashboard view.</li>
              <li>Edit is currently a placeholder for upcoming features.</li>
            </ul>
        </div>
        <p className="description">Search by Employee ID or click a card to view details.</p>

        {loading ? (
          <p>Loading employees...</p>
        ) : notFound ? (
          <p>No employee found with that ID.</p>
        ) : (
          <div className="card-grid">
            {filteredEmployees.map((emp) => (
              <EmployeeCard
                key={emp.id}
                employee={emp}
                setEmployees={setEmployees}
                employees={filteredEmployees}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    );
};

export default Home;