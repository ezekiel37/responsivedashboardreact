import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboardwidget from "../components/widgets/Dashboardwidget";
import "./pages.scss";
import { IoTrendingUp } from "react-icons/io5";
import Chart from "../components/charts/Chart";
import Featured from "../components/charts/Featured";
import MediaQuery  from 'react-responsive'
import Sidebarmobile from "../components/sidebar/Sidebarmobile";

// import Featured from '../../components/chart/featured/Featured'
// import Chart from '../../components/chart/chart/Chart'
const Home = () => {
  return (
    <div className="container-fluid px-0">
      <div className="row m-0 gr-0 gl-0">
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
              <div className="dashboard-title">
                <h2>Dashboard</h2>
                <span>Welcome back Ayo</span>
              </div>
              {/* dashboardwidgets */}
              <div className="dashboard-widgets">
                <div className="container lg:px-0 sm:px-auto">
                  <div className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-3 ">
                      <Dashboardwidget
                        type={"users"}
                        text={"Number of employees for the previous month"}
                        value= {420}
                      
                        icon={<IoTrendingUp />}
                        percent={"68%"}
                      
                      />
                    </div>
                    <div className="col-sm-12  col-md-6 col-lg-3 mb-3 ">
                      <Dashboardwidget
                        type={"users"}
                        text={"Number of employees for the previous month"}
                        value= {610}
                      
                        icon={<IoTrendingUp />}
                        percent={"80%"}
                      />
                    </div>
                    <div className="col-sm-12  col-md-6 col-lg-3  mb-3">
                      <Dashboardwidget
                        type={"others"}
                        text={"Number of employees for the previous month"}
                        value= {610}
                      
                        icon={<IoTrendingUp />}
                        percent={"80%"}
                      />
                    </div>
                    <div className="col-sm-12col-md-6 col-lg-3 mb-3">
                      <Dashboardwidget
                        type={"others"}
                        text={"Number of employees for the previous month"}
                        value= {610}
                      
                        icon={<IoTrendingUp />}
                        percent={"70%"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* charts and others */}
              <div className="chart-container">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-8 mb-3">
                      <Chart />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                      <Featured />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* endrow */}
    </div>
  );
};

export default Home;
