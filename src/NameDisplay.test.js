import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NameDisplay from "./NameDisplay";

jest.useFakeTimers(); 

describe("NameDisplay", () => {
  it("renders without crashing", () => {
    act(() => {
      render(<NameDisplay />);
    });
  });

  it("initially renders without text", () => {
    render(<NameDisplay />);
    expect(screen.getByRole('heading')).toHaveTextContent("");
  });
  

  it("sets the interval with the correct timing", () => {
    jest.useFakeTimers();
    const spy = jest.spyOn(global, 'setInterval');
  
    render(<NameDisplay />);
  
    expect(spy).toHaveBeenCalledWith(expect.any(Function), 200);
  
    spy.mockRestore();
  });
});