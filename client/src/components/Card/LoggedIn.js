import React from "react";

function loggedInCard(props) {
    return (
        <div classname="card">
            <div classname="card-header">
                Name: {props.name}
            </div>
            <div classname="card-body">
                Subject(s): {props.subject},
                Tutor Rank: {props.rank},
                Star Rating: {props.rating}
            </div>
            <div classname="card-footer">
                Price: {props.price},
                Location: {props.city, props.state}
                Contact Tutor: {props.link}
            </div>
        </div>
    )
}

export default loggedInCard;