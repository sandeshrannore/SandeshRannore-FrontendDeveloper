import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm Component", () => {
  it("should render input fields and filter options", () => {
    const { getByPlaceholderText, getByLabelText } = render(<SearchForm />);
    
    // Check if input fields are present
    const searchInput = getByPlaceholderText("Search...");
    expect(searchInput).toBeInTheDocument();

    // Check if filter labels and select elements are present
    const statusLabel = getByLabelText("Status:");
    const launchYearLabel = getByLabelText("Launch Year:");
    const typeLabel = getByLabelText("Type:");
    expect(statusLabel).toBeInTheDocument();
    expect(launchYearLabel).toBeInTheDocument();
    expect(typeLabel).toBeInTheDocument();
  });

  it("should update searchQuery state on input change", () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchForm searchQuery="" setSearchQuery={setSearchQuery} />
    );

    const searchInput = getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "SpaceX" } });

    expect(setSearchQuery).toHaveBeenCalledWith("SpaceX");
  });

  it("should update filterStatus state on select change", () => {
    const setFilterStatus = jest.fn();
    const { getByLabelText } = render(
      <SearchForm filterStatus="" setFilterStatus={setFilterStatus} />
    );

    const statusSelect = getByLabelText("Status:");
    fireEvent.change(statusSelect, { target: { value: "active" } });

    expect(setFilterStatus).toHaveBeenCalledWith("active");
  });
});
