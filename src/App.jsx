import React from "react";
import Form from "./components/form/index.jsx";
import Call from "./components/call/index.jsx";
import Tryal from "./components/tryal/index.jsx";
import "./App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="body">
      <div className="left">
        <Call />
      </div>
      <div className="right">
        <div className="options">
          <Tryal />

          <Form />
        </div>
      </div>
    </div>
  );
};
