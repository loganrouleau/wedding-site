import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";

export class MapContainer extends Component {
  static defaultProps = {
    latlng: { lat: 49.2733145, lng: -123.1326624 }
  };

  state = {
    showingInfoWindow: false,
    activeMarker: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={this.props.style}
        onClick={this.onMapClicked}
        initialCenter={this.props.latlng}
        zoom={13}
      >
        <Marker onClick={this.onMarkerClick} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onMapClicked}
        >
          <div>
            <p>False Creek Yacht Club</p>
            <a href="https://www.google.com/maps/search/?api=1&query=False+Creek+Yacht+Club&query_place_id=ChIJibuX-9FzhlQRX5h7WXB_cWU">
              1661 Granville St, Vancouver, BC V6Z 1N3
            </a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
