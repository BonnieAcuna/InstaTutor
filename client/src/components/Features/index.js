import React from "react";

function Features(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Subject:</strong> {props.subject}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeTutor(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Features;