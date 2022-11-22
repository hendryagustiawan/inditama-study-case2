let initialState = {
  token: localStorage.getItem("token") || null,
};

const userReducer = (state = initialState, actions) => {
  let { type, token } = actions;

  switch (type) {
    case "POST_LOGIN":
      return {
        ...state,
        token,
      };

    default:
      return state;
  }
};

export default userReducer;
