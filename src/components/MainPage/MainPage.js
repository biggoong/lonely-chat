import React, { useState, useEffect } from "react";
import { ChatBox } from "../ChatBox";
import { InputMessage } from "../InputMessage";
import { InputNickname } from "../InputNickname";
import { ClearHistoryButton } from "../ClearHistoryButton";
import { loadSession } from "../../lib/sessionStorage";
import { loadState, clearState } from "../../lib/localStorage";

export const MainPage = () => {
  const [nickname, setNickname] = useState("anonymous");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const user = loadSession("user"); //check if we already have user
  const history = loadState("history") || []; //check if we already have history
  
  useEffect(() => {
    if (!chatHistory.length && history.length) {
      setChatHistory(history);
    }
  }, [chatHistory, history]);

  useEffect(() => {
    if (user) {
      setNickname(user);
      document.title = user;
    }
  }, [user]);

  const handleClear = () => {
    clearState("history");
    setChatHistory([]);
}

  return (
    <>
      <div
        className="container text-center text-info"
        style={{ padding: "1rem" }}
      >
        <h2>Wellcome to Lonely ChatBox!</h2>
      </div>
      <div className="jumbotron">
        <InputNickname
          user={user}
          nickname={nickname}
          setNickname={setNickname}
        />
        <ChatBox chatHistory={chatHistory} />
        <InputMessage
          nickname={nickname}
          message={message}
          setMessage={setMessage}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
        />
        <ClearHistoryButton onClear={handleClear} />
      </div>
    </>
  );
};
