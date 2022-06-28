import React, { ReactNode } from 'react'
import "./widget.scss";
type Dashboardcard ={
    time:string,
    title:string,
    update:string,
    category:string,
    children:ReactNode
}
const Dashboardcard = (props:Dashboardcard) => {
  return (
    <div className="py-1 boardcard">
      <div className="boardcontainer">
      <div className="boardrow">
      <p>{props.time}</p>
    <p>{props.title}</p>
    <p>{props.update}</p>
    <p>{props.category}</p>
      </div>
   <div>
    {props.children}
   </div>
   </div>
   <hr/>
    </div>
  )
}

export default Dashboardcard