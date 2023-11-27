import React, { useState } from "react";
import Card from "./Card";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_PAGES_DISPLAYED = 2;
  const firstPage = 1;
  const lastPage = totalPages;

  // Utility function to create a range of numbers
  const range = (from, to) => {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i++;
    }
    return range;
  };

  // Generate the pagination items
  const paginationItems = () => {
    const pages = [];

    // Always add the first page
    pages.push(firstPage);

    // Add second page or an ellipsis
    if (currentPage > firstPage + MAX_PAGES_DISPLAYED) {
      pages.push(firstPage + 1);
      pages.push("...");
    } else if (currentPage === firstPage + MAX_PAGES_DISPLAYED) {
      pages.push(firstPage + 1);
    }

    // Add the two pages before the current page
    const startOfRange = Math.max(currentPage - 1, firstPage + 2);
    const endOfRange = Math.min(currentPage + 1, lastPage - 2);
    pages.push(...range(startOfRange, endOfRange));

    // Add an ellipsis or the second last page
    if (currentPage < lastPage - MAX_PAGES_DISPLAYED) {
      pages.push("...");
      pages.push(lastPage - 1);
    } else if (currentPage === lastPage - MAX_PAGES_DISPLAYED) {
      pages.push(lastPage - 1);
    }

    // Always add the last page
    pages.push(lastPage);

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-1">
      <button
        disabled={currentPage === firstPage}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded border"
      >
        &lt;
      </button>

      {paginationItems().map((item, index) =>
        item === "..." ? (
          <span key={index}>...</span>
        ) : (
          <button
            key={item}
            className={`rounded border w-8 ${
              item === currentPage ? "bg-sky-600" : ""
            }`}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        )
      )}

      <button
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded border"
      >
        &gt;
      </button>
    </div>
  );
};

const Table = ({ totalItems }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {Array.from({ length: itemsPerPage }, (_, i) => i + indexOfFirstItem)
        .filter((index) => index < totalItems)
        .map((itemIndex) => (
          <Card key={itemIndex} index={itemIndex} />
        ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Table;
