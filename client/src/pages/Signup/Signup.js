import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Container, Row } from "../../components/Grid/index";
//import Login from "../../components/Login/Login";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import API from "../../utils/API";
import axios from "axios";

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
  };

  constructor(props) {
    super(props)
    this.fileInput = React.createRef();
    console.log(this.fileInput)
    this.signUpOnClick = this.signUpOnClick.bind(this);
};


  signUpOnClick = () => {
    let formData = new FormData();
      formData.append("userType", this.state.userType);
      formData.append("firstName", this.state.firstName);
      formData.append("lastName", this.state.lastName);
      formData.append("email", this.state.email);
      formData.append("password", this.state.password);
      formData.append("subjects", this.state.subjects.join(','));
      formData.append("image", this.fileInput.current.files[0], this.fileInput.current.files[0].name);
    API.createUser(formData)
      .then(res => {
        this.setState({
          userType: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          subject: "",
          subjects: []
        });
      })
      .catch(err => console.log(err));
  }
  pushSubject = (subject) => {
    this.setState({ subjects: [...this.state.subjects, subject] });
    this.setState({ subject: "" })
};

  loginOnClick = () => {
    const { email, password } = this.state;
    axios
      .post("/auth/login", { email, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("jwtToken", res.data.token);
        this.setState({
          success: res.data.success
        });
      })
      .catch(err => console.log(err));
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
                        fileRef={this.fileInput}
                    />
                </Row>
            </Container>
        )

    }
  
}

export default Signup;
