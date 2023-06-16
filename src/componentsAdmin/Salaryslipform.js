import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function Salaryslipform() {
  const [show, setShow] = useState(false);
  const [Employee, setEmployee] = useState("");
  const [Date_of_joining, setDate_of_joining] = useState();
  const [Department, setDepartment] = useState("");
  const [Employee_code, setEmployee_code] = useState();
  const [Designation, setDesignation] = useState("");
  const [Present_day, setPresent_day] = useState();
  const [Back_Acc_no, setBack_Acc_no] = useState();
  const [Gross_Salary, setGross_Salary] = useState();
  const [email, setEmail] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    let addData = {
      Employee,
      Date_of_joining,
      Department,
      Employee_code,
      Designation,
      Present_day,
      Back_Acc_no,
      Gross_Salary,
      email,
    };

    axios
      .post("http://localhost:8080/salaryslip/add", addData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setBack_Acc_no("");
    setDate_of_joining("");
    setEmployee("");
    setDepartment("");
    setEmployee_code("");
    setDesignation("");
    setPresent_day("");
    setGross_Salary("");
    setEmail("");
  };

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar show={show} setShow={setShow} />
        </div>

        <div
          id="root"
          className={!show ? "col-9" : "container"}
          style={{ overflow: "hidden" }}
        >
          <form
            onSubmit={onsubmit}
            style={{ marginLeft: "10%", marginTop: "10%" }}
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label for="salary">Employee:</label>
                <input
                  type="text"
                  class="form-control"
                  id="salary"
                  name="Employee"
                  placeholder="Enter your Employee"
                  value={Employee}
                  onChange={(event) => {
                    setEmployee(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="salary">Date of joining:</label>
                <input
                  type="date"
                  class="form-control"
                  id="salary"
                  name="Date of joining"
                  value={Date_of_joining}
                  onChange={(event) => {
                    setDate_of_joining(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="row">
              <div className="form-group col-md-6">
                <label for="salary">Department:</label>
                <input
                  type="text"
                  class="form-control"
                  id="salary"
                  name="Department"
                  placeholder="Enter your Department"
                  value={Department}
                  onChange={(event) => {
                    setDepartment(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="salary">Employee code:</label>
                <input
                  type="number"
                  class="form-control"
                  id="salary"
                  name="Employee code"
                  placeholder="Enter your Employee code"
                  value={Employee_code}
                  onChange={(event) => {
                    setEmployee_code(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="row">
              <div className="form-group col-md-6">
                <label for="salary">Designation:</label>
                <input
                  type="text"
                  class="form-control"
                  id="salary"
                  name="Designation"
                  placeholder="Enter your Designation"
                  value={Designation}
                  onChange={(event) => {
                    setDesignation(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="salary">Present day:</label>
                <input
                  type="number"
                  class="form-control"
                  id="salary"
                  name="Present day"
                  placeholder="Enter your Present day"
                  value={Present_day}
                  onChange={(event) => {
                    setPresent_day(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class="row">
              <div className="form-group col-md-6">
                <label for="salary">Back Acc no:</label>
                <input
                  type="number"
                  class="form-control"
                  id="salary"
                  name="Back_Acc_no"
                  placeholder="Enter your Back_Acc_no"
                  value={Back_Acc_no}
                  onChange={(event) => {
                    setBack_Acc_no(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="salary">Gross_Salary:</label>
                <input
                  type="number"
                  class="form-control"
                  id="salary"
                  name="Gross_Salary"
                  placeholder="Enter your Gross_Salary"
                  value={Gross_Salary}
                  onChange={(event) => {
                    setGross_Salary(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label for="salary">Email:</label>
                <input
                  type="Email"
                  class="form-control"
                  id="salary"
                  name="Deduction"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Salaryslipform;
