import React from "react";

import "./sidebar.scss";

import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { FiGrid, FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavDropdown } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand">
        <span className="">Direct Sales Agent</span>
      </div>
      <div className="profile">
        <div className="profile-img">
          <img className="logo" src={avatar} alt="logo" />
        </div>
        <div className="profile-text">
          <span className="name">Sunday Ayo</span>
          <br />
          <span className="subtitle">Personal Banking Analyst</span>
        </div>
      </div>

      <div className="sidenav">
        <ul>
          <li>
            <Link  className="sidelink" to="/">
              <span>
                <FiGrid />
              </span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="sidelink" to="/batch">
              <span>
                <FiGrid />
              </span>
              Batch
            </Link>
          </li>
          <li className="dropnav">
          <span>
            <FiUsers />
            </span>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Employees"
          menuVariant="dark"
          autoClose="inside"
          
        >
          <NavDropdown.Item>
          <Link
          className="sidelink"
          to="/active">
              Active
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
          <Link 
          className="sidelink"
          to="/inactive">
              Inactive
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        </li>
    <li>
            <Link className="sidelink" to="/configuration">
              <span>
                <IoSettingsOutline />
              </span>
              Configuration
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
