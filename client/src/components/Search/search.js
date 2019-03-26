import React, { Component } from "react";
import { Row, Col } from "../Grid/index.js";

function Search(query){
    return (
        <Row>
            <Col size="md-4">
                What subject do you need help with?
            </Col>
            <Col size="md-4">
                <input className="form-control" type="text" placeholder="Math, Science, History..." name="search"></input>
            </Col>
            <Col size="md-4">
                <button type="submit" className="btn btn-primary submitbtn">Submit</button>
            </Col>
        </Row>
    )
}

export default Search;

