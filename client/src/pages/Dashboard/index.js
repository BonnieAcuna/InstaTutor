import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row } from "../../components/Grid";

class Dashboard extends Component {

    state = {
        userId: null,
        user: {}
    };

    componentDidMount(){
        this.loadUser()
    };
    
    componentDidUpdate(){
        this.loadUser()
    }

    renderUser (user) {
        if (Object.values(user).length >= 1){
            return(
                <div className="container tutorView">
                    <div className="col-md-8 mx-auto">
                    {user.user.firstName}
                    {user.user.lastName}
                    {user.user.email}

                  <img src={user.user.image} alt="user"/>

                  {user.user.subjects.map(subject => <h1 key={subject}>{subject}</h1>)}
                  </div>
                </div>
            )
        }
        return;
    }

    loadUser() {
        if(this.state.userId !== this.props.match.params.userid){
            API.getCurrentUser(this.props.match.params.userid)
            .then(res=> {
                this.setState({ 
                    user:res.data,
                    userId: this.props.match.params.userid 
                })
            })
            .catch(err=> console.log(err));
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