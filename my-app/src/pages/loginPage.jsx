import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/user";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: inputEmail,
        password: inputPassword,
      })
    );
    navigate("/");
  };
  return (
    <div className="container-fluid">
      <div className="container shadow" style={{ marginTop: "10%" }}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 text-center" style={{ backgroundColor: "#ffa801", padding: "123px" }}>
            <div style={{ color: "#ffffff" }}>
              <h2 className="fw-bold">Welcome to login</h2>
              <p>Don't have an account?</p>
              <button type="submit" className="btn px-3 btn-outline-success rounded-pill" style={{ color: "#ffffff" }}>
                Sign up
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-11 col-sm-11 offset-1 pe-5 py-5 align-items-center">
            <div className="mb-3">
              <h3 className="fw-bold">Sign in</h3>
            </div>
            <form onSubmit={isLoggin}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="email" className="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} type="password" className="form-control rounded-pill" id="exampleInputPassword1" />
              </div>

              <button type="submit" className="btn btn-warning form-control rounded-pill" style={{ color: "#ffffff" }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
