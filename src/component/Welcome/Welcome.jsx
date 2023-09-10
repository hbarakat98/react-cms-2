import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import pageone from '../../asset/image/page1.png';
import pagetwo from '../../asset/image/page2.png';
import pagethree from '../../asset/image/page3.png';
import iconone from '../../asset/image/19.png';
import icontwo from '../../asset/image/20.png';
import iconthree from '../../asset/image/21.png';

class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <div className="intro-area--top">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="section-title text-center">
                                    <div className="intro-area-inner">
                                        <h6 className="sub-title double-line">Welcome</h6>
                                        <h2 className="mainTitle">An exemplary <br/>
                                            learning community</h2>


                                        <Container className="text-center mt-5">
                                            <Row>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={pageone} alt=""/>
                                                    <h1 className="serviceName">Easy as it gets </h1>
                                                    <p className="serviceDescription">Lorem ipsum dolor</p>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={pagetwo} alt=""/>
                                                    <h1 className="serviceName">Teach The way you want </h1>
                                                    <p className="serviceDescription">Lorem ipsum dolor</p>
                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <img src={pagethree} alt=""/>
                                                    <h1 className="serviceName">The small matter of getting </h1>
                                                    <p className="serviceDescription">Lorem ipsum dolor</p>
                                                </Col>
                                            </Row>


                                            //Intro Footer

                                            <Row className="intro-footer bg-base mt-5">
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={iconone} alt=""/>
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="text-start homeIntroTitle">Development</h5>
                                                            <p className="text-start serviceDescription"> Lorem ipsum
                                                                dolor</p>
                                                        </Col>
                                                    </Row>

                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={icontwo} alt=""/>
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="text-start homeIntroTitle">Web Design</h5>
                                                            <p className="text-start serviceDescription"> Lorem ipsum
                                                                dolor</p>
                                                        </Col>
                                                    </Row>

                                                </Col>
                                                <Col lg={4} md={6} sm={12}>
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className="sideImg" src={iconthree} alt=""/>
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="text-start homeIntroTitle">Ecommerce</h5>
                                                            <p className="text-start serviceDescription"> Lorem ipsum
                                                                dolor</p>
                                                        </Col>
                                                    </Row>

                                                </Col>
                                            </Row>
                                        </Container>

                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Welcome;