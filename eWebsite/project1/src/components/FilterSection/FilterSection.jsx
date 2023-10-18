import React from "react";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";

export default function FilterSection() {
  const { state, updateFilterValue, clearFliter } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((ele) => {
      return ele[property];
    });
    if (property === "colors") {

      newValue = newValue.flat();
    }

    return (newValue = ["All", ...new Set(newValue)]);
  };

  const catagaryOnyData = getUniqueData(state.all_products, "category");
  const companyData = getUniqueData(state.all_products, "company");
  const colorData = getUniqueData(state.all_products, "colors");

  return (
    <Wrapper>
      <div className="filters-maindiv">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="filters-search-input"
        >
          <input
            type="text"
            name="text"
            value={state.filters.text}
            onChange={updateFilterValue}
            placeholder="search"
          />
        </form>

        <div className="filter-category">
          <h3>Category</h3>
          <div className="filter-category-btn-div">
            {catagaryOnyData?.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  onClick={updateFilterValue}
                  className="filter-category-btn-div-btn"
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>

        <div className="filter-company">
          <h3>Company</h3>

          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company-select"
              onClick={updateFilterValue}
            >
              {companyData.map((curElem, index) => {
                return (
                  <option key={index} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className="filter-colors">
          <h3>colors</h3>
          <div className="colors">
            {colorData.map((curElem, index) => {
              if (curElem === "All") {
                return (
                  <button
                    key={index}
                    type="button"
                    name="colors"
                    value={curElem}
                    className="filter-colors-colors-all"
                    onClick={updateFilterValue}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  name="colors"
                  value={curElem}
                  className="filter-colors-colors"
                  style={{ backgroundColor: curElem }}
                  onClick={updateFilterValue}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="filter-price">
          <h3>price</h3>
          <p>{state.filters.price}</p>
          <input
            type="range"
            name="price"
            max={state.filters.maxPrice}
            min={state.filters.minPrice}
            value={state.filters.price}
            onChange={updateFilterValue}
          />
        </div>
        <div className="filter-clear">
          <button className="filter-clear-btn" onClick={clearFliter}>
            Clear Filters
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .filter-clear-btn {
    background-color: lightcoral;
    border-style: none;
    font-size: 12px;
    font-weight: 100;
    padding: 13px;
  }
  .filter-price h3 {
    font-size: 15px;
    font-weight: 500;
  }
  .filter-price p {
    font-size: 13px;
    font-weight: 200;
  }
  .filter-colors-colors {
    border-style: none;
    border-radius: 10px;
    height: 17px;
    width: 17px;
  }
  .colors {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
  }
  .filter-colors-colors-all {
    background-color: transparent;
    border-style: none;
    border-radius: 10px;
    height: 20px;
    width: 20px;
  }
  .filter-colors h3 {
    font-size: 15px;
    font-weight: 500;
  }

  .filter-company h3 {
    font-size: 15px;
    font-weight: 500;
  }
  .filters-search-input input {
    width: 113px;
  }
  .filter-category-btn-div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
  .filter-category-btn-div-btn {
    background-color: transparent;
    border-style: none;
    font-size: 13px;
    font-weight: 100;
  }
  .filter-category h3 {
    font-size: 15px;
    font-weight: 500;
  }
  .filters-maindiv {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 26px;
  }

  @media (max-width: 768px) {

  .filters-maindiv {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1px;
}}
`;
