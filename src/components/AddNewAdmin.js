import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/logo1.png"
import Sidebar from './Sidebar';
import './AddNewAdmin.css';


function AddNewAdmin() {
    const [show, setShow] = useState(false);
  return (
    <div>
        <div className="row">
      <div className="col-4">
      <Sidebar show={show} setShow={setShow}/>
      </div>
      </div>
         <div class="wrapper1">
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
                <span class="far fa-user"></span>
                <input type="text" name="Email" id="Email" placeholder="Email"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="FirstName" id="FirstName" placeholder="FirstName"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="LastName" id="LastName" placeholder="LastName"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="numbar" name="Contect" id="Contect" placeholder="Contect"/>
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
   
      

  )
}

export default AddNewAdmin
