import React from "react";
import { useProductContext } from "../../context/productcontex";
import Product from "../Product";
import styled from "styled-components";

export default function FeatureProduct() {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>.....Loding</div>;
  }
  return (
    <Wrapper>
      <div className="fProduct-container">
        <div className="fProduct">
          <div className="fProduct-data">Check Now!</div>
          <div className="fProduct-heading">Our Feature Services</div>
          <div className="fProduct-product-div">
            {featureProducts?.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .fProduct-product-div {
    margin-top: 50px;
    display: flex;
    gap: 90px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .fProduct-container {
    background-color: #f6f8fa;
    display: flex;
    margin-top: 60px;
    justify-content: center;
    align-items: flex-start;
  }
  .fProduct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 52px 0px;
  }
  .fProduct-data {
    color: lightblue;
    font-size: 13px;
    font-weight: 400;
  }
  .fProduct-heading {
    font-size: 33px;
    font-weight: 300;
  }
  @media (max-width: 767px) {
    .fProduct {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 52px 0px;
  }
    .fProduct-product-div {
      gap: 17px;
    }
    .fProduct-heading {
      font-size: 24px;
     
    }
  }
  @media (min-width: 768px) and (max-width: 1024px){
    .fProduct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 52px 0px;
}
.fProduct-product-div {
  margin-top: 50px;
  display: flex;
  gap: 35px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
  }
`;
