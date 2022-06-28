import React from 'react'
import { Form } from 'react-bootstrap';
import { IoSearch } from 'react-icons/io5';
import "./widget.scss";
type Dashboardcard = {
    text:string,
    title:string,
   
}
const Cardwithsearch = (props:Dashboardcard) => {
  return (
   
      <div className="cardcontainer">
      <div className="boardrow">
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      </div>
   <div>
     <div className="searchbar">
      <IoSearch
      className="search-icon"
      />
     <input type="text"
     className="search-input"
     placeholder="Search" />
     </div>
   </div>
   </div>

  )
}

export default Cardwithsearch