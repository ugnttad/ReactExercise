import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "./assets/123.jpg";

const CarComponent = () => {
  return (
    <>
      <div style={{ textAlign: "center", margin: "20px", display: "flex", justifyContent: "space-around" }}>
        <div className="card" style={{ width: "18rem", padding: "10px", backgroundColor: "dodgerblue" }}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">My first car</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", padding: "10px", backgroundColor: "goldenrod"  }}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">My second car</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", padding: "10px" , backgroundColor: "red"  }}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">My third car</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarComponent;
