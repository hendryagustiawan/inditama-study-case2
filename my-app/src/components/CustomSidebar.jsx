import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function CustomSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");
  };
  return (
    <>
      <div className="bg-light shadow" id="sidebar">
        <div className="sidebar-heading text-center py-3 fs-3 fw-bold text-uppercase">
          <i className="fa-brands fa-buy-n-large me-2 fa-lg"></i>Belibae
        </div>

        <div className="list-group mx-xl-4 mx-lg-3">
          <Link to={"/"} className="list-group-item py-3 bg-transparent">
            <i className="fas fa-tachometer-alt me-2"></i>Dashboard
          </Link>

          <Link to={"/add"} className="list-group-item py-3 bg-transparent fw-bold">
            <i className="fa-solid fa-cart-plus me-2"></i>Add Product
          </Link>

          <a href="" className="list-group-item py-3 bg-transparent fw-bold">
            <i className="fa-solid fa-gear me-2"></i>Setting
          </a>
          <a href="" className="list-group-item py-3 bg-transparent fw-bold">
            <i className="fa-solid fa-clock-rotate-left me-2"></i>History
          </a>
          <a href="" onClick={handleLogout} className="list-group-item py-3 bg-transparent fw-bold">
            <i className="fa-solid fa-circle-left me-2"></i>Logout
          </a>
        </div>
      </div>
    </>
  );
}
