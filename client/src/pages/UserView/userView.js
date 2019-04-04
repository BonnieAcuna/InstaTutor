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

    renderTutor () {
        if (Object.values(this.state.tutor).length > 1){
            return(
                <div>
                    {this.state.tutor.firstName}
                    {this.state.tutor.lastName}
                    {this.state.tutor.email}
                  <img src={this.state.tutor.image}/>
                  {this.state.tutor.subjects.map(subject => <h1 key={subject}>{subject}</h1>)}
                </div>
            )
        }
        return;
    }

    loadTutor() {
        //this.props.params.url call is passed here
        console.log(this.props.match.params.userid)
        API.getTutor(this.props.match.params.userid)
        .then(res=> {
            console.log(res.data)
            this.setState({ tutor:res.data })
            
        })
        .catch(err=> console.log(err));
    }

    render() {
        console.log("This is the UserView", this.state); 
        return (
            <Container>
                <Row>
                    {this.renderTutor()}
                </Row>
            </Container>
        )
    }
}

export default UserView;