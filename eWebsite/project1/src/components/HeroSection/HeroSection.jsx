import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <Wrapper>
      <div className="container">
        <div className="hero-div">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> Eccomerce Shop </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <button className="hero-section-data-button">show now</button>
            </NavLink>
          </div>

          <div className="hero-section-image">
            <figure>
              <img
                src="./images/hero.jpg"
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`


  .hero-section-data-button {
    color: white;

    background-color: rgb(102 102 239);
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 71px;
  }

  .hero-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54rem;
  }
  .hero-section-data {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }
  .img-style {
    height: 12rem;
    width: 18rem;

    box-shadow: 49px -39px lightblue;
  }
  .intro-data {
    color: lightblue;
  }

  .hero-section-data h1 {
    margin-top: -12px;
  }
  .hero-section-data p {
    font-size: 15px;
  }
  @media (max-width: 767px) {
    .hero-div {
      display: flex;

      justify-content: center;
      align-items: center;
      width: 16rem;

      flex-direction: column-reverse;
    }
    .img-style {
      height: 10rem;
      width: 15rem;
      box-shadow: 26px -33px lightblue;
  }
    
  }
  @media (min-width: 768px) and (max-width: 1024px){
    .hero-div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 39rem;
  }
  }
`;
