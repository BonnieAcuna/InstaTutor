import React from "react";
import "./style.scss";
// import API from "../../utils/API";
import FeaturedTutors from "../FeaturedTutors/FeaturedTutors";
class Features extends React.Component {
  state = {
    tutors: [
      {
          firstName: "John",
          lastName: "Smith",
          subjects: ["React", "HTML", "css", "Bootstrap"],
          email: "jsmith@gmail.com",
          password: "password"
      },
      {
          firstName: "Jane",
          lastName: "Gomez",
          subjects: ["Javascript", "Python"],
          email: "jane123@gmail.com",
          password: "password"
      },
      {
          firstName: "Bill",
          lastName: "Jones",
          subjects: ["Math", "Finance", "Economics"],
          email: "billJones@gmail.com",
          password: "password"
      },
      {
          firstName: "Erica",
          lastName: "Garcia",
          subjects: ["Chemestry", "Biology"],
          email: "eg123@gmail.com",
          password: "password"
      }
  ],
};
 
  componentDidMount() {
    this.tutorCard();
}
  tutorCard = () => {
    console.log("HIT")
    // API.getTutors() 
    //  .then(res => 
    //     this.setState({ tutors: res.data })
    //  )
    // .catch(err => console.log(err));
    }

  render (){
    console.log(this.state);
    return (
    <div className="tutorCards">
    <div className="card">
      {/* <span onClick={() => props.removeTutor(props.id)} className="remove">
        𝘅
      </span> */}
      <div className="img-container">
        <img alt={this.props.name} src={this.props.image} />
      </div>
      <div 
        className="content"
        style={{display:"flex", alignItems:"center"}}>
        <ul style={{marginRight: 10}}>
          <li>
            <strong>ljljdlfsjdflj:</strong> {this.props.name}
          </li>
          <li>
            <strong>Subject:</strong> {this.props.subject}
          </li>
        </ul>

        
        <div style={{display:"flex"}}>
           {this.state.tutors.map(tutor => (
          <FeaturedTutors
            
            id={tutor.id}
            name={tutor.firstName + "" + tutor.lastName}  
            image={tutor.image}
            subjects={tutor.subjects}
            
          />
        ))}
        </div>
        
      </div>
    </div>
    </div>
    )
  }

} 
export default Features;