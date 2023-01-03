import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./Components/Card.jsx";
import { BackgroundFilter } from "./Components/BackgroundFilter.jsx";
import {Header, Footer} from './Components/Structure.jsx'
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="react-container">
    <BackgroundFilter/>
    <Header/>
    <Card />
    <Footer/>

  </div>
);
