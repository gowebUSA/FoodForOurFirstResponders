import React, { Component } from 'react';
import { Card, CardBody, Row, Col,Form,FormGroup,FormText,Input,Label,Button, CardHeader } from 'reactstrap';
import {GoogleMaps,VolunteerForm} from '../Components'


const getMapBounds = (map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.geometry.location.lat,
      place.geometry.location.lng,
    ));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
  // Get bounds by our places
  const bounds = getMapBounds(map, maps, places);
  // Fit map to bounds
  map.fitBounds(bounds);
  // Bind the resize listener
  bindResizeListener(map, maps, bounds);
};

class HowToHelp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }
    render() {
      const { places } = this.state;
      return (
        <div className="animated fadeIn" class="container">
        <Row>
        <Col> 
        <Card>
        <div class="container" style={{ height: '50vh', width: '100%' }}>
        <GoogleMaps 
            defaultZoom={10}
            defaultCenter={[37.5407, -77.4360]}
            yesIWantToUseGoogleMapApiInternals
            >
        </GoogleMaps>
          </div>
        </Card>
        </Col>
        </Row>
        <Row>
        <Col>
        <Card>
            <CardBody>
            We are constantly looking for volunteers to help feed our First responders. If you
            would like to assist please fill out the form!  
            </CardBody>                    
        </Card>
        </Col>
        <Col>
        <Card>
          <CardHeader>Volunteer Form</CardHeader>
          <VolunteerForm/>
        </Card>
        </Col>
        </Row>
        
        </div>
    );
    }
  }
  
export default HowToHelp;
  