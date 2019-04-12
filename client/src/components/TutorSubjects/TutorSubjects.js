import React from "react";
//import { Container, Row } from "../../components/Grid/index";
//import { Input } from "../Form/index"

export default function TutorSubjects(props) {
  return (
    <div className="text-center">
      <input
        className="col-md-10"
        value={props.subject}
        onChange={props.handleInputChange}
        name="subject"
        placeholder="Subject"
      />
      <br />
      <button
        type="button"
        className="add-subject btn btn-primary mb-2"
        onClick={() => props.pushSubject(props.subject)}
      >
        Add Subject
        </button>

      {props.subjects.map(oneSub => (
        <div key={oneSub}>
          <div className="text-left" style={{fontSize:"28px"}}>
            {oneSub}
            <button type="button" onClick={props.removeSubOnClick} style={{marginLeft:"8px", fontSize:"8px", backgroundColor:"red", borderRadius:"5%", position:"relative", bottom:"5px"}}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}