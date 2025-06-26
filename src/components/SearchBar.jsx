import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputId, setInputId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputId.trim() === "") return;
    onSearch(Number(inputId)); // convert to number
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="number"
        placeholder="Enter Employee ID"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>Search</button>
    </form>
  );
};

export default SearchBar;