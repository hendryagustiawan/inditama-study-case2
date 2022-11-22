let initialState = {
  products: [],
  product: "",
};

const productReducer = (state = initialState, actions) => {
  let { type, products, product } = actions;
  switch (type) {
    case "GET_ALL_PRODUCT":
      return {
        ...state,
        products,
      };
    case "GET_DETAIL_PRODUCT":
      return {
        ...state,
        product,
      };

    default:
      return state;
  }
};

export default productReducer;
