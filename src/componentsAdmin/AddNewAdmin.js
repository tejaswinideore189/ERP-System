/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo1.png";
import Sidebar from "./Sidebar";
import "./AddNewAdmin.css";
import axios from "axios";

function AddNewAdmin() {
  const [show, setShow] = useState(false);
  //const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [contact, setContact] = useState()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLname] = useState("")

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    let newData = { email, password, contact, fName, lName, userType:"Admin"};
    axios
      .post("http://localhost:8080/erp/add", newData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
    if (isValid) {
    }
  };

  const phoneNumberRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChangePhoneNo = (event) => {
    const { value } = event.target;
    setContact(value);
    setIsValid(phoneNumberRegex.test(value));
  };
  const handleChangePwd = (e) => {
    const { value } = e.target;
    setPassword(value);
    setIsValid(passwordRegex.test(value));
  };
  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsValid(emailRegex.test(value));
  };

  const handleChangeFname = (e) => {
    const { value } = e.target;
    setFName(value);
  };

  return (
    <div>
      <div className="row row1">
        <div className="col-2">
          <Sidebar show={show} setShow={setShow} /> 
        </div>
        <div
          className={!show ? "col-9" : "col-10"}
          style={{ overflow: "hidden" }}
        >
          <div class="wrapper1 mt-7">
            <div class="logo">
              <img className="logo1" src={logo} alt="" />
            </div>
            <div class="text-center mt-4 name">
              <h1>Add New Admin</h1>
            </div>
            <form class="p-3 mt-3" onSubmit={onSubmit}>
              <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={email}
                  // onChange={handleChangeEmail}
                  onChange={handleChangeEmail}
                  required
                />
              </div>
              {!isValid && <p>Please enter a valid email address.</p>}
              <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  placeholder="FirstName"
                  value={fName}
                  onChange={handleChangeFname}
                  // onChange={handleChangeFname}
                  required
                />
              </div>
              <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="LastName"
                  required
                  value={lName}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input
                  type="numbar"
                  name="Contact"
                  id="Contact"
                  placeholder="Contact"
                  value={contact}
                  onChange={handleChangePhoneNo}
                  // onChange={handleChangePhoneNo}
                  required
                />
              </div>
              {!isValid && <p>Please enter a 10-digit phone number.</p>}
              <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                  value={password}
                  onChange={handleChangePwd}
                  // onChange={handleChangePwd}
                  required
                />
              </div>
              {!isValid && (
                <p>
                  password must be least 8 characters long and contain at least
                  one uppercase letter ,one lowcase letter ,and one digit
                </p>
              )}
              <button class="btn mt-3">Add Me</button>
            </form>
            <div class="text-center fs-6">
              <Link to="/ForgetPassword">Forget password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewAdmin;
