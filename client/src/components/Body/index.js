import React from "react";


function Body() {
    return (
        <div className="container bgImage">
            <div className="row">
                {/* <div className="card mt-3 mb-3"> */}

                    <img src={require('../../Emptycard.png')} height="800" className="bodyImage" alt=""></img>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Body;