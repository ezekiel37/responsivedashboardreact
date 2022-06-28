import React, { ReactNode } from "react";
import "./widget.scss";
import { IoArrowUp } from "react-icons/io5";

type Dashboardwidget ={
  type: ReactNode,
  icon:ReactNode,
  text:string,
  value:number
percent:string

}

const Dashboardwidget = (props: Dashboardwidget) => {
  let background;
  if (props.type === "users") {
    background = "bg-users";
  }
  else if (props.type === "others") {
    background = "bg-others";
  }
  else{
    background = "bg-red-100";
  }
  
  return (
    <div className="card shadow">
       <div
            className={` ${background}`}
        >
           <span className="icon-size">{props.icon}</span> 
          </div>
      <div className="card-main">
        <div>
       
            <span className="card-text">
              {props.text}
            </span>
            </div>
        <div className="card-foot">
        <div className="card-value">{props.value}</div>
        <div className="bagdes">
        <span className="bagde-icon">
          <IoArrowUp/>
        </span>
          <span className="bagde-percent">{props.percent}</span>
        </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboardwidget;
