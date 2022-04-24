import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bg_img from "../assets/saranac\ lake\ map.jpeg"
import "./HoursAndLocation.css";
export default function HoursAndLocation() {
    return (
        <>
        <div className="page-wrapper">
            <Header />
            <img
            className="hours-bg"
            src={bg_img}
            alt="background image of map"/>
            <div className="content">
            <h1 className="hours-location">HOURS & LOCATION</h1>
            <div className="info-wrapper">
                <div className="static-wrapper">
                <a href="https://goo.gl/maps/tAqguMbWySvD7bY28" target="_blank"className="address">
                    55 Main Street<br></br>
                    Saranac Lake, NY 12983<br></br>
                </a>
                <a href="tel:5188911310" className="phone">
                    (518) 891-1310
                </a>
                </div>
                <p>
                <span className="bold">Breakfast</span><br></br>
                Served Daily<br></br>
                7:30 - 11:30AM
                </p>

                <p>
                <span className="bold">Lunch</span><br></br>
                Served Daily<br></br>
                11AM - 2PM
                </p>

            </div>
            </div>
        </div>
            <Footer />
        </>
    )
};