import React from "react";
import { Container, Row, Col } from "../Grid/index.js";
import "./searchContainer.css";

function Search(query){
    return (
        <Container className="searchContainer">
            <Row>
                <Col size="md-3">
                    <h6>What subject do you need help with?</h6>
                </Col>
                <Col size="md-6">
                    <input className="form-control" type="text" placeholder="Math, Science, History..." name="search"></input>
                </Col>
                <Col size="md-2">
                    <button type="submit" className="btn btn-primary submitbtn">Submit</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;

