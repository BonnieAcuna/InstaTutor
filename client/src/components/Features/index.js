import React from "react";
import "./style.scss";
import API from "../../utils/API";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";
class Features extends React.Component {
  state = {
    tutors: [],
  
};
 
  componentDidMount() {
    this.tutorCard();
  }
  componentDidUpdate(){
    if(this.state.tutors.length === 0){
      this.tutorCard();
    }
  }
  tutorCard = () => {
    // console.log("HIT")
    API.getTutors() 
     .then(res => {
        this.setState({ tutors: res.data })
     })
    .catch(err => console.log(err));
    }

  render (){
    // console.log(this.state);
    return (
    <div className="tutorCards">
    {/* <div className="card">
      
      <div 
        className="content"
        style={{display:"flex", alignItems:"center"}}> */}
        
        
        <div style={{display:"flex"}}>
           {this.state.tutors.map((tutor, index) => (
          <FeaturedTutors
            id={tutor._id}
            userid={tutor._id}
            key={index}
            name={tutor.firstName + " " + tutor.lastName}  
            image={tutor.image}
            subjects={tutor.subjects.join(", ")}
            
          />
        ))}
        </div>
        
      {/* </div>
    </div> */}
    </div>
    )
  }

} 
export default Features;