import React from "react";
import Header from "../components/Header"
import MenuSelector from "../components/MenuSelector";
import Footer from "../components/Footer";

export default function Menu(){


    return (
        <div className="menu-page">
            <div className="page-wrapper">
                <Header />
                <h1 className="hours-location">Menu</h1>
                <MenuSelector />
            </div>
            <Footer />
        </div>
    )
}