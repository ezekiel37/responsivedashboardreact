import React from "react";
import MediaQuery from "react-responsive";

import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Sidebarmobile from "../components/sidebar/Sidebarmobile";
import Cardwithsearch from "../components/widgets/Cardwithsearch";

import Tablewidget from "../components/widgets/Tablewidget";
import "./pages.scss";


const Inactiveemployees = () => {
    
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
              {/* tablecontainer */}
              <div className="">
                <Tablewidget/>
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

export default Inactiveemployees
