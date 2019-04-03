//On Click Event to bring up the user view when the tutor card is selected
//Verified if user is logged in
//if user is logged in - show the tutor(s) - if user is not logged in - redirect to the sign up page
import React, { Component } from "react";
import { Container, Row } from "../../components/Grid/index";
import API from "../../utils/API";
//import TutorView from "../profile/:theirId"
//Check DB if user is logged in (1) or not (0)
//this.props.params.url within my ajax call


class UserView extends Component {

    state = {
        tutor: []
        //possibly do object instead of array
    };

    componentDidMount(){
        this.loadTutor("")
    };

    loadTutor() {
        //this.props.params.url call is passed here
        console.log(this.props.match.params.userid)
        API.getTutor(this.props.match.params.userid)
        .then(res=> {
            console.log(res.data)
            // this.setState({})
            
        })
        .catch(err=> console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    Yay
                </Row>
            </Container>
        )
    }
}

export default UserView;