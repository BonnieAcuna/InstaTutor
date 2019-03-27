import React, { Component } from "react";
import { Container, Row } from "../../components/Grid/index";
import Login from "../../components/Login/Login"
import SignUpForm from "../../components/SignUpForm/SignUpForm";

class Signup extends Component {

    state = {
        userType: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        subject: "",
        subjects: []
    }

    signUpOnClick = (userType, firstName, lastName, email, password, subject, subjects) => {
        console.log(userType)
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)
        console.log(subject)
        console.log(subjects)
    }



    loginOnClick = (email, password) => {
        console.log(email)
        console.log(password)
        this.setState({
            email: "",
            password: ""
        })
    }

    pushSubject = (subject) => {
        this.setState({ subjects: [...this.state.subjects, subject] });
        this.setState({subject: ""})
      };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
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
                        userType = {this.state.userType}
                        firstName = {this.state.firstName}
                        lastName = {this.state.lastName}
                        email={this.state.email}
                        password={this.state.password}
                        subject={this.state.subject}        
                        subjects ={this.state.subjects}              
                        handleInputChange={this.handleInputChange}
                        signUpOnClick={this.signUpOnClick}
                        pushSubject =  {this.pushSubject}                    
                    />
                </Row>
            </Container>
        )
    }
}

export default Signup;