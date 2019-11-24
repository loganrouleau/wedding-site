import React, { Component } from "react";
import MapContainer from "../components/MapContainer";
import wreath from "../assets/hiclipart.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className={"container"}>
          <img src={wreath} alt="Wedding Wreath" />
          <div className="centered">
            <h1>Logan & Chendi</h1>
            <p>August 8, 2020</p>
          </div>
        </div>
        <h2>Location</h2>
        <p>False Creek Yacht Club, Vancouver.</p>
        <div style={{ width: "100%", height: "400px", overflow: "auto" }}>
          <MapContainer style={{ width: "100%", height: "400px" }} />
        </div>
        <p>more text</p>
      </div>
    );
  }
}
