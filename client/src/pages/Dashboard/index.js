import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";

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
                <Col size="4">
                    <div className="card mt-4">
                        <img src={user.user.image} alt="user" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{user.user.firstName} {user.user.lastName}</h5>
                            {/* <div className="card-text">
                                Subjects:
                                <ul>
                                {user.user.subjects.map(subject => <li key={subject}>{subject}</li>)}
                                </ul>
                            </div> */}
                        </div>
                        {/* <div className="card-footer">
                            Message me at: <a href={`mailto:${user.user.email}`}>{user.user.email}</a>
                        </div> */}
                    </div>
                </Col>
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
                <Row className="justify-content-md-center">
                    {this.renderUser(this.state.user)}
                </Row>
            </Container>
        )
    }
}

export default Dashboard;