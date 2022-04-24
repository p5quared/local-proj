import React from "react";
import './Footer.css'
import iconFacebook from "../assets/social-icons/icons8-facebook-50.svg";
import iconInstagram from "../assets/social-icons/icons8-instagram-50.svg";


export default function Footer() {
    return (
        <footer>
            <div className="footer-leftItems">
                <h3>
                    Blue Moon <span className='italME'>Cafe</span>
                </h3>
            </div>
            <div className="footer-rightItems">
                <a href="https://www.facebook.com/BMCSL/">
                    <img src={iconFacebook} alt="link to facebook page"/>
                </a>
                <a href="https://www.instagram.com/explore/locations/4289088/blue-moon-cafe/">
                    <img src={iconInstagram} alt="link to instagram page"/>
                </a>
            </div>
        </footer>
    )
}