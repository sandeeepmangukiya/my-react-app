import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-dark text-white text-center py-4">
                {/* <section>
                    <ul>
                        <li>
                            <NavLink to={{pathname:"https://www.facebook.com"}} target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </NavLink>
                        </li>
                    </ul>
                </section> */}
                <section>
                    <p>&copy; {currentYear} Parampara Fab | All Rights Reserved</p>
                </section>
            </footer>
        </>
    );
};

export default Footer;