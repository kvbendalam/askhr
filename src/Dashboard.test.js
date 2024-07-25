// Dashboard.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
 
// Mock the child components
jest.mock("./ChatComponent", () => () => <div>ChatComponent</div>);
jest.mock("./DialogflowChat", () => () => <div>DialogflowChat</div>);

describe("Dashboard Component", () => {
  test("renders ChatComponent and DialogflowChat", () => {
    render(<Dashboard />);

    // Check if ChatComponent is rendered
    expect(screen.getByText("ChatComponent")).toBeInTheDocument();

    // Check if DialogflowChat is rendered
    expect(screen.getByText("DialogflowChat")).toBeInTheDocument();
  });
});
