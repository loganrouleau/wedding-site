import React, { Component } from "react";
import MapContainer from "../components/MapContainer";
import bannerDesktop from "../assets/banner-desktop.jpg";

export class Home extends Component {
  render() {
    return (
      <div style={{ width: "800px" }} className="centered-image">
        <img
          src={bannerDesktop}
          alt="Desktop Banner"
          style={{ width: "800px", marginBottom: "20px", marginTop: "20px" }}
          className="centered-image"
        />
        <h1 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          Logan & Chendi
        </h1>
        <h2>August 8, 2020</h2>
        <p style={{ textAlign: "center" }}>
          Ceremony at 3 pm<br></br>Dinner at 5 pm
        </p>
        <h2>RSVP</h2>
        <p>Please respond by email. We look forward to seeing you!</p>
        <h2>Location</h2>
        <p style={{ textAlign: "center" }}>
          All events will take place at the False Creek Yacht Club in Vancouver.
          There is a parking lot belonging to the venue but space may be
          limited.
        </p>
        <MapContainer
          style={{
            width: "800px",
            height: "350px",
            overflow: "hidden",
            marginBottom: "20px",
            fontFamily: "Montserrat"
          }}
          className="map-wrap"
        />
      </div>
    );
  }
}
