import React from "react";
import { useEffect } from "react";
import CustomNavbar from "../components/CustomNavbar";
import CustomSidebar from "../components/CustomSidebar";
import TableProduct from "../components/TableProduct";
import { getAllProduct } from "../store/actions/product";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const products = useSelector((state) => state.product.products);

  return (
    <div>
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
              {/* <!-- top-content --> */}
              <div className="row pb-5 justify-content-between text-center" style={{ color: "#ffffff" }}>
                <div className="col-3 py-4 shadow-sm rounded align-items-center" style={{ backgroundColor: "#a29bfe" }}>
                  <h6 className="fw-bold">Sales</h6>
                  <h5>Rp 2500000</h5>
                  <div className="fs-6">
                    2%<i className="fa-solid fa-sort-up ms-2"></i>
                  </div>
                </div>
                <div className="col-3 py-4 shadow-sm rounded align-items-center" style={{ backgroundColor: "#fdcb6e" }}>
                  <h6 className="fw-bold">Total Product</h6>
                  <h5>2300</h5>
                </div>
                <div className="col-3 py-4 shadow-sm rounded align-items-center" style={{ backgroundColor: "#74b9ff" }}>
                  <h6 className="fw-bold">Return</h6>
                  <h5>Rp 2100000</h5>
                  <div className="fs-6">
                    5%<i className="fa-solid fa-sort-up ms-2"></i>
                  </div>
                </div>
              </div>
              {/* <!-- end -->
        <!-- Table --> */}
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Detail</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((el) => (
                      <TableProduct key={el.id} name={el.name} price={el.price} id={el.id} />
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <!-- end --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
