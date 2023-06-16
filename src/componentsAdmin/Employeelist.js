import React, { useEffect, useState } from "react";
import "./Employeelist.css";
import axios from "axios";
import Sidebar from "./Sidebar";

const EmployeeList = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/find")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <div className="col-2">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        className={!show ? "col-9" : "container"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box clearfix">
              <h1>Employee List</h1>
              <div class="table-responsive">
                <table class="table user-list">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Job Title</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  {data.map((item) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{item.fName}</td>
                          <td>{item.lName}</td>
                          <td>{item.age}</td>
                          <td>{item.city}</td>
                          <td>{item.jobTitle}</td>
                          <td>{item.email}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
