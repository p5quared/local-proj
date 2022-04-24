import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./OurStory.css"
import logo from "../assets/logo.png"

export default function OurStory() {
    return (
        <>
        <Header />
        <h1 className="hours-location">our story</h1>
        <div className="story-wrapper-entire">
        <div className="story-wrapper">
        <img src={logo} className="story-logo" alt="blue moon cafe logo"></img>
        <div className="story-wrapper-text">
        <h2 className="story-title">Welcome to Our Cafe</h2>
        <h3 className="story-subtitle">A life time of passion for food for the Adirondacks</h3>
        <br></br>
        <p className="story-text">Tricia and Ken Fontana having worked in area foodservice establishments and hotels since the early 1980’s decided to go out on their own. In 1994 Cold River Coffee Company was opened by them thus bringing specialty coffees teas and chocolates to an area where they were not available. Tricia’s baking expertise,bolstered by her studies at Paul Smiths College, led them to pursue a place to showcase their wonderful coffees, teas and baked goods. When one of their first customers decided to close in 1997, an opportunity arose.</p>
        <br></br>
        </div>
        </div>
        <p className="story-text">The rest is history… 1996 the first coffee bar in the area, 1997 Fresh Fruit smoothies made without mixes or additives and the first panini menu inside the blue line. Since day one our menus included cheese, eggs, produce & foraged goodies from the north country as well as locally raised beef. In 2008 the café opened for dinner and added a beer and wine bar in the rear. Currently a limited selection of premium spirits is available to refresh you during the day and enhance your evening visit.</p>
        <br></br>
        <p className="story-text">Many of our staff are young local students. Quite a few have come to work here as their 1st job and stayed with us through their college education.  Our kitchen culture encompasses hiring young people with passion and giving them room to explore. While we continue to serve the traditional, we embrace our roots and pursue our love for peasant foods from around the world. This is evident when you peruse our menus and do all that in a neighborhood environment where your meals are enjoyable and affordable.</p>
        </div>
        <Footer />
        </>
    )
}