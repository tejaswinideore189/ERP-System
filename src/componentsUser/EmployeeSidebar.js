import "./EmployeeSidebar.css";
import { Link } from "react-router-dom";
import logo1 from "../Images/sumago_logo_dark2.png";
import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeSidebar = ({ show, setShow }) => {
  const [details, setDetails] = useState("");

  useEffect(() => {
    let newData = { email: localStorage.getItem("email") };

    axios
      .post("http://localhost:8080/details/user", newData)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onclick = () => {
    window.open("https://www.sumagoinfotech.com/", "_blank");
  };

  return (
    <>
      <div>
        <main className={show ? "space-toggle" : null}>
          <header className={`header ${show ? "space-toggle" : null}`}>
            <div className="header-toggle" onClick={() => setShow(!show)}>
              <i
                className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}
              ></i>
            </div>
            {/* <span>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "50px",
                  marginTop: "3%",
                }}
              >
                Sumago Infotech
              </h1>
            </span> */}
            <div
              className="profile"
              style={{
                textAlign: "center",
                width: "20%",
                height: "62px",
                float: "right",
              }}
            >
              <i class="fa-solid fa-user fa-xl icon"></i>
              <h6>{details.fName + " " + details.lName}</h6>
            </div>
          </header>

          <aside className={`sidebar ${show ? "show" : null}`}>
            <nav className="nav">
              <div>
                <Link to="/" onClick={onclick} className="nav-logo">
                  {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
                  <img className=" nav-logo-icon" src={logo1} alt="" />
                  <span className="nav-logo-name">sumago infotech</span>
                </Link>

                <div className="nav-list">
                  <Link
                    to="/EmployeeDashboard"
                    className="nav-link active"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Dashboard"
                  >
                    <i className="fas fa-tachometer-alt nav-link-icon"></i>
                    <span className="nav-link-name">Dashboard</span>
                  </Link>
                  <Link
                    to="/EmployeeLeaveRequest"
                    className="nav-link"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Leave Request"
                  >
                    <i class="fa-solid fa-user-clock nav-link-icon"></i>
                    <span className="nav-link-name">Leave Request</span>
                  </Link>
                  <Link
                    to="/EmployeeComplaintlist "
                    className="nav-link"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Complaint from"
                  >
                    <i class="fa-solid fa-user-pen nav-link-icon"></i>
                    <span className="nav-link-name">Complaint from </span>
                  </Link>
                  <Link
                    to="/salaryslip "
                    className="nav-link"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Salary slip"
                  >
                    <i class="fa-solid fa-receipt nav-link-icon"></i>
                    <span className="nav-link-name">Salary slip </span>
                  </Link>
                  <Link
                    to="/FeedbackForm "
                    className="nav-link"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="FeedbackForm"
                  >
                    <i class="fa-sharp fa-solid fa-comments nav-link-icon"></i>
                    <span className="nav-link-name">FeedbackForm</span>
                  </Link>
                  <Link
                    to="/Attendencedsheet"
                    className="nav-link"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="ttendenced from"
                  >
                    <i className="fa-solid fa-list-alt nav-link-icon"></i>
                    <span className="nav-link-name">Attendenced from</span>
                  </Link>
                </div>
              </div>

              <Link
                to="/"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Logout"
              >
                <i className="fas fa-sign-out nav-link-icon"></i>
                <span className="nav-link-name">Logout</span>
              </Link>
            </nav>
          </aside>
          {/* <Dashboard/> */}
          {/* <h1>Content</h1> */}
        </main>
      </div>
    </>
  );
};

export default EmployeeSidebar;
