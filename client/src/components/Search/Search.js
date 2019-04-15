import React, { Component } from "react";
import { Container, Row, Col } from "../Grid/index.js";
import API from "../../utils/API";
import "./searchContainer.css";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";
// import _ from 'lodash';
// import SearchFtTutors from "../SearchFtTutors/index";

class Search extends Component {
constructor(props) {
    super(props)
    this.state = {
        search: "",
        tutors: [],
        hasSearched: false
    }
    this.tutorRef= React.createRef()
}



    loadTutors = (query) => {
        API.getSearchedTutors(query)
            .then(res => {this.setState({tutors: res.data}, () => {
            console.log(this.tutorRef)    
            //this.tutorRef.current.scrollheight = '1200px';
            window.scrollTo(0, this.tutorRef.current.offsetTop)
            })})
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.loadTutors(this.state.search);
        this.setState({hasSearched: true});
    };


    renderSearchedTutors() {
        // if no results then show no results found
        
        if (this.state.tutors.length !== 0){
            console.log(this.state.tutors)
            return this.state.tutors.map((tutor, index) => (
                <FeaturedTutors
                  userid={tutor._id}
                  key={index}
                  name={tutor.firstName + " " + tutor.lastName}  
                  image={tutor.image}
                  subjects={tutor.subjects.join(", ")}
                />
            ))} else if(this.state.hasSearched) {
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
            <div className="scrollbar" style={this.state.tutors.length > 0 ? {minHeight:'700px'} : {}} ref={this.tutorRef}>
            <Container>
                <Row>
                    <p className="results text-center">Search Results</p>
                </Row>
                <Row>
                    {/* <SearchFtTutors */}
                    {this.renderSearchedTutors()}
                     {/* tutor= {this.state.tutors} */}
                    {/* /> */}
                </Row>
                
            </Container>
            </div>
            </div>  
        )
    }
}

export default Search;

