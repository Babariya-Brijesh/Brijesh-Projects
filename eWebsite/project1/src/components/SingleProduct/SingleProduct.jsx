import React, { useEffect } from "react";
import { useProductContext } from "../../context/productcontex";
import { useParams } from "react-router-dom";
import PageNavigation from "../PageNavigation";
import { MdSecurity } from "react-icons/md";
import { PiStarHalfFill, PiStarFill } from "react-icons/pi";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import styled from "styled-components";
import Image from "../Image";
import AddToColor from "../AddToColor";

const API = "https://api.pujakaitem.com/api/products";

export default function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    name,
    company,
    price,
    description,
    image,

    stock,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>LODING.......</div>;
  }

  return (
    <Wrapper>
      <PageNavigation name={name} />
      <div className="singleproduct-container">
        <div className="singleproduct-mainDiv">
          <Image image={image} />

          <div className="product-data">
            <h2>{name}</h2>
            <div className="product-data-Reviews">
              <span>
                <PiStarFill />
                <PiStarFill />
                <PiStarFill />
                <PiStarHalfFill />
                (58 Coustomer Reviews)
              </span>
            </div>

            <p className="product-data-price">
              MRP:
              <del>{price + 250000}</del>
            </p>
            <p className=" product-data-real-price">Deal of the Day:{price}</p>
            <p className=" product-data-description">{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>

            <AddToColor product={singleProduct} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`


.singleproduct-mainDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  padding: 0rem 20rem;


}
.singleproduct-container {
  position: absolute;
  margin-top: 100px;
  z-index: 9;
}
  .product-data-info {
    font-size: 10px;
    border-bottom: 1px solid black;
  }
  .warranty-icon {
    background-color: #f6f8fa;
    padding: 7px;
    border-radius: 17px;
  }
  .product-warranty-data p {
    font-size: 9px;
    font-weight: 200;
    margin-top: 3px;
  }
  .product-warranty-data {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .product-data-description {
    font-size: 12px;
    font-weight: 200;
  }
  .product-data-real-price {
    font-size: 12px;
    color: blue;
    font-weight: 400;
  }
  .product-data-price {
    font-size: 12px;
    font-weight: 500;
  }
  .product-data h2 {
    font-size: 29px;
    font-weight: 200;
  }
  .product-data-Reviews {
    color: orange;
    font-size: 12px;
    font-weight: 200;
  }


  .product-data-warranty {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #f6f8fa;
  }

  @media (max-width: 767px) {
    .singleproduct-mainDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 70px;
      align-items: center;
      padding: 0rem 0rem;
    }
    .product-data {
      width: 80%;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px){

    .singleproduct-mainDiv {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 70px;
      padding: 0rem 6rem;
  }
  }
`;
