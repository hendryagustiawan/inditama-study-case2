import React from "react";

export default function CustomNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle sidebae">
              <i className="fas fa-align-left"></i>
            </button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex m-auto" role="search">
              <input className="form-control rounded-pill" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div className="my-auto me-4">
              <h6 className="fw-bold">
                <i className="fa-solid fa-user me-2"></i>Hendri
              </h6>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
