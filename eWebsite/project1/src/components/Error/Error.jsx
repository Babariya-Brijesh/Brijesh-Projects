import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-div">
      <h1>404</h1>
      <h3>OH YOU ARE LOST.</h3>
      <p>
        The Page You Are Looking For Does Not Exits.How you are got is a
        mystery.But you can click blow button{" "}
      </p>
      <NavLink to="/">
      <button>Go Home Page</button>
      </NavLink>
    </div>
  );
}
