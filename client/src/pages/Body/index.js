import React from "react";
// import { Row, Col } from "../Grid/index.js";
import "./style.scss";
import Search from "../../components/Search/Search"



class Body extends React.Component {
    componentDidMount() {
        this.props.updateUser();
    }
    render() {
        return (
            <div className="body">
            <div className="bgImage">


                <Search />
            </div>
            </div>
                
           
        )
    }
}

export default Body;