import axios from "axios";

export const login = (data) => (dispatch, getState) => {
  return axios
    .post("https://testcrud.fikrisabriansyah.my.id/api/login", data)
    .then(({ data }) => {
      localStorage.setItem("token", data.data.token);
      return dispatch({
        type: "POST_LOGIN",
        token: data.data.token,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
