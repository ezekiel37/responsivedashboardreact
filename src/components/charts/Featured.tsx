import React from 'react'
import Dashboardcard from '../widgets/Dashboardcard'

const Featured = () => {
  return (
    <div  style={{backgroundColor:"#F2F4F7"}}className="card p-3 shadow">
    <div className="card-title">
        <h5>Recent Batch List</h5>
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list "
    children={null}
    />
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list "
    children={null}
    />
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list "
    children={null}
    />
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list "
    children={null}
    />
    <Dashboardcard 
    time ="12:00 PM"
    title ="Dsa's computational File.xlsx"
    update ="Last updated :22/06/2022"
    category ="2364 Dsa profile list"
    children={null}
    />
   
    </div>
    </div>
  )
}

export default Featured