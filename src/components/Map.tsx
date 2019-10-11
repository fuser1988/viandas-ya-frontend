import React, { Component, ElementType } from "react";
import "./Map.css";
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'
type IPropsMap ={lat:number, lgn:number,zoom:number};

export class Map extends Component <IPropsMap>{

  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    let options = {
      zoom: this.props.zoom,
      center: { lat: this.props.lat, lgn:this.props.lgn}
    };

    const MyGoogleMap = withScriptjs(withGoogleMap(() =>
        <GoogleMap
            defaultCenter= {options.center}
            defaultZoom= {this.props.zoom}
            options={{disableDefaultUI: true}}>
        </GoogleMap>))  
    var key = 'AIzaSyCk9lUgqQBF_EojnEsDkspDDp-ozqf1rnA';    
    const loadingElement = <div/>;
    const containerElement = <div style={{height: '100vh'}}/>;
    const mapElement = <div style={{height: '100vh'}}/>;
    const googleMapURL ='https://maps.googleapis.com/maps/api/js?key='+key+'&libraries=places';
    const map = <MyGoogleMap  loadingElement={loadingElement}
        containerElement={containerElement}
        googleMapURL={googleMapURL}
        mapElement={mapElement}/>;

    // let map = new window.google.maps.Map(
      // document.getElementById('map'), options);

    // new window.google.maps.Marker({position: options.center, map: map});

  //  new window.google.maps.InfoWindow();

    // Create the search box and link it to the UI element.npm
  //   let input = document.getElementById('pac-input');
  //   let searchBox = new window.google.maps.places.SearchBox(input);
  //   map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

  //   // // // Bias the SearchBox results towards current map's viewport.
  //   map.addListener('bounds_changed', function() {
  //     searchBox.setBounds(map.getBounds());
  //   });

  //   var markers = [];
  //   // Listen for the event fired when the user selects a prediction and retrieve
  //   // more details for that place.
  //   searchBox.addListener('places_changed', function() {
  //     var places = searchBox.getPlaces();

  //     if (places.length === 0) {
  //       return;
  //     }

  //     // Clear out the old markers.
  //     markers.forEach(function(marker) {
  //       marker.setMap(null);
  //     });
  //     markers = [];

  //     // For each place, get the icon, name and location.
  //     var bounds = new window.google.maps.LatLngBounds();
  //     places.forEach(function(place) {
  //       if (!place.geometry) {
  //         console.log("Returned place contains no geometry");
  //         return;
  //       }
  //       var icon = {
  //         url: place.icon,
  //         size: new window.google.maps.Size(71, 71),
  //         origin: new window.google.maps.Point(0, 0),
  //         anchor: new window.google.maps.Point(17, 34),
  //         scaledSize: new window.google.maps.Size(25, 25)
  //       };

  //       // Create a marker for each place.
  //       markers.push(new window.google.maps.Marker({
  //         map: map,
  //         icon: icon,
  //         title: place.name,
  //         position: place.geometry.location
  //       }));

  //       if (place.geometry.viewport) {
  //         // Only geocodes have viewport.
  //         bounds.union(place.geometry.viewport);
  //       } else {
  //         bounds.extend(place.geometry.location);
  //       }
  //     });
  //     map.fitBounds(bounds);
  //   });
   }

  render() {
    return <div id="map" />;
  }
}

// export default Map;