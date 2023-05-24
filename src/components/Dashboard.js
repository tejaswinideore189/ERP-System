import React, { useState } from "react";
import "./Dashboard.css";
import Chartgraph from "./Chartgraph";
import Sidebar from "./Sidebar";

function Dashboard() {

  const [show, setShow] = useState(false);

  return (
    <>
    <div className="row">
      <div className="col-2">
      <Sidebar show={show} setShow={setShow}/>
      </div>
      
      <div id="root" className={!show ? "col-9" : "col-10"} style={{overflow:"hidden"}}>
        <div class="container pt-5 mt-5">
          <div class="row align-items-stretch">
            <div class="c-dashboardInfo col-lg-3 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Earning 
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  10,500
                </span>
              </div>
            </div>
            <div class="c-dashboardInfo col-lg-3 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                  Earning 
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  500
                </span>
                <span class="hind-font caption-12 c-dashboardInfo__subInfo">
                  Last month: 30
                </span>
              </div>
            </div>
            <div class="c-dashboardInfo col-lg-3 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                 All Employee
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  5000
                </span>
              </div>
            </div>
            <div class="c-dashboardInfo col-lg-3 col-md-6">
              <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                Project
                  <svg
                    class="MuiSvgIcon-root-19"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                  </svg>
                </h4>
                <span class="hind-font caption-12 c-dashboardInfo__count">
                  6,40%
                </span>
              </div>
            </div>
          </div>
        </div>
        <Chartgraph />
      </div>
      
    </div>
    </>
  );
}

export default Dashboard;
