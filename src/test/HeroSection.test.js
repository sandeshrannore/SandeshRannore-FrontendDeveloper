import React from "react";
import { render } from "@testing-library/react";
import HeroSection from "../components/HeroSection";

describe("HeroSection Component", () => {
  it("should render a title", () => {
    const { getByText } = render(<HeroSection />);
    const titleElement = getByText("Welcome to SpaceX");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render a description", () => {
    const { getByText } = render(<HeroSection />);
    const descriptionElement = getByText(
      "SpaceX capsules, including Cargo Dragon (Dragon 1) and Crew Dragon (Dragon 2), are advanced spacecraft designed for cargo resupply missions to the International Space Station (ISS) and crewed missions, respectively. These capsules have played a pivotal role in advancing space exploration."
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render an image with alt text 'Satellite'", () => {
    const { getByAltText } = render(<HeroSection />);
    const imageElement = getByAltText("Satellite");
    expect(imageElement).toBeInTheDocument();
  });
});
