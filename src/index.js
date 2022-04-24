import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Menu from "./routes/Menu.js";
import HoursAndLocation from "./routes/HoursAndLocation"
import OurStory from "./routes/OurStory";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="menu" element={<Menu />}/>
      <Route path="hours-and-location" element={<HoursAndLocation />}/>
      <Route path="our-story" element={<OurStory />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
