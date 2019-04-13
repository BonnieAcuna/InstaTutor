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
          <div className="text-left"  style={{fontSize:"28px"}}>
            {oneSub}
            <button type="button" className="btn" id={oneSub} onClick={()=> props.removeSubOnClick(oneSub)} style={{marginLeft:"8px",position:"relative", bottom:"8px", marginTop: "10px"}}><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      ))}
    </div>
  );
}