import React from "react";

function DialogflowChat() {
  return (
    <>
      <df-messenger
        project-id="lloyds-hack-grp-07"
        agent-id="dfe92bae-a6c2-45a1-a8d3-d5896bdaa853"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="askhr"></df-messenger-chat-bubble>
      </df-messenger>

      <style>
        {`
          df-messenger {
            z-index: 999;
            position: fixed;
            --df-messenger-font-color: #000;
            --df-messenger-font-family: Google Sans;
            --df-messenger-chat-background: #f3f6fc;
            --df-messenger-message-user-background: #d3e3fd;
            --df-messenger-message-bot-background: #fff;
            bottom: 16px;
            right: 16px;
          }
        `}
      </style>
    </>
  );
}

export default DialogflowChat;
