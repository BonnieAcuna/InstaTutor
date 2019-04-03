import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Container, Row } from "../../components/Grid/index";
import Login from "../../components/Login/Login"
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import API from "../../utils/API";
import axios from "axios"

class Signup extends Component {

    state = {
        userType: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        subject: "",
        subjects: [],
        success: false
    }

    signUpOnClick = (userType, firstName, lastName, email, password, subjects) => {
        if (userType === "tutor") {
            API.createTutor({
                firstName: firstName,
                lastName: lastName,
                subjects: subjects,
                email: email,
                password: password,
            })
                .then(res => {
                    this.setState({
                        userType: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        subject: "",
                        subjects: []
                    })
                })
                .catch(err => console.log(err));
        } else {
            API.createUser({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            })
                .then(res => {
                    this.setState({
                        userType: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        subject: "",
                        subjects: []
                    })
                })
                .catch(err => console.log(err))
        }
    }

    loginOnClick = () => {

        const { email, password } = this.state
        axios.post("/login", { email, password })
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("jwtToken", res.data.token);
                this.setState({
                    success: res.data.success
                });
            })
            .catch(err => console.log(err))
    }

    pushSubject = (subject) => {
        this.setState({ subjects: [...this.state.subjects, subject] });
        this.setState({ subject: "" })
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        if (this.state.success
        ) {
            return (<Redirect to="/" />)
        } else {
            return (
                <Container>
                    <Row>
                        <Login
                            email={this.state.email}
                            password={this.state.password}
                            handleInputChange={this.handleInputChange}
                            loginOnClick={this.loginOnClick}
                        />
                    </Row>
                    <Row>
                        <SignUpForm
                            userType={this.state.userType}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            email={this.state.email}
                            password={this.state.password}
                            subject={this.state.subject}
                            subjects={this.state.subjects}
                            handleInputChange={this.handleInputChange}
                            signUpOnClick={this.signUpOnClick}
                            pushSubject={this.pushSubject}
                        />
                    </Row>
                </Container>
            )
        }
    }
}

export default Signup;