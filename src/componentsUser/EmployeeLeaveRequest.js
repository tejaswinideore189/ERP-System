import React, { useState } from "react";
import EmployeeSidebar from "./EmployeeSidebar";
import axios from "axios";

const EmployeeLeaveRequest = () => {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("");
  const [date, setLeaveDate] = useState();

  const onsubmit = (e) => {
    e.preventDefault();
    let addData = { fullName, reason, date };

    axios
      .post("http://localhost:8080/leave/add", addData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setFullName("");
    setLeaveDate("");
    setReason("");
  };

  return (
    <>
      <div>
        <div className="col-2">
          <EmployeeSidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        id="root"
        className={!show ? "col-9" : "container"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <h1>Leave Request</h1>
        <form onSubmit={onsubmit}>
          <div class="form-group mt-4">
            <label for="inputField">Full Name:</label>
            <input
              type="text"
              class="form-control"
              id="inputField"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div class="form-group mt-4">
            <label for="textareaField">Reason of leave:</label>
            <textarea
              class="form-control"
              id="textareaField"
              rows=""
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>
          <div class="form-group mt-4">
            <label for="dateField">Date of leave:</label>
            <input
              type="date"
              class="form-control"
              id="dateField"
              value={date}
              onChange={(e) => setLeaveDate(e.target.value)}
            />
          </div>
          <div style={{ textAlign: "center" }} className="button mt-4">
            <button type="submit" class="btn btn-danger">
              Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeLeaveRequest;
