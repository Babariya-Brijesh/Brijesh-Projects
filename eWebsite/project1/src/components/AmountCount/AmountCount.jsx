import React,{useState} from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
export default function AmountCount() {

    const [productAmount, setProductAmount] = useState(1);
    const minus = () => {
        productAmount > 1 ? setProductAmount(productAmount - 1) : setProductAmount(1);
    };
    const pluse = () => {
        productAmount < 6 ? setProductAmount(productAmount + 1) : setProductAmount(6);
    };

  return (
    <div><div className="cartDrawer-product-cartbtn-div ">
    <button
      className="cartDrawer-product-cartbtn-div-btn"
      onClick={() => minus()}
    >
      <FaMinus />
    </button>
    <div>{productAmount}</div>
    <button
      className="cartDrawer-product-cartbtn-div-btn"
      onClick={() => pluse()}
    >
      <FaPlus />
    </button>
  </div></div>
  )
}
