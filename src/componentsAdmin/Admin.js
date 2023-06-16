// import axios from "axios";
// import "./Admin.css";
// import React, { useEffect, useState } from "react";

// function Admin() {
//   const [details, setDetails] = useState("");

//   useEffect(() => {
//     let newData = { email: localStorage.getItem("email") };

//     axios
//       .post("http://localhost:8080/details/user", newData)
//       .then((res) => {
//         console.log(res.data);
//         setDetails(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       <span style={{ marginTop: "10%" }}>
//         {" "}
//         <h1 style={{ fontSize: "3rem", textAlign: "center", color: "black" }}>
//           <b>sumago infotech</b>
//         </h1>
//       </span>
//       <p className="p1" style={{}}>
//         {details.fName + " " + details.lName}
//       </p>
//     </div>
//   );
// }

// export default Admin;
