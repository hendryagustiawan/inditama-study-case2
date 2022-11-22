import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import CustomSidebar from "../components/CustomSidebar";
import { addProduct } from "../store/actions/product";

export default function AddPage() {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddProduct = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        name: inputName,
        price: inputPrice,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex" id="wrapper">
      {/* <!-- Sidebar --> */}
      <CustomSidebar />
      {/* <!-- End --> */}

      <div id="page-content">
        {/* <!-- Navbar --> */}
        <CustomNavbar />
        {/* <!-- End --> */}

        <div className="container-fluid py-5">
          <div className="container px-5">
            {/* <!-- Form --> */}
            <h2 className="text-center fw-bold mb-4">Form Product</h2>
            <form className="col-8 mx-auto" onSubmit={handleAddProduct}>
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input type="text" className="form-control" value={inputName} onChange={(e) => setInputName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Price</label>
                <input type="text" className="form-control" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            {/* <!-- end --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
