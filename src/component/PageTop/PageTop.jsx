import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {

    render=()=> {
        return (
            <Fragment>
                <Container className="topFixedPage p-0" fluid={true}>
                    <div className="topPageOverlay">
                        <Container className="topContentPage">
                            <Row>s
                                <Col className="text-center">

                                    <h4 className="topPageTitle">{this.props.pageTitle}</h4>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;