import React from 'react';
import { Container, Row } from '../Grid/index';

class Footer extends React.Component {
    render(){
        return(
            <footer className="footer text-center">
                <div className="container">
                    <p className="footer-text">Copyright 2017 Clean Code Crew. All Rights Reserved</p>
                </div>
            </footer>
        );
    } 
}
export default Footer