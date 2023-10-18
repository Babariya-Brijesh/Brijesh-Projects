import React from "react";
import { useCartContext } from "../../context/cart_context";
import CartItem from "../CartItem";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Cart() {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return <div>No Items In cart</div>;
  }

  return (
    <Wrapper>
      <div className="cart-container">
        <div className="cart-container-headding">
          <p>ITEM</p>
          <p>PRICE</p>
          <p className="hide">QUANTITY</p>
          <p className="hide">SUBTOTAL</p>
          <p className="hide">REMOVE</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart?.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-btn">
          <NavLink to="/products" className="cart-two-btn-link">
            continue shopping
          </NavLink>
          <button onClick={clearCart}>clear cart</button>
        </div>
        <div className="cart-total-price hide">
          <div className="cart-total-price-subtotal">
            <p className="cart-total-price-subtotal-p">subtotal:</p>
            <p>${total_price}</p>
          </div>
          <div className="cart-total-price-subtotal">
            <p className="cart-total-price-subtotal-p">shhiping fee:</p>
            <p>${shipping_fee}</p>
          </div>
          <hr />
          <div className="cart-total-price-subtotal">
            <p className="cart-total-price-subtotal-p">order total:</p>
            <p>${total_price + total_price}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .cart-total-price {
    display: flex;
    flex-direction: column;
    margin-left: 790px;
    margin-top: 54px;
    background-color: #f6f8fa;
    padding: 14px 16px;
    border-radius: 10px;
  }
  .cart-total-price-subtotal-p {
    font-size: 12px;
    font-weight: 300;
  }
  .cart-total-price hr {
    width: 135px;
  }
  .cart-total-price-subtotal {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 600;
  }

  .cart-container-headding {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-left: 79px;
  }
  .cart-two-btn-link {
    text-decoration: none;
    color: white;
    background-color: rgb(102 102 239);
    font-size: 12px;
    padding: 11px 22px;
    font-weight: 300;
  }
  .cart-two-btn button {
    border-style: none;
    background-color: lightcoral;
    color: white;
    font-size: 12px;
    padding: 11px 22px;
    font-weight: 300;
  }
  .cart-two-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart-container-headding p {
    font-size: 11px;
    font-weight: 300;
  }
  .cart-container {
    width: 60rem;
    margin: auto;
    margin-top: 100px;
  }
  .cart-item {
    margin-left: 79px;
  }
  @media (max-width: 767px) {
    .hide {
      display: none;
    }
    .cart-container-headding {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-left: 79px;
    }
    .cart-container {
      width: 21rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px){
    .cart-total-price {
      display: flex;
      flex-direction: column;
      margin-left: 456px;
      margin-top: 54px;
      background-color: #f6f8fa;
      padding: 14px 40px;
      border-radius: 10px;
  }
  .cart-container {
    width: 43rem;
    margin: auto;
    margin-top: 100px;
}
  }
`;
