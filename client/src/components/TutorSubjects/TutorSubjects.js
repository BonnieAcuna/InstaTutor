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
        <br/>
        <button
          type="button"
          className="add-subject btn btn-primary mb-5"
          onClick={() => props.pushSubject(props.subject)}
        >
          Add Subject
        </button>

        {props.subjects.map(oneSub => (
          <span key={oneSub}>
            <h6>
              {oneSub}
              {
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "solid",
                    borderColor: "white",
                    borderRadius: "5%",
                    padding: "2px"
                  }}
                >
                  x
                </button>
              }
            </h6>
          </span>
        ))}
      </div>
  );
}