import React from 'react'

export default function Navlogin(props) {
    return (
        <div>
            <form onSubmit={props.loginOnClick} className="form-inline" >
                <div className="form-group">
                    <input
                        style={{ width: "200px", height: "40px" }}
                        value={props.email}
                        onChange={props.handleInputChange}
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <input
                        style={{ width: "200px", height: "40px", marginLeft: "10px" }}
                        type="password"
                        value={props.password}
                        onChange={props.handleInputChange}
                        name="password"
                        placeholder="Password"
                    />
                </div>
                < div className="form-group">
                    <button type="submit" style={{ float: "right", marginLeft: "10px", marginBottom: "40px" }} className="btn btn-success" >
                        Log In
                </button>
                </div>
            </form>
        </div>
    )
}
