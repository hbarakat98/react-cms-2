import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="footerSection" fluid={true}>
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-center">
                            <h2 className="footerName text-center">Follow Us</h2>
                            <div className="socialContainer">
                                <a className="social facebook" href="#"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                                <a className="youtube social" href="#"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                                <a className="twitter social" href="#"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h2 className="footerName">Address</h2>
                            <p className="footerDescription">
                                214 Tarek Ibn Ziyad St New Cairo Cairo Egypt<br/>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : hussam.barakat@gmail.com <br/>
                                <FontAwesomeIcon icon={faPhone} /> Phone : +201026265666 <br/>
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h2 className="footerName ">Information</h2>
                            <Link className="footerLink" to="/about">About Me</Link> <br/>
                            <Link className="footerLink" to="/about">Company Profile</Link> <br/>
                            <Link className="footerLink" to="/contact">Contact Us</Link><br/>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-start">
                            <h2 className="footerName ">Policy</h2>
                            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/terms">Terms and Condition</Link><br/>
                            <Link className="footerLink" to="/privacy">Privacy Policy</Link> <br/>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">© Copyright 2023 by easy learning, All rights Reserved</a>

                </Container>
            </Fragment>
        );
    }
}

export default Footer;
