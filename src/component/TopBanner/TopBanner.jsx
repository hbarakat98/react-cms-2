import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../asset/css/custom.css';


class TopBanner extends Component {
    render() {
        return (

                <Fragment>
                    <Container className="topFixedBanner p-0" fluid={true}>
                        <div className="topBannerOverlay">
                            <Container className="topContent">
                                <Row>s
                                    <Col className="text-center">
                                        <h1 className="topTitle">Easy Learning</h1>
                                        <h4 className="topSubTitle">Learn Professionally</h4>
                                        <Button variant="primary">Learn More</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </Fragment>

        );
    }
}

export default TopBanner;