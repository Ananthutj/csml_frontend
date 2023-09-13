// import React from "react";
// import "./dashboard.css";
// import Graph from "./Graph";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <div className="dashboard-content">
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <div className="search-container">
//             <div>
//               <i className="fa fa-search search-icon"></i>
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search"
//                 style={{ paddingLeft: "3rem" }}
//               />
//             </div>
//           </div>
//           <div className="profile-container">
//           <p style={{ color: 'white', margin: '1rem', position: 'absolute', top: 4, right: 60}}>John</p>
//           <img className="profile" src="Avatar.png" alt="Flood" style={{ position: 'absolute', top: 18, right: 30 }} />

//           </div>
//         </div>
//         <div className="text-paragraph">
//           <h1 className="text-dashbaord">Dashboard</h1>
//         </div>
//       </div>
//       <Graph/>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="search-container">
            <div>
              <i className="fa fa-search search-icon"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                style={{ paddingLeft: "3rem" }}
              />
            </div>
          </div>
          <div className="profile-container">
          <p style={{ color: 'white', margin: '1rem', position: 'absolute', top: 20, right: 60}}>John</p>
          <img className="profile" src="Avatar.png" alt="Flood" style={{ position: 'absolute', top: 30, right: 30 }} />
          </div>
          
        </div>
        <div className="dashboard-main">
        <h1 className="dashboard-title">Dashboard</h1>
         <div style={{display:'flex'}}>
            
         </div>
       
        </div>
        
    </div>

   
  </div>


  );
};

export default Dashboard;