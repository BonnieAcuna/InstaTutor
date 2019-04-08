import React, { Component } from "react";
<<<<<<< HEAD
import Profile from "../../components/Profile/index";
import { Container, Row } from "../../components/Grid/index";
import API from "../../utils/API";
        
class Dashboard extends Component {
        state = {
            userId: null,
            user: {},
    
        };

        componentDidMount(){
            this.loadUser()
        };

        renderUser (user) {
            if (Object.values(user).length > 1){
                return(
                    <div>
                      <img src={user.image}/>
                        {user.firstName}
                        {user.lastName}
                        {user.email}
                    </div>
                )
            }
            return;
        }
        loadUser() {
            if(this.state.userId !== this.props.match.params.userid){
                API.getTutor(this.props.match.params.userid)
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
                        <Profile />
                    </Row>
                </Container>
            )
        }

}

=======

class Dashboard extends Component {

    state = {

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

>>>>>>> 0a2d02583ae998060bff018b04b1fa306abadb90
export default Dashboard;