const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":

    let priceArr = action.payload.map((curElem) => curElem.price);
    let maxPrice = Math.max(...priceArr);
  
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      const tempSortProduct = [...filter_products];
      if (sorting_value === "a-z") {
        newSortData = tempSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sorting_value === "z-a") {
        newSortData = tempSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      if (sorting_value === "lowest") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sorting_value === "highest") {
        newSortData = tempSortProduct.sort((a, b) => {
          return b.price - a.price;
        });
      }

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      // console.log("name --> ", action);
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, colors,price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.name.toLowerCase().includes(text);
        });
      }
      if (category !== "All") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category.toLowerCase() === category.toLowerCase()
        );
      }
      if (company !== "All") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }
      if (colors !== "All") {
        console.log(colors)
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(colors)
        );
      }
      if(price){
        tempFilterProduct =tempFilterProduct.filter((curElem)=>
          curElem.price <= price
        )
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };
case "CLEAR_FILTERS":
  return{
    ...state,
    filters: {
      ...state.filters,
      text: "",
      category: "All",
      company: "All",
      colors: "All",
      maxPrice: 0,
      minPrice:0,
      price:0,
    }
  }

    default:
      return state;
  }
};

export default filterReducer;
