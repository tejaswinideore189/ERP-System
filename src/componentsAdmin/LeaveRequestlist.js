import React, { useEffect, useState } from "react";
import "./Employeelist.css";
// import { Link } from 'react-router-dom';
import axios from "axios";
import Sidebar from "./Sidebar";

function LeaveRequestlist() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/leave/find")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        <div className="col-4">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        className={!show ? "col-8" : "container"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box clearfix">
              <h1>Leave List</h1>
              <div class="table-responsive">
                <table class="table user-list">
                  <thead>
                    <tr>
                      <th>FullName</th>
                      <th>Reason</th>
                      <th>ReaveDate</th>
                    </tr>
                  </thead>
                  {data.map((item) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{item.fullName}</td>
                          <td>{item.reason}</td>
                          <td>{item.date}</td>
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
}

export default LeaveRequestlist;
