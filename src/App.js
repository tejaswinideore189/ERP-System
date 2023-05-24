// import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Employeelist from "./components/Employeelist";
import AddNewAdmin from "./components/AddNewAdmin";
import Complaintlist from "./components/Complaintlist";
import Attendencedlist from "./components/Attendencedlist";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Employeelist" element={<Employeelist/>} />
          <Route path="Complaintlist" element={<Complaintlist/>}/>
          <Route path="Attendencedlist" element={<Attendencedlist/>}/>
          <Route path="/AddNewAdmin" element={<AddNewAdmin/>} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
