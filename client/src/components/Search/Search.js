import React, { Component } from "react";
import { Container, Row, Col } from "../Grid/index.js";
import API from "../../utils/API";
import "./searchContainer.css";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";

class Search extends Component {
    state = {
        search: "",
        tutors: []
    }

    loadTutors = (query) => {
        API.getSearchedTutors(query)
            .then(res => {this.setState({tutors: res.data})})
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.loadTutors(this.state.search)
    };


    renderSearchedTutors() {
        // if no results then show no results found
        if (this.state.tutors.length !== 0){
            return this.state.tutors.map((tutor, index) => (
                <FeaturedTutors
                  id={tutor.id}
                  key={index}
                  name={tutor.firstName + " " + tutor.lastName}  
                  image={tutor.image}
                  subjects={tutor.subjects}
                />
            ))} else {
                return <div  className="noResults">No Results Found!</div>;
            };
    };

    render() {
        return (
            <div className="searchContainer">
                <Row>
                    <Col size="md-2">
                    </Col>
                    <Col size="md-8">

                        <h6 className="text-center">What subject do you need help with?</h6>
                    </Col>
                    <Col size="md-2">
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                    </Col>
                    <Col size="md-8">
                        <form className="form-inline" onSubmit={this.handleFormSubmit}>
                            <div className="inputForm">
                                <input className="form-control" type="text" placeholder="Math, Science, History..." name="search" value={this.state.search} onChange={this.handleInputChange} required></input>
                            </div>
                            <button type="submit" className="btn btn-light submitbtn ml-3">Submit</button>
                        </form>
                    </Col>
                    <Col size="md-2">
                    </Col>
                </Row>
            <Container>
                <Row>
                    {this.renderSearchedTutors()}
                </Row>
            </Container>
            </div>
        )
    }
}

export default Search;

