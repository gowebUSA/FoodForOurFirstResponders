import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

class Home extends Component {

    render() {
      return (
        <div className="animated fadeIn">
            <Row >
                <Col xs="12">
                    <img  src='https://pictures.dealer.com/f/familyfordfd/1854/e7964eb78d5d1f80aa93981b84d395bfx.jpg' class="img-fluid mx-auto d-block" alt="First Responders"></img>
            </Col>
            </Row>
            <div class='container'>
            <Row >
                <Col>
                <Card width="50px">
                    <CardBody width="50px"><p>Hello world, This is the home page</p></CardBody>                    
                </Card>
                </Col>
            </Row>
            </div>
        </div>
    );
    }
  }
  
  
  export default Home;
  