import React from 'react'
import { Input } from "../Form/index"
import { Container, Row } from "../../components/Grid/index";

export default function Login(props) {
    return (
        <Container>
            <Row>
                <Input
                    value={props.email}
                    onChange={props.handleInputChange}
                    name="email"
                    placeholder="Email"
                />
                <Input
                    type="password"
                    value={props.password}
                    onChange={props.handleInputChange}
                    name="password"
                    placeholder="Password"
                />
                <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success" onClick={() => props.loginOnClick(props.email, props.password)}>
                    Log In
                </button>

            </Row>
        </Container>
    )
}
