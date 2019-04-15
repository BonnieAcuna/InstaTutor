import React from 'react';
import "./Footer.scss"
//import { Container, Row } from '../Grid/index';

class Footer extends React.Component {
    render(){
        return(
            <footer className="footer text-center">
                <div className="container">
                <p className="footer-text"> &copy; 2019 Instatutor LLC. All Rights Reserved</p>
                </div>
            </footer>
        );
    } 
}
export default Footer

