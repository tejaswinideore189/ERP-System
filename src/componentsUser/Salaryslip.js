import React, { useEffect, useState } from "react";
import "./Salaryslip.css";
import EmployeeSidebar from "./EmployeeSidebar";
import axios from "axios";
import logo1 from "../Images/images1.png";

function Salaryslip() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");

  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  let newData = { email, password };

  const currentDate = new Date();

  console.log("Contents in currentDate", currentDate);
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  const grossSalary = data?.Gross_Salary;
  const present_Days = data?.Present_day;
  const absent_days = 30 - present_Days;
  const basic_pay = 0.6 * grossSalary;

  const leaveDeductionRate = grossSalary / 30;
  const leaveDeduction = absent_days * leaveDeductionRate;

  const pfDeduction = basic_pay * 0.12; // Assuming the leave deduction rate is 12%

  const taxDeduction = 200; // Assuming the tax rate is 200

  const totalDeduction = leaveDeduction + pfDeduction + taxDeduction;

  useEffect(() => {
    axios
      .post("http://localhost:8080/salaryslip/find", newData)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <div className="col-4">
          <EmployeeSidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        className={!show ? "col-9" : "container"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <table class="table table-bordered col-xs-10 col-sm-10 col-md-6">
          <thead>
            <tr>
              <th colspan="4" style={{ textAlign: "center" }}>
                <h1>
                  <img src={logo1} alt="" style={{ width: "90%" }} />
                </h1>
              </th>
            </tr>
            <tr>
              <th colSpan={4}>
                <h4
                  style={{ textTransform: "capitalize", textAlign: "center" }}
                >
                  Monthly Salary Slip {currentMonth} {currentYear}
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Employee Name</td>
              <td>{data?.Employee}</td>
              <td className="fw-bold">Date of joining</td>
              <td>{data?.Date_of_joining}</td>
            </tr>
            <tr>
              <td className="fw-bold">Department</td>
              <td>{data?.Department}</td>
              <td className="fw-bold">Employee code</td>
              <td>{data?.Employee_code}</td>
            </tr>
            <tr>
              <td className="fw-bold">Designation</td>
              <td>{data?.Designation}</td>
              <td className="fw-bold">Present Days</td>
              <td>{present_Days}</td>
            </tr>
            <tr>
              <td className="fw-bold">Bank A/c No.</td>
              <td>{data?.Back_Acc_no}</td>
              <td className="fw-bold">Absent Days</td>
              <td>{absent_days}</td>
            </tr>
            <tr style={{ textAlign: "center", fontSize: "20px" }}>
              <th style={{ fontSize: "1rem" }}>Particulars</th>
              <th style={{ fontSize: "1rem" }}>Amount</th>
              <th style={{ fontSize: "1rem" }}>Deduction</th>
              <th style={{ fontSize: "1rem" }}>Amount</th>
            </tr>
            <tr>
              <td>Basic</td>
              <td style={{ textAlign: "center" }}>{basic_pay}</td>
              <td>Proffesional Tax </td>
              <td style={{ textAlign: "center" }}>{taxDeduction}</td>
            </tr>
            <tr>
              <td>HRA</td>
              <td style={{ textAlign: "center" }}>{0.2 * grossSalary}</td>
              <td>Leaves</td>
              <td style={{ textAlign: "center" }}>
                {Math.floor(leaveDeduction)}
              </td>
            </tr>
            <tr>
              <td>Conveyance Allowance</td>
              <td style={{ textAlign: "center" }}>{0.1 * grossSalary}</td>
              <td>Employee Contribution PF</td>
              <td style={{ textAlign: "center" }}>{Math.floor(pfDeduction)}</td>
            </tr>
            <tr>
              <td>Other Allowance</td>
              <td style={{ textAlign: "center" }}>{0.1 * grossSalary}</td>
              <td>Employee Contribution ESIC</td>
              <td style={{ textAlign: "center" }}>0</td>
            </tr>
            <tr>
              <td className="fw-bold">Gross Salary</td>
              <td className="fw-bold" style={{ textAlign: "center" }}>
                {grossSalary}
              </td>
              <td className="fw-bold">Total Deduction</td>
              <td className="fw-bold" style={{ textAlign: "center" }}>
                {Math.floor(totalDeduction)}
              </td>
            </tr>
            <tr>
              <td colspan="3" className="text-center fw-bold">
                Amount Payable After Deductions for Month ( Net Payable )
              </td>
              <td
                className="fw-bold"
                colspan="1"
                style={{ textAlign: "center" }}
              >
                {Math.floor(grossSalary - totalDeduction)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Salaryslip;
