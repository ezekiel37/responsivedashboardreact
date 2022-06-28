import React from "react";
import { Table } from "react-bootstrap";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import ConfigModal from "../components/configmodal/configModal";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Sidebarmobile from "../components/sidebar/Sidebarmobile";


import "./pages.scss";


const Configuration = () => {
    
  return (
    <div className="container-fluid px-0">
      <div className="row m-0 g-0">
      <MediaQuery maxWidth={960}>
      <div className="col-2 p-0">
        <Sidebarmobile />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1280}>
        <div className="col-2 p-0">
          <Sidebar/>
        </div>
        </MediaQuery>
        <div className="col-10 p-0">
          <div className="home-container">
            <Navbar />
            <div className="dashboard-container">
              {/* dashboardtitle */}
              <div className="pb-3 dashboard-title">
               <div className="configuration-title">
                <h3>Configuration</h3>
                <p>You can change variable configuration only in Percentage and Target</p>
               </div>
              </div>
              {/* tablecontainer */}
              <div className="container">
              <Table 
              className="shadow"
              borderless
              size="lg">
  <thead>
    <tr>
      
      <th>GRADE</th>
      <th>PERCENTAGE</th>
      <th>TARGET</th>
    </tr>
  </thead>
  <tbody
  className="bstable bg-white">
    <tr>
     
      <td>SC</td>
      <td>50%</td>
      <td>N17,500,00</td>
      <td><ConfigModal
      modaltitle="Grade-SC"
      percent="SC-Percentage"
      target="SC-Target"
      /></td>
    </tr>
    <tr>
      <td>SE</td>
      <td>50%</td>
      <td>N10,500,000</td>
       <td><ConfigModal
      modaltitle="Grade-SE"
      percent="SE-Percentage"
      target="SE-Target"
      />
      </td>
    </tr>
    <tr>
      <td>ASE</td>
      <td>50%</td>
      <td>N10,500,000</td>
      <td>
      <ConfigModal
      modaltitle="Grade-ASE"
      percent="ASE-Percentage"
      target="ASE-Target"
      />
      </td>
    </tr>
    <tr>
      <td>SSO</td>
      <td>50%</td>
      <td>N10,500,000</td>
      <td>
      <ConfigModal
      modaltitle="Grade-SSO"
      percent="SSO-Percentage"
      target="SSO-Target"
      />
      </td>
    </tr>
    <tr>
      <td>SO</td>
      <td>50%</td>
      <td>N10,500,000</td>
      <td>
      <ConfigModal
      modaltitle="Grade-SO"
      percent="SO-Percentage"
      target="SO-Target"
      />
      </td>
    </tr>
    <tr>
      <td>ST</td>
      <td>50%</td>
      <td>N7,500,000</td>
      <td><ConfigModal
      modaltitle="Grade-ST"
      percent="ST-Percentage"
      target="ST-Target"
      /></td>
    </tr>
  </tbody>
</Table>
                </div>
              {/* end table container */}
         {/* end batch list */}
            </div>
            {/* end dashboard */}
          </div>
        </div>
      </div>
      {/* endrow */}
    </div>
  );
};

export default Configuration;
