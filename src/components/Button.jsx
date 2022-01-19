import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

function Button() {
  return (
    <div>
      <Link to="/Form">
        <button type="button">Click Me!</button>
      </Link>
      <Form />
    </div>
  );
}
export default Button;

/*
      <Link to="/Form">
        <button type="button" onClick={""}>Click Me!</button>
      </Link> 
      */
