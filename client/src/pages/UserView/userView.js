//On Click Event to bring up the user view when the tutor card is selected
//Verified if user is logged in
//if user is logged in - show the tutor(s) - if user is not logged in - redirect to the sign up page
import React, { Component } from "react";
import { Container, Row } from "../../components/Grid/index";
import Testimonials from "../../components/Testimonials";
import API from "../../utils/API";
import "./style.scss";
//import TutorView from "../profile/:theirId"
//Check DB if user is logged in (1) or not (0)
//this.props.params.url within my ajax call


class UserView extends Component {

    state = {
        tutorId: null,
        tutor: {}
        //possibly do object instead of array
    };

    componentDidMount() {
        if (this.props.loggedIn) {
            this.loadTutor()
        } else {
            this.props.history.push("/signup")
        }

    };

    componentDidUpdate() {
        this.loadTutor()
    }

    renderTutor(tutor) {
        if (Object.values(tutor).length > 1) {
            return (

                <div className="card tutorView mt-3">
                    <Row>

                        <img src={tutor.image} alt="tutor" className="cardImg" />


                        <div className="card-footer">
                            <div className="card-title text-center">
                                {tutor.firstName + " " + tutor.lastName}
                                <br></br>
                                <a href={`mailto:${tutor.email}`}>Contact Me</a>
                            </div>
                            <div className="card-description text-center">
                                <div className="md-8">

                                    {tutor.subjects.map(subject => <h1 key={subject}>{subject}</h1>)}
                                </div>
                            </div>
                        <Testimonials render={tutor}/>
                            </div>

                        </Row>
                        
                    </div>

                    )
                }
                return;
            }
        
    loadTutor() {
        if (this.state.tutorId !== this.props.match.params.userid) {
                        API.getTutor(this.props.match.params.userid)
                            .then(res => {
                                this.setState({
                                    tutor: res.data,
                                    tutorId: this.props.match.params.userid
                                })
                            })
                            .catch(err => console.log(err));
                    }
                }
            
    render() {

        return (
            <Container>
                        <Row>
                            {this.renderTutor(this.state.tutor)}
                        </Row>
                    </Container>
                    )
                }
            }
            
export default UserView;