import React from "react";
import styled from "@emotion/styled";
import NameDisplay from "./NameDisplay";

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  min-height: 100vh;
  width: 100%;
  margin-top: 60px;
`;

const ChatComponent = () => {
  return (
    <Root>
      <div className="dashboard-page">
        <div className="dashboard-container">
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/hello.png`} alt="Hello" />
          </div>
          <div className="text-container">
            <div className="static-text">Hello</div>
            <div className="animated-text">
              <NameDisplay />
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export default ChatComponent;
