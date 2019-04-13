import React, { Component } from "react";
import { Container, Row } from "../../components/Grid/index";
//import Login from "../../components/Login/Login";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import API from "../../utils/API";
import "./style.scss";
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
    createdUser: false,
    error: null
  };

  constructor(props) {
    super(props)
    this.fileInput = React.createRef();
    // console.log(this.fileInput)
    this.signUpOnClick = this.signUpOnClick.bind(this);
  };


  signUpOnClick = () => {
    console.log("hittttttttttttttttttttttttt")
    let formData = new FormData();
    formData.append("userType", this.state.userType);
    formData.append("firstName", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("subjects", this.state.subjects.join(','));
    if (this.fileInput.current.files[0]) {
      formData.append("image", this.fileInput.current.files[0], this.fileInput.current.files[0].name);
    }
    API.createUser(formData)
      .then(res => {
        if (res.data.error) {
          // Show error to user
          this.setState({
            error: res.data.error
          })
        } else {
          const { email, password } = this.state
          axios.post("/auth/login", { email, password })
            .then((res) => {
              localStorage.setItem("jwtToken", res.data.token);
              if (res.data.success) {
                this.props.updateUser();
                
                this.props.history.push('/')
                // this.renderRoot();
              }
              if (res.data.error) {
                // Show error to user
                this.setState({
                  error: res.data.error
                })
              }
              this.setState({
                userType: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                subject: "",
                subjects: [],
                createdUser: true
              })
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err));
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

  removeSubOnClick = (subject) => {
    // console.log(subject)
    // event.preventDefault()
    // console.log(event.target.id)
    // let id = event.target.id
    // (this.state.subjects).filter(subject => event.target.id)
    let newSubjects = this.state.subjects.filter(ele => ele !== subject)
    this.setState({subjects: newSubjects})
  }

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
            error={this.state.error}
            createdUser={this.state.createdUser}
            removeSubOnClick={this.removeSubOnClick}
          />
        </Row>
      </Container>
    )

  }

}

export default Signup;
