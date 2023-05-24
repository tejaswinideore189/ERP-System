import React, { useState } from "react";
import './Signin.css';
import logo from "../Images/logo1.png"
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';


function Signin() {
  const [show, setShow] = useState(false);


  return (
    <div>
   <div className="row">
      <div className="col-4">
      <Sidebar show={show} setShow={setShow}/>
      </div>
      </div>
      {/* <div className={!show ? "col-8" : "col-10"} style={{overflow:"hidden"}}> */}
      
      <div class="wrapper">
        <div class="logo">
            <img className='logo1' src={logo} alt=""/>
        </div>
        <div class="text-center mt-4 name">
            Twitter
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <Link to="/">Forget password?</Link> or <Link to="/">Sign up</Link>
        </div>
    </div>
  
    </div>
   
    // </div>
  )
}

export default Signin
