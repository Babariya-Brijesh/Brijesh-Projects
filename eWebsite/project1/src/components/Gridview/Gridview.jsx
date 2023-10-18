import React from 'react'
import Product from "../Product";
import styled from "styled-components";


export default function Gridview({products}) {
  return (
<Wrapper>
    <div className="container-gridview">
    {products?.map((curElem) => {
      return <Product key={curElem.id} {...curElem} />;
    })}
  </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`
.container-gridview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 68px;
}
@media (max-width: 768px) {
.container-gridview {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 68px;
}}
`