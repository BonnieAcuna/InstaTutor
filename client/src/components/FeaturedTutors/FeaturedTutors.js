import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Row, Col } from "../../components/Grid/index";

class FeaturedTutors extends Component {


    render() {


        return (
            <Row>
                <Col size="sm-2">
                </Col>
                <Col size="sm-8">
                    <Link to={`/user/${this.props.userid}`}>
                        <div className="container">
                            <div className="card ftCard shadow-sm bg-white rounded">
                                <Row>
                                    <Col size="sm-4">
                                        <div className="card-image">
                                            <img src={this.props.image} alt="Random Tutor" className="cardImage" />
                                        </div>
                                    </Col>
                                    <Col size="sm-4 md-8">
                                    <div className="card-header cardHead text-center">
                                        {this.props.name}
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="card-body text-center">

                                        {this.props.subjects}
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col size="sm-2">
                </Col>
            </Row>
        )
    }
}

export default FeaturedTutors;
