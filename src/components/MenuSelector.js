import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import "./MenuSelector.css"

// Change visible menu based on clicking links...

export default function MenuSelector() {

    return(
        <>
        <ul className="menu-select">
            <li>breakfast</li>
            <li>lunch</li>
            <li>beverages</li>
        </ul>
        </>
    )
}