import React, { Component } from "react";
import { Container, Row } from "../../components/Grid/index";
import Features from "../Features";
import API from "../../utils/API";


class FeaturedTutors extends Component {

        
    render() {
        console.log(this.props.name)
        return (
            <div style={{marginRight: 10}}>
                <img src="https://placehold.it/100"/>       
            </div>
        )
    }
    }
    
   export default FeaturedTutors;
   