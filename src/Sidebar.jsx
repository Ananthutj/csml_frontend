import React from "react";
import mosq from "./components/images/mosq.png";
import water from "./components/images/water.png";
import flood from "./components/images/flood.png"
import air from "./components/images/air.png"
import noice from "./components/images/noice.png"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#131313"
        className="sidebar"
      >
        <CDBSidebarHeader
          className="header-icon"
          prefix={
            <i
              className="fa fa-bars fa-large"
              style={{ marginLeft: "1.5rem", backgroundColor: "#131313" }}
            ></i>
          }
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit", display: "flex" }}
          >
            <img
              src="csml_logo.png"
              style={{ height: "5rem", marginTop: "0.3rem" }}
            ></img>
            <div>
              <h1
                style={{
                  fontSize: 36,
                  color: "#F1F1F1",
                  marginBottom: "0.4rem",
                }}
              >
                CSML
              </h1>
              <div style={{ marginBottom: "1.4rem" }}>
                <h1
                  style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    margintop: "0.5rem",
                    fontWeight: "100",
                  }}
                >
                  Cochin Smart<br></br> Mission Limied
                </h1>
              </div>
            </div>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
           
                   
           <NavLink
  className="content1"
  exact
  to="/flood1"
  activeClassName="activeClicked"
  style={{
    textDecoration: "none",
    color: "inherit",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  }}
  activeStyle={{ backgroundColor: "#333" }}
>
  <CDBSidebarMenuItem className="content">
    <img
      src={flood}
      alt="Example"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "25px",
        height: "25px",
        marginRight: "10px", // Add right margin for spacing
      }}
    />
    Flood Alert
  </CDBSidebarMenuItem>
</NavLink>



            <NavLink
  className="content1"
  exact
  to="/water1"
  activeClassName="activeClicked"
  style={{
    textDecoration: "none",
    color: "inherit",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  }}
  activeStyle={{ backgroundColor: "#333" }}
>
  <CDBSidebarMenuItem className="content">
    <img
      src={water}
      alt="Example"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "25px",
        height: "25px",
        marginRight: "10px", // Add right margin for spacing
      }}
    />
  Water Pollution
  </CDBSidebarMenuItem>
</NavLink>

           



            
           


<NavLink
  className="content1"
  exact
  to="/air1"
  activeClassName="activeClicked"
  style={{
    textDecoration: "none",
    color: "inherit",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  }}
  activeStyle={{ backgroundColor: "#333" }}
>
  <CDBSidebarMenuItem className="content">
    <img
      src={air}
      alt="Example"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "25px",
        height: "25px",
        marginRight: "10px", // Add right margin for spacing
      }}
    />
    Air Pollution
  </CDBSidebarMenuItem>
</NavLink>

<NavLink
  className="content1"
  exact
  to="/noise1"
  activeClassName="activeClicked"
  style={{
    textDecoration: "none",
    color: "inherit",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  }}
  activeStyle={{ backgroundColor: "#333" }}
>
  <CDBSidebarMenuItem className="content">
    <img
      src={noice}
      alt ="Example"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "25px",
        height: "25px",
        marginRight: "10px", // Add right margin for spacing
      }}
    />
    Noise Pollution
  </CDBSidebarMenuItem>
</NavLink>

<NavLink
      className="content1"
      exact
      to="/mosq1" // Link to the "/mosq" route
      activeClassName="activeClicked"
      style={{
        textDecoration: 'none',
        color: 'inherit',
        marginBottom: '10px',
        transition: 'background-color 0.3s',
      }}
      activeStyle={{ backgroundColor: '#333' }}
    >
      <CDBSidebarMenuItem className="content">
        <img
          src={mosq}
          alt="Example"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: '25px',
            height: '25px',
            marginRight: '10px',
          }}
        />
        Mosquito
      </CDBSidebarMenuItem>
    </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          ></div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
