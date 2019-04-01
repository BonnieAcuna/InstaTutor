import React from "react";
import { Row, Col } from "../Grid/index.js";
import "./searchContainer.css";

function Search(query){
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
                    <input className="form-control" type="text" placeholder="Math, Science, History..." name="search"></input>
                    </div>
                    <button type="submit" className="btn btn-light submitbtn ml-3">Submit</button>
                    </form>
               </Col> 
                <Col size="md-2"> 
                    
                </Col>
                
            </Row>
            
        </div>
    )
}

export default Search;

