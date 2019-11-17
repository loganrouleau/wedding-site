import React, { Component } from "react";

export class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      message: "Leave us a message"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    //alert('handling input')
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    const data = JSON.stringify({
      isGoing: this.state.isGoing,
      numberOfGuests: this.state.numberOfGuests,
      message: this.state.message
    });
    fetch("/api/rsvp", {
      method: "POST",
      body: data,
      cache: "no-cache",
      headers: { "content-type": "application/json" }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Leave us a message:
          <textarea
            name="message"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
