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
  tutorCard = () => {
    console.log("HIT")
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
            id={tutor.id}
            key={index}
            name={tutor.firstName + "" + tutor.lastName}  
            image={tutor.image}
            subjects={tutor.subjects}
            
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