import React, { Component } from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import { Row, Col } from "../../components/Grid/index";

class FeaturedTutors extends Component {


    render(props) {
        
        return (
            <Row>
            <Col size="sm-2">
            </Col>
            <Col size="sm-8">
            <Link to={`/user/${this.props.userid}`}>
                <div className="container">
                    <div className="card shadow-sm bg-white rounded">
                        <div className="card-img-top">
                            <img src={this.props.image} alt="Random Tutor" />
                            <div className="card-body">
                                <p className="card-text">{this.props.name}<br></br>
                                {this.props.subjects}</p>
                            </div>
                        </div>
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
