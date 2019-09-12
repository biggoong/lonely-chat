import React from "react";

export const ClearHistoryButton = ({ onClear }) => (
  <div style={{ float: "right" }}>
    <button type="button" className="btn btn-danger" onClick={onClear}>
      Clear History
    </button>
  </div>
);
