import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Name"/>

                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your E-Mail"/>

                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3}/>
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription">
                                214 Tarek Ibn Ziyad St New Cairo Cairo Egypt<br/>
                                <FontAwesomeIcon icon={faEnvelope}/> Email : hussam.barakat@gmail.com <br/>
                                <FontAwesomeIcon icon={faPhone}/> Phone : +201026265666 <br/>
                            </p>


                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;