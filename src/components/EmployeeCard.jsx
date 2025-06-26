// import { useNavigate } from "react-router-dom";

// const EmployeeCard = ({ employee, setEmployees, employees }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/employee/${employee.id}`, { state: { employee } });
//   };

//   return (
//     <div className="employee-card" onClick={handleCardClick}>
//       <h3>{employee.employee_name}</h3>
//       <p>Age: {employee.employee_age}</p>
//       <p>Salary: ₹{employee.employee_salary}</p>

//       <div className="card-buttons">
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             const filtered = employees.filter((emp) => emp.id !== employee.id);
//             setEmployees(filtered);
//           }}
//         >
//           Delete
//         </button>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             alert("Edit feature coming soon!");
//           }}
//         >
//           Edit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmployeeCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ employee, onDelete }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/employee/${employee.id}`, { state: { employee } });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(employee.id); // call parent handler
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    alert("Edit feature is under development.");
  };

  return (
    <div className="employee-card" onClick={handleCardClick}>
      <h3>{employee.employee_name}</h3>
      <p>Age: {employee.employee_age}</p>
      <p>Salary: ₹{employee.employee_salary}</p>

      <div className="card-buttons">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default EmployeeCard;