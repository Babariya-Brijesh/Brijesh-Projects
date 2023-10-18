import React from "react";
import styled from "styled-components";
import FilterSection from "../../components/FilterSection";
import Sort from "../../components/Sort";
import ProductList from "../../components/ProductList";

export default function Products() {
  return (
    <Wrapper>
    <div className="products-all-div">
      <div>
        <FilterSection />
      </div>

      <section className="product-view-sort">
        <div className="sort-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;


.products-all-div {
  display: flex;
  justify-content: center;
  gap: 101px;
  margin-top: 100px;
 
}
@media (max-width: 767px) {
  .products-all-div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 43px;
    margin-top: 33px;
}


}
@media (min-width: 768px) and (max-width: 1024px){
  .products-all-div {
    display: flex;
    justify-content: center;
    gap: 27px;
    margin-top: 100px;
}
.container-gridview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 68px;
}

}
`
