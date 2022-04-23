import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
        <h1 className="title">
            <Link to="/">Blue Moon <span className='italME'>Cafe</span></Link>
        </h1>
        <nav className="nav">
            <Link to="/menu">menu</Link>
            <Link to="/hours-and-location">hours & location</Link>
            <Link to="/our-story">our story</Link>
        </nav>
        </div>
    )
}