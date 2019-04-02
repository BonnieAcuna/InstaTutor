import React, { Component } from "react";
import "./style.scss";
import { Row, Col } from "../../components/Grid/index";
// import Features from "../Features";
// import API from "../../utils/API";


class FeaturedTutors extends Component {


    render(props) {
        // console.log(this.props.name)
        return (
            <Row>
            <Col size="sm-4">
            </Col>
            <Col size="sm-4">
            <div className="container">
                <div className="card shadow-sm bg-white rounded">
                    <div className="card-img-top">
                        <img src={this.props.image} alt="Random Tutor" />
                        <div className="card-body">
                            <p className="card-text">{this.props.name}</p>
                            <p>{this.props.subjects}</p>
                        </div>
                    </div>
                </div>
            </div>
            </Col>
            <Col size="sm-4">
            </Col>
            </Row>
        )
    }
}

export default FeaturedTutors;
