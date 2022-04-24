import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./MenuSelector.css";
import breakfast from "../assets/menus/menu_breakfast.jpg";
import lunch from "../assets/menus/menu_lunch.jpg";
import beverage from "../assets/menus/menu_beverages.jpg";

// Change visible menu based on clicking links...

export default function MenuSelector() {

    const menu = [breakfast, lunch, beverage]

    const [menu_id, selectMenu] = useState(0);

    return(
        <div className="menu-wrapper">
        <ul className="menu-select">
            <li onClick={() => selectMenu(0)}>breakfast</li>
            <li onClick={() => selectMenu(1)}>lunch</li>
            <li onClick={() => selectMenu(2)}>beverages</li>
        </ul>
        <img className="selected-menu "src={menu[menu_id]} alt="blue moon cafe menu images"/>
        </div>
    )
}