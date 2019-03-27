import React from 'react'
import { Container, Row } from "../../components/Grid/index";
import { Input } from "../Form/index"

export default function TutorSubjects(props) {
    return (
        <Container>
            <Row>
                <div className="col">
                    <Input
                        value={props.subject}
                        onChange={props.handleInputChange}
                        name="subject"
                        placeholder="Subject"
                    />
                    <button type="button" className="btn btn-primary btn-sm float-right" onClick={() => props.pushSubject(props.subject)}>Add Subject</button>
                </div>
                <div className="col">
                    {props.subjects.map(oneSub => (
                        <span>
                            <h6>{oneSub}
                            <button type="button" className="close" aria-label="Close" style={{backgroundColor: "red", color: "white", border: "solid", borderColor:"white", borderRadius:"5%", padding: "2px" }}>
                            x
                            </button>
                            </h6>
                        </span>
                    ))}
                </div>
            </Row>
        </Container>
    )
}
