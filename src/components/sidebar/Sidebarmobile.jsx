import React, {useState} from "react";

import "./sidebar.scss";

import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { FiGrid, FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavDropdown, Tooltip, OverlayTrigger } from "react-bootstrap";

const Sidebarmobile = () => {
const [isOpen, setIsOpen] = useState(false);
const handleToggle = () => setIsOpen(!isOpen);

const Dashboard = props => ( <Tooltip {...props}>Dashboard</Tooltip>);
const Batch = props => (<Tooltip {...props}>Batch</Tooltip>);
const Image = props => (<Tooltip {...props}>Sunday Ayo<br></br>
Personal Banking Analyst</Tooltip>);
const Inactive = props => (<Tooltip {...props}>Inactive</Tooltip>);
const Configuration = props => (<Tooltip {...props}>Configuration</Tooltip>);
  return (
   
    <div className="sidebar">
      <div className="brand">
       DSA
      </div>
      <div className="profile">
        <div className="profile-img">
        <OverlayTrigger placement="bottom" overlay={Image}>
        <img className="logo" src={avatar} alt="logo" />
        </OverlayTrigger>
         
        </div>
      
      </div>

      <div className="mobilesidenav">
        <ul>
          <li>
            <Link  className="sidelink" to="/">
            <OverlayTrigger placement="bottom" overlay={Dashboard}>
              <span>
                <FiGrid />
              </span>
            </OverlayTrigger>
            </Link>
          </li>
          <li>
            <Link className="sidelink" to="/batch">
            <OverlayTrigger placement="bottom" overlay={Batch}>
              <span>
                <FiGrid />
              </span>
            </OverlayTrigger>
            </Link>
          </li>
          <li className="dropnav">
          <OverlayTrigger placement="bottom" overlay={Batch}>
          <span>
            <FiUsers />
          </span>
        </OverlayTrigger>
        <NavDropdown
          id="nav-dropdown-dark-example"
          
          icon={<FiUsers />}
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
            <OverlayTrigger placement="bottom" overlay={Configuration}>
          <span>
            <IoSettingsOutline />
          </span>
        </OverlayTrigger>
             
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebarmobile;
