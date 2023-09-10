import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class SummaryTrial extends Component {
    render() {
        return (
            <Fragment>
                <Container className="summaryBanner p-0" fluid={true}>
                    <div className="summaryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">35000</h1>
                                            <h4 className="countTitle">Students Worldwide</h4>
                                            <hr className=" bg-white w-25 "  />

                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">22</h1>
                                            <h4 className="countTitle">Courses Published</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">3000</h1>
                                            <h4 className="countTitle">Student review</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>

                                    </Row>

                                </Col>
                            </Row>

                        </Container>

                    </div>

                </Container>
            </Fragment>
        );
    }
}

export default SummaryTrial;