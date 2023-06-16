/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Signin.css";
import logo from "../Images/logo1.png";
import logo1 from "../Images/sumago_logo_dark.png";

// import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  // const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = { email, password, userType };
    axios
      .post("http://localhost:8080/login", newData)
      .then((res) => {
        console.log(res.data);
        if (userType === "Admin") {
          navigate("/dashboard");
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("password", res.data.password);
        } else {
          navigate("/EmployeeDashboard");
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("password", res.data.password);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div class="container-fulid">
        <div className="row">
          <div className="col-md-6">
            <img className="nav1-user-icon" src={logo1} alt="" />
          </div>
          <div className="col-md-6 user1">
            <Link to="/AddNewEmployee" className="user2 mt-7 mb-6">
              <i className="fa-solid fa-user user-icon"></i>
              <span>Add Employee</span>
            </Link>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <div class="logo">
          <img className="logo1" src={logo} alt="" />
        </div>
        <div class="text-center mt-4 name">
          <h1>Sign In</h1>
        </div>
        <form class="p-3 mt-3" onSubmit={onSubmit}>
          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className="dropdown"
            style={{ width: "100%", textAlign: "center" }}
          >
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              who are you....?
            </button>
            <ul className="dropdown-menu" style={{ width: "100%" }}>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setUserType("Admin");
                    console.log("Selected value: Admin");
                  }}
                >
                  Admin
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setUserType("User");
                    console.log("Selected value: User");
                  }}
                >
                  User
                </button>
              </li>
            </ul>
          </div>

          <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
          <Link to="/ForgetPassword">Forget password?</Link>
          {/* or{" "} */}
          {/* <Link to="/">Sign up</Link> */}
        </div>
      </div>
      {/* </div> */}

      {/* // </div> */}
    </>
  );
}

export default Signin;
