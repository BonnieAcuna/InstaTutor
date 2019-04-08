import React from "react";
//import { Row } from "../../components/Grid/index";
//import { Input } from "../Form/index";
import TutorSubjects from "../TutorSubjects/TutorSubjects";
import "./style.scss";

export default function SignUpForm(props) {
<<<<<<< HEAD
    return (
        <div style={{ padding: "10px", marginTop: "10px", float: "right" }}>
            <h1>Create a New Account</h1>
            <Row>
                <div className="ml-3">
                    <h4>Sign up as:</h4>
                </div>
                <form id="userTypeId" className="ml-4">
                    <input type="radio" name="userType" value="tutor" onChange={props.handleInputChange} /> Tutor
                    <input type="radio" name="userType" value="user" className="ml-4" onChange={props.handleInputChange} /> User
                </form>
            </Row>
            <form>
                <Row>
                    <div className="form-row">
                        <div className="ml-3 mt-2 mr-1">
                            <Input
                                value={props.firstName}
                                onChange={props.handleInputChange}
                                name="firstName"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="mt-2">
                            <Input
                                value={props.lastName}
                                onChange={props.handleInputChange}
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="col-12">
                        <Input
                            value={props.email}
                            onChange={props.handleInputChange}
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                </Row>
                <Row>
                    <div className="col-12">
                        <Input
                            type="password"
                            value={props.password}
                            onChange={props.handleInputChange}
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                </Row>
                <Row>
                    <TutorSubjects
                        subject={props.subject}
                        subjects={props.subjects}
                        handleInputChange={props.handleInputChange}
                        pushSubject={props.pushSubject}
                    />
                </Row>
                <div className="form-group">
                    <label>label</label>
                    <input type="file" id="upload" name={"image"}></input>
                </div>
            
            <button type="button" className="btn btn-primary mt-2 float-right" onClick={() => props.signUpOnClick(props.userType, props.firstName, props.lastName, props.email, props.password, props.subjects, props.subject)}>Sign Up</button>
            </form>
        </div >
    )
}
=======
  return (
    <div className="sign-up text-center">
      <h1>Create a New Account</h1>
      <h4>Sign up as:</h4>

      <form id="userTypeId">
        <input
          type="radio"
          name="userType"
          value="tutor"
          onChange={props.handleInputChange}
        />{" "}
        Tutor
        <input
          type="radio"
          name="userType"
          value="user"
          className="ml-4"
          onChange={props.handleInputChange}
        />{" "}
        User
      </form>
      <form>
        <input
          className="col-md-10"
          value={props.firstName}
          onChange={props.handleInputChange}
          name="firstName"
          placeholder="First Name"
        />

        <input
          className="col-md-10"
          value={props.lastName}
          onChange={props.handleInputChange}
          name="lastName"
          placeholder="Last Name"
        />

        <input
          className="col-md-10"
          value={props.email}
          onChange={props.handleInputChange}
          name="email"
          placeholder="Email"
        />

        <input
          className="col-md-10"
          type="password"
          value={props.password}
          onChange={props.handleInputChange}
          name="password"
          placeholder="Password"
        />
        <div className="text-center">
          <TutorSubjects
            subject={props.subject}
            subjects={props.subjects}
            handleInputChange={props.handleInputChange}
            pushSubject={props.pushSubject}
          />
        </div>
        <div className="clear"></div>
        <div className="text-center">
        <button
        type="button"
        className="signup-btn btn btn-primary"
        onClick={() =>
          props.signUpOnClick(
            props.userType,
            props.firstName,
            props.lastName,
            props.email,
            props.password,
            props.subjects,
            props.subject
          )
        }
      >
        Sign Up
      </button>
        </div>
        
      </form>
    </div>
  );
}
>>>>>>> 0a2d02583ae998060bff018b04b1fa306abadb90
