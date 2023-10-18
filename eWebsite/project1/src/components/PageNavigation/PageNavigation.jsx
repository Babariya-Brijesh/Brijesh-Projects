import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export default function PageNavigation({ name }) {
  return (
    <Wrapper>
      <div className="PageNavigation">
        <NavLink to="/" className="PageNavigation-NavLink">
          Home
        </NavLink>
        /{name}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .PageNavigation {
    display: flex;
    align-items: center;
    background-color: #f6f8fa;
    height: 51px;
    font-size: 22px;
  }
  .PageNavigation-NavLink {
    margin-left: 91px;
    font-size: 24px;
    text-decoration: none;
  }
  @media (max-width: 767px) {
    .PageNavigation-NavLink {
      margin-left: 58px;
      font-size: 24px;
      text-decoration: none;
    }
  }
`;
