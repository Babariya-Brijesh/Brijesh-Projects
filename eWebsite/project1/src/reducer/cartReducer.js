const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let exitingProduct = state.cart.find((curEle) => curEle.id === id + color);

    if (exitingProduct) {
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === id + color) {
          let newAmount = curEle.amount + amount;
          return {
            ...curEle,
            amount: newAmount,
          };
        } else {
          return curEle;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "RMOVE_ITEM") {
    let updatedCart = state.cart;
    updatedCart = updatedCart.filter((ele) => ele.id !== action.payload);

    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let totalPrice = state.cart.reduce((initalValue, curEle) => {
  //     let { price, amount } = curEle;
  //     initalValue = initalValue + price * amount;
  //     console.log(initalValue);
  //     return initalValue;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_price: totalPrice,
  //   };
  // }
  if (action.type === "OPEN_CART") {
    return {
      ...state,
      openCart: !state.openCart,
    };
  }
  return state;
};

export default cartReducer;
