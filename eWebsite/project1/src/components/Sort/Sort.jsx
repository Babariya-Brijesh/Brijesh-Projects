import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/filter_context";
import styled from "styled-components";

export default function Sort() {
  const { GirdFunction, ListFunction, state, sorting } = useFilterContext();

  return (
    <Wrapper>
      <div className="sort-maindiv">
        <div className="sort-maindiv-btn-div">
          <button
            className={
              state.grid_view
                ? "sort-maindiv-btn-grid activecolor-btn"
                : "sort-maindiv-btn-grid"
            }
            onClick={GirdFunction}
          >
            <BsFillGridFill />
          </button>
          <button
            className={
              !state.grid_view
                ? "sort-maindiv-btn-list  activecolor-btn"
                : "sort-maindiv-btn-list"
            }
            onClick={ListFunction}
          >
            <BsList />
          </button>
        </div>
        <div className="sort-maindiv-total">3 Total Products.</div>
        <div className="sort-maindiv-filter">
          <label for="list"></label>
          <select name="list" id="list" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">(a - z)</option>
            <option value="#" disabled></option>
            <option value="z-a">(z - a)</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .sort-maindiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 50px; */
  }
  .sort-maindiv-btn-grid {
    background-color: #f6f8fa;
    border-style: none;
    padding: 4px 6px;
  }
  .activecolor-btn {
    background-color: black;
    color: white;
  }
  .sort-maindiv-btn-list {
    border-style: none;
    margin-left: 10px;
    padding: 4px 6px;
  }
  @media (max-width: 768px) {
    .sort-maindiv {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
