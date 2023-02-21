
import React from 'react';
import {Link} from "react-router-dom";
import '../../App.css';

function Dashboard() {

  return (
    <div className={`dark`}>
      <h1>My Dashboard</h1>
      <nav>
        <Link to="orders">My Orders</Link>
        <Link to="details">My Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
