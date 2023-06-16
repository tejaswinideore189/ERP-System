import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./Complaintlist.css";
import axios from "axios";

function Complaintlist() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/complaint/find")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8080/feedback/find")
      .then((res) => {
        console.log(res.data);
        setFeedbackData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
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
                <h1>Complaint list</h1>
                <div class="table-responsive">
                  <table class="table user-list">
                    <thead>
                      <tr>
                        <th>FullName</th>
                        <th>Subject</th>
                        <th>CompliantBox</th>
                      </tr>
                    </thead>
                    {data.map((item) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{item.fullName}</td>
                            <td>{item.subject}</td>
                            <td>{item.compliantBox}</td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-offset-1 col-md-10">
              <div className="panel">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col col-sm-3 col-xs-12">
                      <h1 className="title">
                        Feedback <span>List</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="panel-body table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Feedback</th>
                      </tr>
                    </thead>
                    {feedbackData.map((item) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.feedback}</td>
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
}

export default Complaintlist;
