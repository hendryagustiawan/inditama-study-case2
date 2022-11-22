import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import CustomSidebar from "../components/CustomSidebar";
import { getOneProduct } from "../store/actions/product";

export default function DetailPage() {
  const { id } = useParams();
  const dipastch = useDispatch();

  useEffect(() => {
    dipastch(getOneProduct(id));
  }, []);

  const product = useSelector((state) => state.product.product);
  return (
    <>
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
              {/* <!-- Detail --> */}
              <h2 className="text-center fw-bold mb-4">Detail Product</h2>
              <div className="col-4 mx-auto shadow px-4 py-5 rounded" style={{ backgroundColor: "tomato", color: "#ffffff" }}>
                <div className="card-body">
                  <h5 className="text-uppercase fw-bold">{product.name}</h5>
                  <h6 className="mb-3">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(product.price)}
                  </h6>
                  <p className="fs-6 text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              {/* <!-- end --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
