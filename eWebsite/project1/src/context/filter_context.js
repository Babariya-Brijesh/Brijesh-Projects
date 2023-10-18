import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    colors: "All",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const GirdFunction = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };
  const ListFunction = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  const sorting = (event) => {
    const userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const clearFliter = () =>{
    dispatch({type:"CLEAR_FILTERS"})
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        state,
        GirdFunction,
        ListFunction,
        sorting,
        updateFilterValue,
        clearFliter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
