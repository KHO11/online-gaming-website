import React from "react";
import "./App.css";
import saleImage from "./saleTag.jpg";
import dragon from "./dragonPS4.jpg";
import cod from "./codGame.jpg";
import fifa from "./fifa20.jpg";
import starWars from "./starWars.jpg";
import metro from "./metroRedux.jpg";
import nintendoBundle from "./nintendoBundle.jpg";
import twoConsoles from "./twoConsoles.jpg";
import tokyo from "./tokyo.jpg";
import gameElite from "./gameElite.webp";
import gameMedia from "./gameMedia.webp";

class SimpleSlider extends React.Component {
  render() {
    return(
      <div>
        <img src={saleImage} class="sale" alt="sale"/>
        <h1>Top Picks</h1>
        <img src={dragon} class="dragon" alt="dragon"/>
        <img src={cod} class="cod" alt="cod"/>
        <img src={fifa} class="fifa" alt="fifa"/>
        <img src={starWars} class="starWars" alt="starWars"/>
        <img src={metro} class="metro" alt="metro"/>
        <p class="announced">Just Announced</p>
        <a href="https://www.game.co.uk/en/games/just-announced/?cm_sp=homepage-_-espot1-_-justannouncemetro" class="shopAll">Shop All</a>
        <img src={nintendoBundle} class="nintendoBundle" alt="nintendoBundle"/>
        <p class="switch"> Switch available 24th January</p>
        <a class="switchLink" href="https://www.game.co.uk/en/-2720721?cm_sp=homepage-_-espot1-_-NSWAC">Pre-Order Now</a>
        <div class="blackSection">
          <p class="text1">Console Bundle Deals</p>
          <p class="text2">Play your way and experience the power of gaming at home or on the go</p>
          <a href="https://www.game.co.uk/en/hardware/best-bundles?sortBy=PRICE_ASC&cm_sp=homepage-_-panel-_-BundleDeals" class="shop2nd">Shop All</a>
          <img src={twoConsoles} class="twoConsoles" alt="twoConsoles"/>
        </div>
        <img src={tokyo} class="tokyo" alt="tokyo"/>
        <p class="miss">Games you might have missed</p>
        <a href="https://www.game.co.uk/en/games/hidden-gems-and-future-finds/hidden-gems?cm_sp=homepage-_-espot11-_-gymhm" class="shop3rd">Shop All</a>
        <img src={gameElite} class="gameElite" alt="gameElite"/>
        <p class="percent">Up to 10% back in points</p>
        <a href="https://www.game.co.uk/webapp/wcs/stores/servlet/HubArticleView?hubId=1891757&articleId=1891758&catalogId=10201&langId=44&storeId=10151&cm_sp=homepage-_-espot12-_-gameelite" class="joinNow">Join Now</a>
        <img src={gameMedia} class="gameMedia" alt="gameMedia"/>
        <p class="news">News</p>
        <a href="https://news.game.co.uk/?cm_sp=home-_-espot13-_-gamemedia" class="findMore2" alt="findMore2">Find Out More</a>
      </div>
    );
  }
}

export default SimpleSlider;