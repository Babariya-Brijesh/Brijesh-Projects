import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export default function Listview({ products }) {
  console.log("------>", products);
  // const { name, price, description, image } = products;
  return (
    <Wrapper>
    <div className="listview-maindiv">
      {products?.map((item, i) => {
        const { name, price, description, image, id } = item;
        return (
          <div className="listview">
            <div className="listview-container">
            <div className="listview-img">
              <img src={image} alt={name} />
            </div>
            <div className="listview-details">
              <h3>{name}</h3>
              <p>${price}</p>
              <p>{description.slice(0, 90)}...</p>
              <div className="btn-main-NavLink">
                {" "}
                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  Read More
                </NavLink>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
   </Wrapper>
  );
}

const Wrapper = styled.section`
.btn-main {
  color: white;
  background-color: rgb(102 102 239);
  border-style: none;
  padding: 10px 27px;
  text-decoration: none;
  font-size: 12px;
}

.btn-main-NavLink {
  margin-top: 38px;
}
.listview-details h3 {
  font-size: 23px;
  font-weight: 200;
}
.listview-details p {
  font-size: 13px;
  font-weight: 200;
  margin-top: 28px;
}
.listview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 552px;
  gap: 79px;
  border: 2px solid #f6f8fa;
  margin-top: 55px;
  padding: 23px 47px;
}
.listview-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.listview-img img {
  height: 140px;
  width: 221px;
}
@media (max-width: 768px) {
  .listview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 243px;
    gap: -7px;
    border: 2px solid #f6f8fa;
    margin-top: 55px;
    padding: 23px 47px;
}
}

`