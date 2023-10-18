import React from "react";
import { useState } from "react";
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";


export default function AddToColor({ product }) {
  const { addToCart, setOpenCart } = useCartContext();
  const { colors = [], id, stock } = product;

  const [tickColor, setTickColor] = useState(colors[0]);
  const [productAmount, setProductAmount] = useState(1);

  const openAddToCart = () => {
    addToCart(id, tickColor, productAmount, product);
    setOpenCart();
  };

  const minus = () => {
    productAmount > 1
      ? setProductAmount(productAmount - 1)
      : setProductAmount(1);
  };
  const pluse = () => {
    productAmount < stock
      ? setProductAmount(productAmount + 1)
      : setProductAmount(stock);
  };

  return (
    <Wrapper>
      <div className="product-color-cartbtn">
        <div className="product-color">
          color:
          {colors?.map((ele, i) => {
            return (
              <button
                key={i}
                style={{ backgroundColor: ele }}
                onClick={() => setTickColor(ele)}
                className={
                  tickColor === ele
                    ? "product-color-btn product-color-btn-active"
                    : "product-color-btn"
                }
              >
                {tickColor === ele ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
        <div className="product-cartbtn-div">
          <button className="product-cartbtn-div-btn" onClick={() => minus()}>
            <FaMinus />
          </button>
          <div>{productAmount}</div>
          <button className="product-cartbtn-div-btn" onClick={() => pluse()}>
            <FaPlus />
          </button>
        </div>
        <div className="product-cartbtn-link-div ">
          <NavLink
            // to="/cart"
            className="product-cartbtn-link "
            onClick={() => openAddToCart()}
          >
            Add To Cart
          </NavLink>
        </div>
      </div>
      {/* {openCart && (
        <div className="cartnew-item">
          <CartItemDrawer cart={cart} />
        </div>
      )} */}
      {/* {openCart && <div className="cartnew-item">
          {cart?.map((curElem) => {
            return <CartItemDrawer key={curElem.id} {...curElem} />;
          })}
        </div>} */}
      {/* <div className="addtocart-close-btn"><CgClose/></div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`


  .product-cartbtn-div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 21px;
    padding: 0px 9px;
    margin-top: 23px;
    color: blue;
    font-size: 22px;
  }
  .product-cartbtn-link {
    color: white;
    background-color: rgb(102 102 239);
    border-style: none;
    padding: 10px 27px;

    text-decoration: none;
  }
  .product-cartbtn-link-div {
    margin-top: 21px;
  }
  .product-cartbtn-div-btn {
    background-color: transparent;
    color: black;
    border-style: none;
    font-size: 17px;
    font-weight: 300;
  }
  .product-color-btn {
    height: 19px;
    width: 19px;
    border-radius: 15px;
    opacity: 0.5;
    color: white;
    font-size: 9px;
    margin: 0px 4px;
    border-color: transparent;
  }
  .product-color-btn-active {
    opacity: 1;
  }
  .product-color {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 200;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
