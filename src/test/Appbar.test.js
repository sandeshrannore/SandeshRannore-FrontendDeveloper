import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";

// Mock the useNavigate function
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mock sessionStorage
const sessionStorageMock = {
  clear: jest.fn(),
};

Object.defineProperty(window, "sessionStorage", {
  value: sessionStorageMock,
});

describe("Appbar Component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Appbar />);
    const appbarElement = getByText("SpaceX Capsules");
    expect(appbarElement).toBeInTheDocument();
  });
});
