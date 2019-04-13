import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row } from "../../components/Grid";

class Dashboard extends Component {

    state = {
        userId: null,
        user: {}
    };

    componentDidMount() {
        this.loadUser()
    };

    componentDidUpdate() {
        this.loadUser()
    }

    renderUser(user) {
        if (Object.values(user).length >= 1) {
            return (
                <div className="container tutorView mt-3 mb-2">
                    <Row>
                        <img src={user.user.image} alt="user" className="cardImg" />
                        <div className="card-footer">
                            <div className="card-title text-center">
                                {user.user.firstName}
                                {user.user.lastName}<br></br>
                                {user.user.email}
                            </div>
                            <div className="class-description text-center">
                                <div className="md-8">
                                    {user.user.subjects.map(subject => <h1 key={subject}>{subject}</h1>)}
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            )
        }
        return;
    }

    loadUser() {
        if (this.state.userId !== this.props.match.params.userid) {
            API.getCurrentUser(this.props.match.params.userid)
                .then(res => {
                    this.setState({
                        user: res.data,
                        userId: this.props.match.params.userid
                    })
                })
                .catch(err => console.log(err));
        }
    }

    render() {

        return (
            <Container>
                <Row>
                    {this.renderUser(this.state.user)}
                </Row>
            </Container>
        )
    }
}

export default Dashboard;