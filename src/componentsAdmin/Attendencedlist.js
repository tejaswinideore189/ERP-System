import React, { useEffect, useState } from "react";
import "./Attendencedlist.css";
// import Sidebar from "../Sidebar/Sidebar";
// import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";

const Attendencedlist = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  // const absent_days =  30 -data.present_days ;
  useEffect(() => {
    axios
      .get("http://localhost:8080/attendenced/find")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const calculateAbsentDays = (presentDays) => {
    const totalDays = 30; // Assuming a total of 30 days
    return totalDays - presentDays;
  };
  return (
    <>
      <div>
        <div className="col-3">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        className={!show ? "col-10" : "main-content"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card bg-default shadow">
                <div class="card-header bg-transparent border-0">
                  <h3 class="text-white mb-0">Attendenced list</h3>
                </div>
                <div class="table-responsive">
                  <table class="table align-items-center table-dark table-flush">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Present days</th>
                        {/* <th scope="col">Present days</th> */}
                        <th scope="col">Absent days</th>
                      </tr>
                    </thead>
                    {data.map((item) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{item.fullName}</td>
                            <td>{item.email}</td>
                            {/* <td>{item.attendence_in_perc}</td> */}
                            <td>{item.present_days}</td>
                            <td>{calculateAbsentDays(item.present_days)}</td>
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
      </div>
    </>
  );
};

export default Attendencedlist;
