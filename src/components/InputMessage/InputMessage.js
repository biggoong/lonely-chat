import React, { useState } from "react";
import { saveState } from "../../lib/localStorage";

export const InputMessage = ({
  nickname,
  message,
  setMessage,
  chatHistory,
  setChatHistory
}) => {
  const [validateError, setValidateError] = useState("");
  const [active, setActive] = useState("disabled");

  const handleOnChange = event => {
    setMessage(event.target.value);
  };

  const handleOnBlur = event => {
    const { value } = event.target;
    const regex = /^[a-zA-Z\s]+$/;
    if (!value.match(regex)) {
      setValidateError("Must input text only");
      setActive("disableds");
    } else {
      setValidateError("");
      setActive("active");
    }
  };

  const handleSubmit = () => {
    const data = {nickname: nickname, message: message, time: Date.now()};
    const newHistory = [...chatHistory, data];
    setChatHistory(newHistory);
    saveState("history", newHistory);
    setMessage("");
  };

  return (
    <div className="container">
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="comment" className="mr-sm-2">
            Type here:
          </label>
          <input
            value={message}
            type="text"
            className="form-inline mr-sm-2"
            id="comment"
            required
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className={`btn btn-info mr-sm-2 ${active}`}
            onClick={handleSubmit}
          >
            Submit
          </button>
          {validateError && (
            <div className="container">
              <p className="small text-danger">Error: {validateError}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
