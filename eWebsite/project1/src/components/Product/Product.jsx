import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <Wrapper>
    <NavLink to={`/singleproduct/${id}`} className="sproduct-navlink">
      <div className="sproduct">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="sproduct-caption">{category}</figcaption>
        </figure>

        <div className="sproduct-data">
          <div className="sproduct-data-flex">
            <h3>{name}</h3>
            <p className="sproduct-data--price">₹{price}</p>
          </div>
        </div>
      </div>
    </NavLink>
    </Wrapper>
  );
};

export default Product;



const Wrapper = styled.section`
.sproduct-navlink{
    text-decoration: none;
    }
    .sproduct-data-flex{
      display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 11px;
    margin-top: -28px;
    margin-bottom: -9px;
    }
    .sproduct-data-flex h3{
      font-size: 13px;
      font-weight: 300;
      color: black;
      
    }
    .sproduct-data-flex p{
      font-size: 13px;
      font-weight: 300;
    }
    .sproduct figure img {
      height: 140px;
      width: 221px;
    }
    .sproduct-data{
      width: 242px;
    }
    .sproduct {
      display: flex;
      width: 242px;
      background-color: white;
    flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .sproduct-caption{
      background-color: #f6f8fa;
      text-decoration: none;
      font-size: 10px;
      width: min-content;
      padding: 5px;
      border-radius: 7px;
      position: relative;
      top: -131px;
      left: 156px;
    }
`