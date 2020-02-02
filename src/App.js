import React, { Component } from "react";
import './App.css';
import "./bottomPart.css";
import "./navigationStyle.css";
import gameLogo from "./gameLogo.png";
import giftCard from "./giftcard.png";
import NavigationBar from './NavigationBar';
import GreyNavigation from "./GreyNavigation";
import BlackBar from "./BlackBar";
import SimpleSlider from "./SimpleSlider";
import Bottom from "./Bottom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={gameLogo} class="titleLogo" alt="titleLogo"/>
          <input type="text" placeholder="Search..."/>
          <button type="submit" class="searchBar"><i class="fa fa-search"></i></button>
          <img src={giftCard} class="giftCard" alt="giftCard"/>
          <i class='fas fa-user-alt'></i>
          <a class="signIn">Sign in | Register</a>
          <i class='fas fa-map-marker-alt'>Store Finder</i>
          
          <div class="dropdown">
            <button class="dropbtn"><i class='fas fa-shopping-basket'>0</i>
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">0 items</a>
            </div>
          </div>
          <NavigationBar/>
          <GreyNavigation/>
          <BlackBar/>
          <SimpleSlider/>
          <Bottom/>
        </header>
      </div>
    );
  }
  
}

export default App;
