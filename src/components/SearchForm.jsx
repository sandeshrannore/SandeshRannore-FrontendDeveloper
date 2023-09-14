import React from "react";

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
  filterLaunchYear,
  setFilterLaunchYear,
  filterType,
  setFilterType,
  typeOptions,
  launchYears,
}) => {
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-3 py-2 border rounded-md"
      />
      <div className="flex justify-between mb-4 flex-wrap">
        {/* Status Filter */}
        <div className="mr-2">
          <label className="block text-sm font-medium text-gray-700">
            Status:
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="mt-1 p-2 border rounded-md"
            >
              <option value="">All</option>
              <option value="retired">Retired</option>
              <option value="active">Active</option>
              <option value="unknown">Unknown</option>
            </select>
          </label>
        </div>

        {/* Launch Year Filter */}
        <div className="mr-2">
          <label className="block text-sm font-medium text-gray-700">
            Launch Year:
            <select
              value={filterLaunchYear}
              onChange={(e) => setFilterLaunchYear(e.target.value)}
              className="mt-1 p-2 border rounded-md"
            >
              <option value="">All</option>
              {launchYears?.map((year) => (
                <option  key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Type Filter */}
        <div className="mr-2">
          <label className="block text-sm font-medium text-gray-700">
            Type:
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="mt-1 p-2 border rounded-md"
            >
              <option value="">All</option>
              {typeOptions?.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
