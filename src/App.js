// import Sidebar from './componentsAdmin/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./componentsAdmin/Signin";
import Dashboard from "./componentsAdmin/Dashboard";
import Employeelist from "./componentsAdmin/Employeelist";
import AddNewAdmin from "./componentsAdmin/AddNewAdmin";
import Complaintlist from "./componentsAdmin/Complaintlist";
import Attendencedlist from "./componentsAdmin/Attendencedlist";
import ForgetPassword from "./componentsAdmin/ForgetPassword";
import Verify from "./componentsAdmin/Verify";
import AddNewEmployee from "./componentsUser/AddNewEmployee";
// import EmployeeSidebar from "./componentsUser/EmployeeSidebar";
import EmployeeDashboard from "./componentsUser/EmployeeDashboard";
import EmployeeAttendencedlist from "./componentsUser/EmployeeAttendencedlist";
import EmployeeComplaintlist from "./componentsUser/EmployeeComplaintlist";
import EmployeeLeaveRequest from "./componentsUser/EmployeeLeaveRequest";
import LeaveRequestlist from "./componentsAdmin/LeaveRequestlist";
import EmployeeSalary from "./componentsAdmin/EmployeeSalary";
import Salaryslip from "./componentsUser/Salaryslip";
import FeedbackForm from "./componentsUser/FeedbackForm";
import Salaryslipform from "./componentsAdmin/Salaryslipform";
// import logo1 from "./Images/sumago_infotech.png";


function App() {
  return (
    <>
    <div className="background_logo">
      {/* <img src={logo1} alt=""style={{opacity:"30%", width:"55%" , height:"100%", position:"absolute", marginLeft:"25%", marginTop:"-6%"}}/> */}
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Employeelist" element={<Employeelist/>} />
          <Route path="Complaintlist" element={<Complaintlist/>}/>
          <Route path="Attendencedlist" element={<Attendencedlist/>}/>
          <Route path="/AddNewAdmin" element={<AddNewAdmin/>} />
          <Route path="/EmployeeSalaryslip" element={<Salaryslipform/>} />
          <Route path="/EmployeeSalary" element={<EmployeeSalary/>} />
          <Route path="/LeaveRequestlist" element={<LeaveRequestlist/>} />
          <Route path="/" element={<Signin />} />
          {/* <Route path="/" element={<Login />} /> */}
          
          <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
          <Route path="/Verify" element={<Verify/>}/>
          <Route path="/AddNewEmployee" element={<AddNewEmployee/>} />
          {/* <Route path="/EmployeeSidebar" element={<EmployeeSidebar/>}/> */}
          <Route path="/EmployeeDashboard" element={<EmployeeDashboard/>}/>
          <Route path="/Attendencedsheet" element={<EmployeeAttendencedlist/>}/>
          <Route path="/EmployeeComplaintlist" element={<EmployeeComplaintlist/>}/>
          <Route path="/EmployeeLeaveRequest" element={<EmployeeLeaveRequest/>}/>
          <Route path="/salaryslip" element={<Salaryslip/>} />
          <Route path="/FeedbackForm" element={<FeedbackForm/>} />





        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
