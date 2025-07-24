import React, { useEffect } from "react";

const Dashboard = () => {

  // tab title
        useEffect(()=>{
        document.title='SentiLog-Dashboard '
        },[])
  return (
  <div className="p-4">Dashboard (placeholder)</div>
)};

export default Dashboard; 