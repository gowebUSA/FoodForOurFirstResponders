import React, { Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavbarToggler,Collapse, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import {  AppNavbarBrand} from '@coreui/react';
import logo from '../assets/img/brand/logo.png'
import Home from '../views/Home';

 
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 100,
    };
  }
  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }
  render() {
    
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
        <div class="container">
          <NavbarToggler onClick={this.toggle} navbar/>
          <Collapse isOpen={this.state.collapse} >
            <Nav navbar className="mr-auto" >
                <NavItem className="px-3">
                  <NavLink to="/Home" className="nav-link" >Home</NavLink>
                </NavItem>
                <NavItem className="px-3">
                  <Link to="/AboutUs" className="nav-link">About Us</Link>
                </NavItem>
                <NavItem className="px-3">
                  <NavLink to="/HowToHelp" className="nav-link">How To Help</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
          <AppNavbarBrand
            full={{ src: logo, width: 50, height: 50, alt: 'Tokie Foundation Logo'}}
            minimized={{ src: logo, width: 30, height: 30, alt: 'Tokie Foundation Logo' }}
          />
        </div>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
