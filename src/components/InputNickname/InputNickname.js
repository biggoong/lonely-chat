import React, { useState, useEffect } from "react";
import { saveSession } from "../../lib/sessionStorage";


export const InputNickname = ({ user, nickname, setNickname }) => {
  const [validateError, setValidateError] = useState("");
  const [activeSubmit, setActiveSubmit] = useState("disabled");
  const [disableInput, setDisableInput] = useState(false);

  useEffect(() => {
    if (user) {
      setDisableInput(true);
    }
  }, [user]);

  const handleOnChange = event => {
    setNickname(event.target.value);
  };

  const handleOnBlur = event => {
    const { value } = event.target;
    if (value.length < 3) {
      setValidateError("Nickname must be more than 3 symbols");
      setActiveSubmit("disabled");
    } else {
      setValidateError("");
      setActiveSubmit("active");
    }
  };

  const handleSubmit = () => {
    if (nickname !== "anonymous") {
      setDisableInput(true);
      setActiveSubmit("disabled");
      saveSession("user", nickname);
      document.title = nickname;
    }
  };

  return (
    <div className="container" style={{ marginBottom: "1rem" }}>
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="comment" className="mr-sm-2">
            Your Nickname:
          </label>
          <input
            value={nickname}
            type="text"
            className="form-inline mr-sm-2"
            id="nickname"
            required
            onBlur={handleOnBlur}
            disabled={disableInput}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className={`btn btn-info mr-sm-2 ${activeSubmit}`}
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
      {nickname && disableInput && (
        <div>
          <p className="text-success">Your are {nickname} today!</p>
        </div>
      )}
    </div>
  );
};
