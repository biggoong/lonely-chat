import React from "react";

export const ChatBox = ({ chatHistory }) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        minHeight: "30vh",
        marginBottom: "1rem"
      }}
    >
      {chatHistory.length
        ? chatHistory.map(item => (
            <div key={item.time}>
              <span className="text-primary font-weight-bold">
                {item.nickname}:
              </span>{" "}
              {item.message}
            </div>
          ))
        : "Be the first! Start chat!"}
    </div>
  );
};
