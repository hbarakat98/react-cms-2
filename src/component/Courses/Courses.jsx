import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY COURSES</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImage" src="https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3558.jpg?w=1380&t=st=1689195248~exp=1689195848~hmac=9974b2702ee262540255295c361a33a43e2b192e16277ea83cf2a49fc6fc323d"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start serviceName">Laravel 8</h5>
                                    <p className="text-start serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="courseViewMore float-start " href="#">View Details</a>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImage" src="https://img.freepik.com/free-photo/female-speaker-giving-presentation-hall-university-workshop-audience-conference-hall_155003-27432.jpg?w=1380&t=st=1689195281~exp=1689195881~hmac=7f63aa420ee966c69facc6bf9a84c0be0de5878c7ce72981ded7cb3651e83b0a"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start serviceName">Laravel 8</h5>
                                    <p className="text-start serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="courseViewMore float-start " href="#">View Details</a>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImage" src="https://img.freepik.com/premium-photo/rear-view-audience-listening-asian-speaker-stage-meeting-room_41418-4150.jpg?w=1380"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start serviceName">Laravel 8</h5>
                                    <p className="text-start serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="courseViewMore float-start " href="#">View Details</a>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImage" src="https://img.freepik.com/premium-photo/e-learning-student-online-vdo-call-conference-work-from-home-with-cat-remote-work-talk-chat-online-laptop-webcam-conference-working-with-tablet-social-distancing-concept_1715-3187.jpg?w=1380"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-start serviceName">Laravel 8</h5>
                                    <p className="text-start serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a className="courseViewMore float-start " href="#">View Details</a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Fragment>

        );
    }
}

export default Courses;