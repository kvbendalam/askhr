import React from "react";

function DialogflowChat() {
  return (
    <>
      <df-messenger
        location="us-central1"
        project-id="ai-hr-428916"
        agent-id="1cfbbb85-8a35-47b8-996d-6a8f83df984a"
        language-code="en"
        max-query-length="-1"
        chat-icon="https://example.com/your-icon-image.png"
      >
        <df-messenger-chat-bubble chat-title="aihr"></df-messenger-chat-bubble>
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
