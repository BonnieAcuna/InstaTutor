import React, { Component } from "react";
import { Row, Col } from "../Grid/index.js";
import API from "../../utils/API";

class Search extends Component {
    state = {
        search: "",
        searchedTutors: []
    }

    componentDidMount() {
        this.handleFormSubmit();
    }

    loadTutors = (query) => {
        API.getSearchedTutors(query)
            .then(res => this.setState({ searchedTutors: res }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value,
        });
    }

    handleFormSubmit = event => {
        this.loadTutors(this.state.search)
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
                        <form className="form-inline">
                            <div className="inputForm">
                                <input className="form-control" type="text" placeholder="Math, Science, History..." name="search" value={this.state.search} onChange={this.handleInputChange}></input>
                            </div>
                            <button type="submit" className="btn btn-light submitbtn ml-3" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </Col>
                    <Col size="md-2">

                    </Col>

                </Row>

            </div>
        )
    }
}

export default Search;

