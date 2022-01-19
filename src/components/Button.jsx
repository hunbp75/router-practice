import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div>
      <Link to="/reservation-form">
        <button type="button">Click Me!</button>
      </Link>
    </div>
  );
}
export default Button;
