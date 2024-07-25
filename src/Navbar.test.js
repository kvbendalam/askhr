import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("renders Navbar component", () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild).toHaveClass("navbar");
  });

  test("renders the logo div", () => {
    const { getByAltText } = render(<Navbar />);
    const logoElement = getByAltText("Logo");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders the logo image with correct src and alt attributes", () => {
    const { getByAltText } = render(<Navbar />);
    const logoElement = getByAltText("Logo");
    expect(logoElement).toHaveAttribute("src", "./lloydslogo.png");
    expect(logoElement).toHaveAttribute("alt", "Logo");
  });
});
