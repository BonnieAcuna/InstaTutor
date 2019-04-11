import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Row, Col } from "../../components/Grid/index";

class FeaturedTutors extends Component {


    render(props) {

        return (
            <Row>
                <Col size="sm-2">
                </Col>
                <Col size="sm-8">
                    <Link to={`/user/${this.props.userid}`}>

                        <div className="card">
                            <div className="card-image">
                                <img src={this.props.image} alt="Random Tutor" />{this.props.name}
                                    {/* <div className="card-title">
                                        {this.props.name}
                                    </div> */}
                            </div>
                                <div className="card-footer">
                                    <div className="card-description">
                                        {this.props.subjects}
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
