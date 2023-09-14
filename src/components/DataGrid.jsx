import React, { useState } from "react";
import { useGetAllCapsulesQuery } from "../api/ApiSlice";
import Loading from "./Loading";
import Card from "./Card";
import SearchForm from "./SearchForm";

const DataGrid = () => {
  const { data, error, isLoading } = useGetAllCapsulesQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterLaunchYear, setFilterLaunchYear] = useState("");
  const [filterType, setFilterType] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Extract unique "type" values from the provided data
  const typeOptions = [...new Set(data?.map((capsule) => capsule.type))].filter(Boolean);

  // Extract unique "original_launch" years from the provided data
  const launchYears = [...new Set(data?.map((capsule) => new Date(capsule.original_launch).getFullYear()))].filter(Boolean).sort();

  const filteredData = data
    ? data.filter((capsule) =>
        capsule.capsule_serial.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterStatus === "" || capsule.status === filterStatus) &&
        (filterLaunchYear === "" || new Date(capsule.original_launch).getFullYear() === parseInt(filterLaunchYear)) &&
        (filterType === "" || capsule.type.toLowerCase() === filterType.toLowerCase())
      )
    : [];

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterLaunchYear={filterLaunchYear}
        setFilterLaunchYear={setFilterLaunchYear}
        filterType={filterType}
        setFilterType={setFilterType}
        typeOptions={typeOptions}
        launchYears={launchYears}
      />
      {isLoading ? (
        <Loading />
      ) : data ? (
        <>
          {currentPageData.length === 0 ? (
            <p>Nothing to display</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-2   gap-10 w-full">
              {currentPageData.map((e) => (
                <Card key={e.capsule_serial} data={e} />
              ))}
            </div>
          )}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="mr-2 px-4 py-2 bg-green-400 rounded-md hover:bg-green-600"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={endIndex >= filteredData.length}
              className="px-4 py-2 bg-green-400 rounded-md hover:bg-green-600"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  );
};

export default DataGrid;
