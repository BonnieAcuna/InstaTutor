import React from "react";
import { Row, Col } from "../Grid/index.js";
import "./style.scss";


function Body() {
    return (
        
        <div className="bgImage">
            
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
                    <button type="submit" className="btn btn-primary submitbtn ml-3">Submit</button>
                    </form>
               </Col> 
                <Col size="md-2"> 
                    {/* <button type="submit" className="btn btn-primary submitbtn ml-0">Submit</button> */}
                    
                </Col>
                
            </Row>
            {/* <Row>
                <Col size="md-5">
                </Col>
                <Col size="md-2">
                    
                <button type="submit" className="btn btn-primary submitbtn">Submit</button>
                </Col>
                <Col size="md-5">
                </Col>    
             </Row>    */}
        </div>
                {/* <div className="card mt-3 mb-3"> */}

                    {/* <img src={require('../../Emptycard.png')} height="800" className="bodyImage" alt=""></img> */}
                {/* </div> */}
            {/* </div> */}
            </div>
        
    )
}

export default Body;