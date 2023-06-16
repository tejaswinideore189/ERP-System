import React from "react";
import "./Verify.css";
// import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";

function Verify() {
  // const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    // e.preventDefault()
    navigate("/signin");
  };

  return (
    <div>
      {/* <div className="row">
        <div className="col-4">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div> */}

      <div class="wrapper">
        <form onSubmit={onSubmit}>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter New Password"
              required
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Confirm Password"
              required
            />
          </div>
          <Link to="/signin" class="btn mt-2">
            Reset Password
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Verify;
