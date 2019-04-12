import React from "react";
import "./style.scss";
import API from "../../utils/API";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";
class Features extends React.Component {
  state = {
    tutors: [],
    requests: 0
};
 
  componentDidMount() {
    this.tutorCard();
  }
  componentDidUpdate(){
    if(this.state.tutors.length === 0 && this.state.requests < 10){
      this.tutorCard();
    }
  }
  tutorCard = () => {
    this.setState({
      requests: this.state.requests + 1
    })
    API.getTutors() 
     .then(res => {
        this.setState({ tutors: res.data })
     })
    .catch(err => console.log(err));
    }

  render (){
    return (
    <div className="tutorCards">
        
        
        <div style={{display:"flex"}}>
           {this.state.tutors.map((tutor, index) => (
          <FeaturedTutors
            id={tutor._id}
            userid={tutor._id}
            key={index}
            name={tutor.firstName + " " + tutor.lastName}  
            image={tutor.image}
            subjects={tutor.subjects.join(", ")}
            loggedIn={this.props.loggedIn}
            
          />
        ))}
        </div>
    </div>
    )
  }

} 
export default Features;