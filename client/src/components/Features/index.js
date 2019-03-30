import React from "react";


function Features(props) {
  
  
  return (
    <div className="comtainer">
    <div className="card">
      <span onClick={() => props.removeTutor(props.id)} className="remove">
        𝘅
      </span>
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
    </div>
    </div>
  );
  }

export default Features;