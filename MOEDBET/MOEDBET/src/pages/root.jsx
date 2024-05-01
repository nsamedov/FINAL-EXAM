import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { WillingContext } from "../context/willing-context";

const Root = () => {
  const [willing, setWilling] = useState([])
  const [city, setCity] = useState("")
  return (
    <WillingContext.Provider value={{ willing, setWilling, city, setCity }}>
      <div className="main-layout">
        <div className="header-container">
          <span className="logo">Willing</span>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </WillingContext.Provider>
  );
};

export default Root;
