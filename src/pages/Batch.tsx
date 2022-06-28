import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import Mymodal from "../components/Mymodal";

import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Sidebarmobile from "../components/sidebar/Sidebarmobile";
import Cardwithsearch from "../components/widgets/Cardwithsearch";
import Dashboardcard from "../components/widgets/Dashboardcard";
import "./pages.scss";


const Batch = () => {
  // const [modalShow, setModalShow] = useState(false);   
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
               <Cardwithsearch
               title={"Batches"}
               text={"All batches will be shown here.You can search previous batches or upload a new batch."}
               />
              </div>
         {/* batch list */}
             <div className="container">
             <div  style={{backgroundColor:"#F2F4F7"}}className="card p-5 shadow">
            
    <div className="card-title">
        <div className="d-flex justify-content-between batch-title">
            <p className="text-sm">Previous Batch List</p>
            <Mymodal />
            {/* <button type="button" className="btn btn-sm btn-danger"
            >
 <span className="">
    Add New Batch
    </span>
    </button> */}
</div>

{/* modal */}

{/* endmodal */}
    <p className="text-sm">Showing 1 of 8</p>
    </div>
     <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list "
    children={<Link to="/"
     className="btn shadow">Show Record</Link>}
    />
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list "
    children={<Link to="/"
    className="btn shadow">Show Record</Link>}
    />
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list "
    children={<Link to="/"
    className="btn shadow">Show Record</Link>}
    />
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list "
    children={<Link to="/"
    className="btn shadow">Show Record</Link>}
    />
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list"
    children={<Link to="/"
    className="btn shadow">Show Record</Link>}
    />
   
    
    </div>
             </div>
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

export default Batch;
