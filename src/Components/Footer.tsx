import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


function Footer() {

    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span>About the To-Do-App</span> 
                    </p>
                    <div className="icons">
                        <a href="!#"><i className="fa fa-facebook"></i></a>
                        <a href="!#"><i className="fa fa-twitter"></i></a>
                        <a href="!#"><i className="fa fa-linkedin"></i></a>
                        <a href="!#"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> India and (+91) 6348 062 583</span> Pune, india</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+91) 6348 062 583</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="!#"> Admin@ कलाKendra.com</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2> Help and Support</h2>
                    <p className="menu">
                        <a href="!#"> Sign In</a> |
                        <a href="!#"> Contact Us</a> |
                        <a href="!#"> Sign Up</a> |

                    </p>
                    <p className="name"> कलाKendra &copy; 2022</p>
                </div>
            </footer>
        </div>

    )
}

export default Footer