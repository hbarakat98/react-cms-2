import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {Technology: 'PHP', Projects: 100},
                {Technology: 'MySQLi', Projects: 90},
                {Technology: 'Laravel', Projects: 95},
                {Technology: 'React', Projects: 85},
                {Technology: 'Opencart', Projects: 80},
                {Technology: 'Vue JS', Projects: 70},
                {Technology: 'Django', Projects: 60},
                {Technology: 'Javascript', Projects: 100},


            ]
        }
    }

    render() {
        var blue="#051b35";
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <div className="bottom"></div>
                    <Row style={{width:'100%',height:'300px'}}>
                        <Col   lg={6} md={12} sm={12}>
                            <ResponsiveContainer >
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue}>


                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="serviceDescription text-start ">orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed tellus
                                at urna sodales pulvinar vitae rhoncus risus. Morbi ac neque enim. Aliquam
                                vitae egestas orci, vitae consectetur lectus. Praesent id posuere metus.
                                Etiam ultrices auctor arcu eget ultrices. Pellentesque imperdiet sem quis
                                metus laoreet luctus. Integer mattis interdum nunc, eget commodo ante tempor
                                a.<br/><br/><br/>


                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;