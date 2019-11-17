import React, { Component } from "react";
import { Reservation } from "../components/Reservation";

export class Home extends Component {
  //static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Logan and Chendi's Wedding</h1>
        <p>We are getting married on August 8, 2020.</p>
        <h2>RSVP</h2>
        <Reservation></Reservation>
      </div>
    );
  }
}
