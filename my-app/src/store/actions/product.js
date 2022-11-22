import axios from "axios";

export const getAllProduct = () => (dispatch, getState) => {
  axios
    .get("https://testcrud.fikrisabriansyah.my.id/api/product", {
      headers: { Authorization: `Bearer ${getState().user.token}` },
    })
    .then(({ data }) => {
      // console.log(data);
      dispatch({
        type: "GET_ALL_PRODUCT",
        products: data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOneProduct = (id) => (dispatch, getState) => {
  axios
    .get(`https://testcrud.fikrisabriansyah.my.id/api/product/show?product_id=${id}`, {
      headers: { Authorization: `Bearer ${getState().user.token}` },
    })
    .then(({ data }) => {
      dispatch({
        type: "GET_DETAIL_PRODUCT",
        product: data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addProduct = (data) => (dispatch, getState) => {
  axios
    .post(`https://testcrud.fikrisabriansyah.my.id/api/product/store`, data, {
      headers: { Authorization: `Bearer ${getState().user.token}` },
    })
    .then(() => {
      dispatch(getAllProduct());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteProduct = (id) => (dispatch, getState) => {
  axios
    .delete(`https://testcrud.fikrisabriansyah.my.id/api/product/${id}`, {
      headers: { Authorization: `Bearer ${getState().user.token}` },
    })
    .then(() => {
      dispatch(getAllProduct());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editProduct = (data) => (dispatch, getState) => {
  axios
    .post(`https://testcrud.fikrisabriansyah.my.id/api/product/update`, data, {
      headers: { Authorization: `Bearer ${getState().user.token}` },
    })
    .then(() => {
      dispatch(getAllProduct());
    })
    .catch((err) => {
      console.log(err);
    });
};
