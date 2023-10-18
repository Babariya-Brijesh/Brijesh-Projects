import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeDatafunction } from "../redux/action";
import { Navigate } from "react-router-dom";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(true);
  const [cross, setCross] = useState(false);

  const dispatch = useDispatch();

  const removedata = () => {
    <Navigate to="/login" />;
    dispatch(removeDatafunction());
  };

  const openMenuFunction = () => {
    setOpenMenu(!openMenu);
    setCross(!cross);
  };
  // const closeMenuFunction = () => {
  //   setOpenMenu(!openMenu);
  //   setCross(!cross);
  // };

  return (
    <>
      <nav className="navbar">
        <div>
          <button className="logo">B</button>
        </div>
        {/* {openMenu && (
          <div
            className="cross"
            onClick={() => {
              closeMenuFunction();
            }}
          >
            &#215;
          </div>
        )}
        {cross && (
          <div
            className="box"
            onClick={() => {
              openMenuFunction();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )} */}
        {/* <div className="hamburger"> */}
        <div
          className={openMenu ? "menu-btn" : "menu-btn open"}
          onClick={() => {
            openMenuFunction();
          }}
        >
          <div class="menu-btn__burger"></div>
          </div>
        {/* </div> */}
        {openMenu && (
          <div className="navdiv">
            <ul className={"navbar-ul navbar-ul2"}>
              <li>
                <NavLink to="home">Home</NavLink>
              </li>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="contacts">contacts</NavLink>
              </li>
              <li>
                <NavLink to="Socialmedia">social media</NavLink>
              </li>
              <li>
                <button
                  className="navbtn"
                  onClick={() => {
                    removedata();
                  }}
                >
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
