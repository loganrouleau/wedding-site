import React, { Component } from "react";
import MapContainer from "../components/MapContainer";
import bannerDesktop from "../assets/banner-desktop.jpg";
import mobileFooter from "../assets/mobile-footer.png";
import mobileHeader from "../assets/mobile-header.png";

export class Home extends Component {
  render() {
    return (
      <div className="centered-image width-constrained">
        <div className="top-margin"></div>
        <img
          src={bannerDesktop}
          alt="Desktop Banner"
          style={{ marginBottom: "20px" }}
          className="centered-image width-constrained hide-on-mobile"
        />
        <img
          src={mobileHeader}
          alt="Mobile Header"
          style={{ marginBottom: "20px" }}
          className="centered-image width-constrained show-on-mobile"
        />
        <h1 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          Logan & Chendi
        </h1>
        <p style={{ textAlign: "center", marginBottom: "22px" }}>
          wish to invite you to our wedding on
          <br></br>
        </p>
        <h2>August 8, 2020</h2>
        <p style={{ textAlign: "center" }}>
          <br></br>Ceremony at 3 pm<br></br>
          <br></br>Dinner at 5 pm<br></br>
          <br></br>
        </p>
        <h2>RSVP</h2>
        <p>Please respond by email. We look forward to celebrating with you!</p>
        <h2>Venue</h2>
        <p style={{ textAlign: "center" }}>
          All events will take place at the False Creek Yacht Club in Vancouver.
          There is a parking lot belonging to the venue but space may be
          limited.
        </p>
        <MapContainer
          style={{
            height: "350px",
            overflow: "hidden",
            marginBottom: "20px",
            fontFamily: "Raleway"
          }}
        />
        <div
          style={{ marginBottom: "20px", position: "relative", top: "380px" }}
        >
          <img
            src={mobileFooter}
            alt="Mobile Footer"
            className="centered-image width-constrained show-on-mobile"
          />
          <p style={{ fontSize: 12, textAlign: "center", marginTop: "20px" }}>
            Invite design by Logan Rouleau & Chendi Wang
          </p>
        </div>
      </div>
    );
  }
}
