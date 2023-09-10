import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECT</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?w=1380&t=st=1689192339~exp=1689192939~hmac=4a4eb128ad638b4bea5990ec298a87f06fe1e9de73a2f6253fdd227ff6c76819" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name One</Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/projectdetails">View More</Link></Button>
                                </Card.Body>
                            </Card>

                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=1380&t=st=1689193538~exp=1689194138~hmac=d5d7f158cb0cb390f96fc1e6e7756a9cc1bb46e61da6e99a936df8357496dad1" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name Two</Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/projectdetails">View More</Link></Button>                                </Card.Body>
                            </Card>

                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=1380&t=st=1689193538~exp=1689194138~hmac=d5d7f158cb0cb390f96fc1e6e7756a9cc1bb46e61da6e99a936df8357496dad1" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name Two</Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/projectdetails">View More</Link></Button>                                </Card.Body>
                            </Card>

                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/premium-vector/online-education-platform-elearning-platform-online-teaching-educational-courses-video-call_566886-2626.jpg?w=1380" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name Three</Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/projectdetails">View More</Link></Button>                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/premium-vector/online-education-platform-elearning-platform-online-teaching-educational-courses-video-call_566886-2626.jpg?w=1380" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name Three</Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/projectdetails">View More</Link></Button>                                </Card.Body>
                            </Card>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?w=1380&t=st=1689192339~exp=1689192939~hmac=4a4eb128ad638b4bea5990ec298a87f06fe1e9de73a2f6253fdd227ff6c76819" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name One</Card.Title>
                                    <Card.Text className="serviceDescription">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/projectdetails">View More</Link></Button>                                 </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default AllProjects;