import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "../Nav";

export default function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="../images/logo.png" alt="my logo img" className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 2.8rem;
  height: 73px;

  background-color: #f6f8fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 3rem;
  }
`;
