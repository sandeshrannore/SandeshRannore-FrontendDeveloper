import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useGetCapsuleQuery } from "../api/ApiSlice"; // Import the API function
import CardModal from "../components/CardModal";

// Mock the useGetCapsuleQuery function
jest.mock("../api/ApiSlice", () => ({
  useGetCapsuleQuery: jest.fn(),
}));

describe("CardModal Component", () => {
  // Create a mock data response for testing
  const mockData = {
    capsule_serial: "123",
    capsule_id: "CAP123",
    status: "Active",
    original_launch: "2022-01-01",
    type: "Type A",
    details: "Sample details",
    missions: [
      { name: "Mission 1", flight: 1 },
      { name: "Mission 2", flight: 2 },
    ],
  };


  it("should render error message when data fetching fails", () => {
    useGetCapsuleQuery.mockReturnValue({ error: "Some error message" });

    const { getByText } = render(<CardModal id="123" onClose={() => {}} />);
    const errorMessageElement = getByText("Something Went wrong");

    expect(errorMessageElement).toBeInTheDocument();
  });

  it("should render modal with data when data is available", () => {
    useGetCapsuleQuery.mockReturnValue({ data: mockData });

    const { getByText, getByLabelText } = render(
      <CardModal id="123" onClose={() => {}} />
    );

    // Check if modal content is present
    const serialNumberElement = getByText("123");
    const capsuleIdElement = getByText("Capsule ID: CAP123");
    const statusElement = getByText("Status: Active");
    const originalLaunchElement = getByText("Original Launch: 2022-01-01");
    const typeElement = getByText("Type: Type A");
    const detailsElement = getByText("Details: Sample details");
  

    expect(serialNumberElement).toBeInTheDocument();
    expect(capsuleIdElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
    expect(originalLaunchElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(detailsElement).toBeInTheDocument();
  });

//   it("should call onClose when clicking outside the modal", () => {
//     useGetCapsuleQuery.mockReturnValue({ data: mockData });
//     const onClose = jest.fn();
//     const { getByTestId } = render(
//       <CardModal id="123" onClose={onClose} />
//     );

//     const modalBackdrop = getByTestId("modal-backdrop");
//     fireEvent.click(modalBackdrop);

//     expect(onClose).toHaveBeenCalledTimes(1);
//   });

  it("should not call onClose when clicking inside the modal", () => {
    useGetCapsuleQuery.mockReturnValue({ data: mockData });
    const onClose = jest.fn();
    const { getByLabelText } = render(
      <CardModal id="123" onClose={onClose} />
    );

    const modalContent = getByLabelText("Capsule Serial");
    fireEvent.click(modalContent);

    expect(onClose).not.toHaveBeenCalled();
  });
});
