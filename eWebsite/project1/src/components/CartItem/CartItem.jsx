import React, { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cart_context";
import styled from "styled-components";

export default function CartItem({
  id,
  name,
  image,
  color,
  price,
  amount,
  max,
}) {
  const { removeItem } = useCartContext();

  const [productAmount, setProductAmount] = useState(amount);
  const minus = () => {
    amount > 1 ? setProductAmount(productAmount - 1) : setProductAmount(1);
  };
  const pluse = () => {
    amount < max ? setProductAmount(productAmount + 1) : setProductAmount(max);
  };
  return (
    <Wrapper>
      <div className="cart-map-details">
        <div className="cart-image-name">
          <img src={image} alt={id} />

          <div className="cart-namecolor">
            <p>{name}</p>
            <div className="color-div">
              <p>color:</p>
              <div
                className="color-style"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>
          </div>
        </div>
        <div className="cart-orignal-price">
          <p>{price}</p>
        </div>
        <div className="product-cartbtn-div hide">
          <button className="product-cartbtn-div-btn" onClick={() => minus()}>
            <FaMinus />
          </button>
          <div>{productAmount}</div>
          <button className="product-cartbtn-div-btn" onClick={() => pluse()}>
            <FaPlus />
          </button>
        </div>
        <div className="cart-price hide">
          <p> {price * amount}</p>
        </div>
        <div className="cart_remove hide">
          <FaTrash onClick={() => removeItem(id)} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .cart-namecolor {
    font-size: 11px;
    margin-top: -11px;
    font-weight: 300;
    margin-left: 8px;
  }
  .color-style {
    height: 11px;
    width: 11px;
    border-radius: 10px;
  }

  .color-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -16px;
    gap: 7px;
  }

  .cart-price p {
    font-size: 12px;
    font-weight: 300;
  }
  .cart_remove {
    color: orangered;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .cart-map-details {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-self: center;
    justify-self: center;
    margin-top: 20px;
  }
  .cart-orignal-price p {
    font-size: 12px;
    font-weight: 300;
  }
  .cart-image-name img {
    height: 29px;
    width: 40px;
  }
  .product-cartbtn-div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 11px;
    padding: 0px 9px;
    font-weight: 300;
    font-size: 16px;
  }
  .product-cartbtn-div-btn {
    background-color: transparent;
    color: black;
    border-style: none;
    font-size: 14px;
    font-weight: 300;
  }
  .cart-image-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 139px;
    margin-left: -43px;
  }
  @media (max-width: 767px) {
    .hide {
      display: none;
    }
    .cart-map-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-self: center;
      justify-self: center;
      margin-top: 20px;
    }
    .cart-image-name {
      margin-left: -53px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px){
  .cart-image-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 139px;
    margin-left: -49px;
}
}
`;
