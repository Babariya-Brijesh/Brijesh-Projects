import React from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";
import AmountCount from "../AmountCount";
import { CgClose } from "react-icons/cg";
import { useCartContext } from "../../context/cart_context";

export default function CartItemDrawer({ cart }) {
  const { setOpenCart } = useCartContext();
  return (
    <Wrapper>
      <div className="cartdrawer-close-outline" onClick={setOpenCart}>
        <CgClose />
      </div>
      <div className="cartDrawer-map-maindiv">
        {cart?.map((curElem) => {
          const { id, name, image, price } = curElem;
          return (
            <div className="cartDrawer-map-details">
              <div className="cartDrawer-image-name">
                <img src={image} alt={id} />

                <div className="cartDrawer-namecolor">
                  <p>{name}</p>
                  <div className="cartDrawer-div">
                    <p>Price:</p>
                    <div className="cartDrawer-orignal-price">
                      <p>{price}</p>
                    </div>
                  </div>
                </div>
              </div>
              <AmountCount />
            </div>
          );
        })}
        
      </div>
    
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .cartDrawer-namecolor {
    font-size: 11px;
    margin-top: -11px;
    font-weight: 300;
    margin-left: 8px;
  }
  .cartDrawer-style {
    height: 11px;
    width: 11px;
    border-radius: 10px;
  }
  .cartDrawer-map-maindiv {
    margin-top: 377px;
    position: fixed;
    top: -18%;
    right: 3%;
    overflow-y: scroll;

    height: 400px;
    animation-name: speed;
    animation-duration: 2s;

    
  }
  .cartDrawer-map-maindiv::-webkit-scrollbar  {
   display:none;
  }
  @keyframes speed {
    from {
      width: 0px;
      opacity: 0;
    }
    to {
      width: 290px;
      opacity: 1;
    }
  }

  .cartDrawer-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -18px;
    gap: 7px;
  }

  .cartDrawer-price p {
    font-size: 12px;
    font-weight: 300;
  }
  .cartDrawer {
    color: orangered;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .cartDrawer-map-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-self: center;
    justify-self: center;
    margin-top: 24px;
    // animation-name: speed;
    animation-duration: 1.5s;

    animation-direction: alternate;
  }
  .cartDrawer-orignal-price p {
    font-size: 12px;
    font-weight: 300;
  }
  .cartDrawer-image-name img {
    height: 40px;
    width: 47px;
  }
  .cartDrawer-product-cartbtn-div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 11px;
    padding: 0px 9px;
    font-weight: 300;
    font-size: 16px;
    margin-left: 16px;
  }
  .cartDrawer-product-cartbtn-div-btn {
    background-color: rgb(102 102 239);
    color: black;
    border-style: none;
    font-size: 14px;
    font-weight: 300;
    border-radius: 17px;
    height: 30px;
    width: 29px;
    
  }
  .cartDrawer-image-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 139px;
  }
  @media (max-width: 767px) {
    .cartDrawer-product-cartbtn-div {
      margin-left: 44px;
      font-size: 28px;

    }
    .cartDrawer-map-details {
      margin-top: 60px;
    }
    .cartDrawer-image-name {
      margin-left: 15px;
    }

    .cartDrawer-image-name img {
      height: 55px;
      width: 61px;
    }
    .cartDrawer-map-maindiv {
      margin-top: 377px;
    position: fixed;
    top: -290px;
    right: 49px;
    overflow-y: scroll;
    height: 463px;
    animation-name: speed;
    animation-duration: 3s;
    animation-direction: alternate;
    }
    .hide {
      display: none;
    }
  
   
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .cartDrawer-map-maindiv {
      margin-top: 377px;
      position: fixed;
      top: -8%;
      right: 5%;
      overflow-y: scroll;
      height: 400px;
      animation-name: speed;
      animation-duration: 3s;
      animation-direction: alternate;
  }
    .cartDrawer-image-name {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 139px;
      margin-left: 7px;
    }
  }
`;
