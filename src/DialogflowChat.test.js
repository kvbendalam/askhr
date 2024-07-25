// DialogflowChat.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import DialogflowChat from "./DialogflowChat";

describe("DialogflowChat Component", () => {
  test("renders df-messenger with correct attributes", () => {
    render(<DialogflowChat />);
    
    const dfMessenger = document.querySelector('df-messenger');
    expect(dfMessenger).toBeInTheDocument();
    expect(dfMessenger).toHaveAttribute("project-id", "lloyds-hack-grp-07");
    expect(dfMessenger).toHaveAttribute("agent-id", "615a24e6-4164-4b4e-8898-ea26e34ee12c");
    expect(dfMessenger).toHaveAttribute("language-code", "en");
    expect(dfMessenger).toHaveAttribute("max-query-length", "-1");
  });

  test("renders df-messenger-chat-bubble with correct attributes", () => {
    render(<DialogflowChat />);
    
    const chatBubble = document.querySelector('df-messenger-chat-bubble');
    expect(chatBubble).toBeInTheDocument();
    expect(chatBubble).toHaveAttribute("chat-title", "askhr");
  });

  test("applies the correct inline styles", () => {
    render(<DialogflowChat />);
    
    const styleElement = document.querySelector("style");
    expect(styleElement).toBeInTheDocument();
    expect(styleElement.textContent).toContain("z-index: 999;");
    expect(styleElement.textContent).toContain("position: fixed;");
    expect(styleElement.textContent).toContain("--df-messenger-font-color: #000;");
    expect(styleElement.textContent).toContain("--df-messenger-font-family: Google Sans;");
    expect(styleElement.textContent).toContain("--df-messenger-chat-background: #f3f6fc;");
    expect(styleElement.textContent).toContain("--df-messenger-message-user-background: #d3e3fd;");
    expect(styleElement.textContent).toContain("--df-messenger-message-bot-background: #fff;");
    expect(styleElement.textContent).toContain("bottom: 16px;");
    expect(styleElement.textContent).toContain("right: 16px;");
  });
});
