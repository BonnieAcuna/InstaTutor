import React, { Component } from "react";
// import { Container, Row } from "../../components/Grid/index";
// import Features from "../Features";
// import API from "../../utils/API";


class FeaturedTutors extends Component {

        
    render(props) {
        console.log(this.props.name)
        return (
            
            <div className="card">
                <div className="card-img-top">{this.props.image}
            <div className="card-body">
                <p className="card-text">{this.props.name} {this.props.subjects}</p>
             </div>
             </div>       
        </div>
        )
    }
    }
    
   export default FeaturedTutors;
   