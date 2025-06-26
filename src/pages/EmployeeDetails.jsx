import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const employee = location.state?.employee;

  if (!employee) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Employee not found</h2>
        <p>Maybe you refreshed the page or navigated directly.</p>
        <button onClick={() => navigate("/")}>Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h2 className="details-title">Employee Details</h2>
      <div className="details-box">
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.employee_name}</p>
        <p><strong>Age:</strong> {employee.employee_age}</p>
        <p><strong>Salary:</strong> ₹{employee.employee_salary}</p>
      </div>
      <button className="back-btn" onClick={() => navigate("/")}>← Back to Dashboard</button>
    </div>
  );
};

export default EmployeeDetails;