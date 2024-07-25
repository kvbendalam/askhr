import React from "react";
import "./Dashboard.css";
import ChatComponent from "./ChatComponent";
import DialogflowChat from "./DialogflowChat";

function Dashboard() {
  return (
    <>
      <ChatComponent />
      <DialogflowChat />
    </>
  );
}

export default Dashboard;
