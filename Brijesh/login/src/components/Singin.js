import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { singinDatafunction } from "../redux/action";
import { useNavigate } from "react-router-dom";

export default function Singin() {
  const navigate = useNavigate();

  const [userSingData, setUserSingData] = useState("");
  const [passwordData, setpasswordData] = useState("");

  const dispatch = useDispatch();

  const singinDataSend = () => {
    const loginData = [
      {
        isLogin: false,
        userData: { username: userSingData, password: passwordData },
      },
    ];
    navigate("/")
    setUserSingData("");
    setpasswordData("");
    dispatch(singinDatafunction(loginData));
  };

  const navigateLoginPage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="logindiv">
        <h1>Singin Page</h1>
        <div className="inputdiv">
          <span>UserName:</span>

          <input
            placeholder="write name"
            value={userSingData}
            type="text"
            onChange={(e) => setUserSingData(e.target.value)}
          />
        </div>

        <div className="inputdiv inputdiv2">
          <span> Password:</span>
          <input
            placeholder="write password"
            value={passwordData}
            type="password"
            onChange={(e) => setpasswordData(e.target.value)}
          />
        </div>

        <br />
        <button
          className="loginbtn"
          onClick={() => {
            singinDataSend();
          }}
        >
          Singin
        </button>
        <br />
        <button
          className="loginbtn"
          onClick={() => {
            navigateLoginPage();
          }}
        >
          Go For Login
        </button>
      </div>
    </>
  );
}
