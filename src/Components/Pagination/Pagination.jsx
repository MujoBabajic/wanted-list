import React from "react";
import PaginationButton from "../PaginationButton/PaginationButton";
import "./Pagination.css";
import PaginationControls from "../PaginationControls/PaginationControls";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 7;

    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxButtonsToShow / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationButton
          key={i}
          pageNumber={i}
          isActive={i === currentPage}
          onPageChange={onPageChange}
        />
      );
    }

    return buttons;
  };

  return (
    <div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
