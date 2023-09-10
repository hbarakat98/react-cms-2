import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideoSlash} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {

    constructor() {
        super();
        this.state={
            show:false
        }

    }

    modalClose=()=>{
        this.setState({show:false})
    }
    modalOpen=()=>{
        this.setState({show:true})
    }
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR VIDEOS</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="videoText">
                            <p className="text-start serviceDescription">orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed tellus at urna sodales pulvinar vitae rhoncus risus. Morbi ac neque enim. Aliquam vitae egestas orci, vitae consectetur lectus. Praesent id posuere metus. Etiam ultrices auctor arcu eget ultrices. Pellentesque imperdiet sem quis metus laoreet luctus. Integer mattis interdum nunc, eget commodo ante tempor a.</p>
                        </Col>


                        <Col lg={6} md={6} sm={12} className="videoCard">
                            <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body>
                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;