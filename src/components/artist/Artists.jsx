import React, { useState } from "react";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com1",
    image: "https://bit.ly/33HnjK0",
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com2",
    image: "https://bit.ly/3I9nL2D",
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com3",
    image: "https://bit.ly/3vaOTe1",
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com4",
    image: "https://bit.ly/3I9nL2D",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com5",
    image: "https://bit.ly/33HnjK0",
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com6",
    image: "https://bit.ly/3vaOTe1",
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com7",
    image: "https://bit.ly/3vaOTe1",
  },
  {
    name: "Veronica Lodge",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: " Software Engineer",
    email: "veronica.lodge@example.com8",
    image: "https://bit.ly/3vaOTe1",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com9",
    image: "https://bit.ly/33HnjK0",
  },
  {
    name: "John Doe",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Tester",
    email: "john.doe@example.com0",
    image: "https://bit.ly/3I9nL2D",
  },
  // More people...
];

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
              item === currentPage ? "border-gray-600" : ""
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

const Artists = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(people.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = people.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-customBlack">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-customWhite uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-customWhite uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-customWhite uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-customWhite uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {person.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                          font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Artists;
