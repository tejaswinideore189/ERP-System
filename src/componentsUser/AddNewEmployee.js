import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo1.png";
import "./AddNewEmployee.css";
import axios from "axios";

function AddNewEmployee() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [age, setAge] = useState();
  const [city, setCity] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    let newData = {
      email,
      password,
      fName,
      lName,
      age,
      city,
      jobTitle,
      userType: "User",
    };
    axios
      .post("http://localhost:8080/user/add", newData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
    // if (isValid) {
    // }

    setEmail("");
    setPassword("");
    setJobTitle("");
    setAge("");
    setFname("");
    setLname("");
    setCity("");
  };
  return (
    <div>
      {/* <div className={!show ? "col-8" : "col-10"} style={{overflow:"hidden"}}> */}

      <div class="wrapper2" style={{ marginTop: "3%" }}>
        <div class="logo">
          <img className="logo1" src={logo} alt="" />
        </div>
        <div class="text-center mt-4 name">Add New Employee</div>
        <form class="p-3 mt-3" onSubmit={onSubmit}>
          <div class="form-field d-flex align-items-center">
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="FirstName"
              value={fName}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span>
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              name="LasttName"
              id="LastName"
              placeholder="LastName"
              value={lName}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fa-solid fa-person-dress"></span>
            <input
              type="text"
              name="Age"
              id="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span>
              <i class="fa-solid fa-briefcase"></i>
            </span>
            <input
              type="text"
              name="City"
              id="City"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span>
              <i class="fa-solid fa-briefcase"></i>
            </span>
            <input
              type="text"
              name="Job Tittle"
              id="Job Tittle"
              placeholder="Job Tittle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <input
              type="text"
              name="Email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fa-solid fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
          <Link to="/">Forget password?</Link> or <Link to="/">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default AddNewEmployee;
