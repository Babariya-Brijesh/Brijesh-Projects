import React from "react";
import styled from "styled-components";

export default function Trusted() {
  return (
    <Wrapper>
      <div className="container-1">
        <div className="sub-div-company">
          <h3>Trusted By 1000+ Companies</h3>
          <div className="company-name-div">
            <div className="logo">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
              />
            </div>
            <div className="logo">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"
              />
            </div>
            <div className="logo">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"
              />
            </div>
            <div className="logo">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"
              />
            </div>
            <div className="logo">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brands"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`

  .sub-div-company {
    background-color: #f6f8fa;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
  .sub-div-company h3 {
    font-size: 17px;
    font-weight: 300;
  }
  .company-name-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 100px;
  }
  .logo img {
    width: 88px;
  }
  .sub-div-company {
    padding: 50px 0px;
  }

  @media (max-width: 768px) {
    .company-name-div {
     
      gap: 30px;
    }
  }
`;
