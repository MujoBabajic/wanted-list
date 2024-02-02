import React from "react";
import "./PaginationButton.css";

const PaginationButton = ({ pageNumber, isActive, onPageChange }) => {
  const handleClick = () => {
    onPageChange(pageNumber);
  };

  return (
    <button
      className="pagination-button"
      onClick={handleClick}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
