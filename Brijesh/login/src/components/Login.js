import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { dataloginfunction } from "../redux/action";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInputData, setUserInputData] = useState("");
  const [passwordInputData, setPasswordInputData] = useState("");

  const data = useSelector((state) => state.dataReducer);

  const loginDataSend = () => {
    setUserInputData("");
    setPasswordInputData("");
    dispatch(dataloginfunction());

    if (
      data[0]?.userData.username === userInputData &&
      data[0]?.userData.password === passwordInputData
    ) {
      return navigate("/");
    } else {
      return navigate("/error");
    }
  };

  const navigateSinginPage = () => {
    navigate("/singin");
  };

  return (
    <>
      <div className="logindiv">
        <h1>Login Page</h1>

        <div className="inputdiv">
          <span > UserName:</span>

          <input
           placeholder="write name"
            value={userInputData}
            type="text"
            onChange={(e) => setUserInputData(e.target.value)}
          />
        </div>
        <div className="inputdiv inputdiv2">
          <span> Password:</span>

          <input
          placeholder="write password"
            value={passwordInputData}
            type="password"
            onChange={(e) => setPasswordInputData(e.target.value)}
          />
        </div>
<br/>
        <button
        className="loginbtn"
          onClick={() => {
            loginDataSend();
          }}
        >
          login
        </button>
        <br />
        <button
         className="loginbtn"
          onClick={() => {
            navigateSinginPage();
          }}
        >
          Singin
        </button>
      </div>
    </>
  );
}
