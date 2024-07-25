import React from "react";
import { render, screen } from "@testing-library/react";
import ChatComponent from "./ChatComponent";
import { act } from "react"; // Import act from react

jest.mock("./NameDisplay", () => () => (
  <div data-testid="name-display">Mock NameDisplay</div>
));

describe("ChatComponent", () => {
  it("renders without crashing", () => {
    act(() => {
      render(<ChatComponent />);
    });
  });

  it('renders the static text "Hello"', () => {
    render(<ChatComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it('renders the image with alt text "Hello"', () => {
    render(<ChatComponent />);
    const img = screen.getByAltText("Hello");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", `${process.env.PUBLIC_URL}/hello.png`);
  });

  it("renders the NameDisplay component", () => {
    render(<ChatComponent />);
    expect(screen.getByTestId("name-display")).toBeInTheDocument();
  });
});
