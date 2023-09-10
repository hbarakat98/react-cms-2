import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ClientReview extends Component {


    render() {
        var settings = {
            autoPlaySpeed: 3000,
            autoPlay: true,
            dots: true,
            infinite: true,
            speed: 3000,
            arrows:false,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container fluid={true} className="siderBack text-center">
                    <h1 className="reviewMainTitle p-3">TESTIMOIAL</h1>
                    <div className="reviewbottom"></div>
                    <Slider {...settings}>
                        <div >
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>


                                    <img className="circleImg"
                                         src="https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?w=1380&t=st=1689199425~exp=1689200025~hmac=a14e40a596541a8f908f407f3a9ddd099ec3a47b220ef6f0898748597e18699a"/>
                                    <h2 className="reviewName">Hossam Barakat</h2>
                                    <p className="reviewDescription">rem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Aliquam sed tellus at urna sodales pulvinar vitae rhoncus risus. Morbi ac
                                        neque enim. Aliquam vitae egestas orci, vitae consectetur lectus. Praesent id
                                        posuere metus. Etiam ultrices auctor arcu eget ultrices. Pellentesque imperdiet
                                        sem quis metus laoreet luctus. Integer mattis interdum nunc, eget commodo ante
                                        tempor a.</p>

                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>


                                    <img className="circleImg"
                                         src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=996&t=st=1689199427~exp=1689200027~hmac=3a3aba387908dfb4fff7df8312630016e74c3d94cbf00628166f437a8bbd7f67"/>
                                    <h2 className="reviewName">Jack Man</h2>
                                    <p className="reviewDescription">rem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Aliquam sed tellus at urna sodales pulvinar vitae rhoncus risus. Morbi ac
                                        neque enim. Aliquam vitae egestas orci, vitae consectetur lectus. Praesent id
                                        posuere metus. Etiam ultrices auctor arcu eget ultrices. Pellentesque imperdiet
                                        sem quis metus laoreet luctus. Integer mattis interdum nunc, eget commodo ante
                                        tempor a.</p>

                                </Col>
                            </Row>
                        </div>



                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>


                                    <img className="circleImg"
                                         src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1689199428~exp=1689200028~hmac=1050638e2e79be01e93acdd926c88f0a15cf8d32a3eb096b723462023b8b9757"/>
                                    <h2 className="reviewName">Baki Hanmma</h2>
                                    <p className="reviewDescription">rem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Aliquam sed tellus at urna sodales pulvinar vitae rhoncus risus. Morbi ac
                                        neque enim. Aliquam vitae egestas orci, vitae consectetur lectus. Praesent id
                                        posuere metus. Etiam ultrices auctor arcu eget ultrices. Pellentesque imperdiet
                                        sem quis metus laoreet luctus. Integer mattis interdum nunc, eget commodo ante
                                        tempor a.</p>

                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;