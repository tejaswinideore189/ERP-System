import React, { useState } from "react";
import "./ForgetPassword.css";
// import Sidebar from "./Sidebar";
import Modal from "react-modal";
import { Link } from "react-router-dom";

function ForgetPassword() {
  // const [show, setShow] = useState(false);
  const { email, setEmail } = useState("");
  const [isValid, setIsValid] = useState(false);
  const [modelIsOpen, setModelIsOpen] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const openModel = (e) => {
    e.preventDefault();
    setModelIsOpen(true);
  };

  const closeModel = () => {
    setModelIsOpen(false);
  };
  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsValid(emailRegex.test(value));
  };

  return (
    <>
      <Modal
        isOpen={modelIsOpen}
        onRequestClose={closeModel}
        contentLabel="Modal"
      >
        <div
          className="Modal_div"
          style={{ height: "100%", width: "100%", alignItems: "center" }}
        >
          <div className="Modal_inner_div">
            <input
              className="form-control mt-5"
              type="Numbar"
              placeholder="Enter OTP"
            />
            <br />
            <Link to="/verify" className="btn btn-primary" onClick={closeModel}>
              Verify
            </Link>
          </div>
        </div>
      </Modal>
      <div>
        {/* <div className="row">
          <div className="col-4">
            <Sidebar show={show} setShow={setShow} />
          </div>
        </div> */}

        <div class="wrapper">
          <form>
            <div class="form-field d-flex align-items-center">
              <span class="far fa-user"></span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </div>
            {!isValid && <p>Please enter a valid email address.</p>}

            {/* <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div> */}
            <button class="btn mt-2" onClick={openModel}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
