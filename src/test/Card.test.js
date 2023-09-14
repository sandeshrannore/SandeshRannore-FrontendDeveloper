import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "../components/Card";

describe("Card Component", () => {
  const mockData = {
    capsule_serial: "123",
  };

  it("should render card content", () => {
    const { getByText } = render(<Card data={mockData} />);
    const capsuleSerialElement = getByText("123");

    expect(capsuleSerialElement).toBeInTheDocument();
  });

  it("should not render the modal initially", () => {
    const { queryByTestId } = render(<Card data={mockData} />);
    const modalElement = queryByTestId("modal");

    expect(modalElement).toBeNull();
  });
});
