import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../store/actions/product";

export default function TableProduct({ name, price, id }) {
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <tr className="text-center">
      <td>{name}</td>
      <td>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(price)}
      </td>
      <td>
        <Link to={"/detail/" + id}>
          <button type="button" className="btn btn-info rounded-pill px-4">
            Info
          </button>
        </Link>
      </td>
      <td>
        <Link to={"/edit/" + id} state={{ name, price }}>
          <button type="button" className="btn btn-success rounded-pill px-4">
            Edit
          </button>
        </Link>
        <button onClick={() => handleDeleteProduct(id)} type="button" className="btn btn-danger rounded-pill px-3 ms-2">
          Delete
        </button>
      </td>
    </tr>
  );
}
