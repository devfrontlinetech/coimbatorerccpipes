import React from "react";
import "../../assets/css/common/pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // PREVIOUS PAGE
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // NEXT PAGE
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // PAGE BUTTONS
  const renderPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className="pagination-wrapper">
      {/* PREV BUTTON */}

      <button
        className="pagination-arrow"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* PAGE NUMBERS */}

      <div className="pagination-pages">{renderPages()}</div>

      {/* NEXT BUTTON */}

      <button
        className="pagination-arrow"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
