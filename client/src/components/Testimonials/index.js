import React from "react";

export function Testimonials(props) {
    console.log("Testimonial");
    console.log(props);
    return (
    <div className="testimonials">
        <p>"{props.render.firstName} is an amazing tutor."</p>
    </div>
    )
}

export default Testimonials;