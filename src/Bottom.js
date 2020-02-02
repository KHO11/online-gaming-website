import React from "react";
import "./bottomPart.css";
import visa from "./visa.png";
import paypal from "./paypal.png";
import giftCard from "./gameGiftCard.png";
import credit from "./paypalCredit.webp";
import insomia from "./insomia.png";
import gameElite2 from "./gameElite.png";
import gameReward from "./gameReward.png";
import appStore from "./appStore.png";
import googlePlay from "./googlePlay.png";

class Bottom extends React.Component {
    render() {
        return(
            <div class="mainBottomPart">
                <h1>Discover GAME</h1>
                <hr/>
                <ul class="leftList">
                    <li class="main"><a href="#">Our Products</a></li>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Coming Soon</a></li>
                    <li><a href="#">Pre-Owned</a></li>
                    <li><a href="#">Tech | Merchandise </a></li>
                    <li><a href="#">Marketplace</a></li>
                    
                </ul>

                <ul class="secondList">
                    <li class="main2"><a href="#">Our Services</a></li>
                    <li><a href="#">GAME Blog</a></li>
                    <li><a href="#">Pre-Order price promise</a></li>
                    <li><a href="#">Trade In</a></li>
                    <li><a href="#">Pre-Owned guarantee</a></li>
                    <li><a href="#">GAME Finance </a></li>
                    <li><a href="#">Store Finder | Store Events</a></li>
                    
                </ul>

                <ul class="thirdList">
                    <li class="main3"><a href="#">Customer Services</a></li>
                    <li><a href="#">Help Home</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Deliveries</a></li>
                    <li><a href="#">Where is my order?</a></li>
                    <li><a href="#">Returns information </a></li>
                    <li><a href="#">Tech Support</a></li>
                    
                </ul>

                <ul class="endList">
                    <li class="main4"><a href="#">About</a></li>
                    <li><a href="#">Careers at GAME</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Privacy Centre</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Cookies </a></li>
                    <li><a href="#">Copyright</a></li>
                    
                </ul>

                <h6 class="lastHeading">Reward, Elite & App</h6>
                <a href="https://www.game.co.uk/webapp/wcs/stores/servlet/HubArticleView?hubId=1891757&articleId=1891758&catalogId=10201&langId=44&storeId=10151&merchname=footer-_-Game-_-Elite"><img src={gameElite2} class="gameElite2" alt="gameElite2"/></a>
                <a href="https://www.game.co.uk/webapp/wcs/stores/servlet/HubArticleView?hubId=97817&articleId=183712&catalogId=10201&langId=44&storeId=10151&merchname=footer-_-Game-_-Reward"><img src={gameReward} class="gameReward" alt="gameReward"/></a>
                <a href="https://apps.apple.com/gb/app/game-mobile-app/id567772794"><img src={appStore} class="appStore" alt="appStore"/></a>
                <a href="https://play.google.com/store/apps/details?id=co.uk.game.mobileapp"><img src={googlePlay} class="googlePlay" alt="googlePlay"/></a>

                <hr class="lastLine"/>

                <h2>Ways to Pay</h2>
                <img src={visa} class="visa" alt="visa"/>
                <img src={paypal} class="paypal" alt="paypal"/>
                <img src={giftCard} class="giftCard" alt="giftCard"/>
                <img src={credit} class="credit" alt="credit"/>

                <h3>Email Sign-Up</h3>
                <p>Sign up for the latest news, game releases and best deals</p>
                <form>
                <input type="text" placeholder="Your Email..."/>
                <button type="submit" class="searchBar">Sign Me Up</button>
                </form>

                <h4>More From GAME</h4>
                <img src={insomia} class="insomia" alt="insomia"/>
                <p>Game Retail Limited. trading as GAME.co.uk - Company Registration No: 7837246 - Company Registered in England Registered:
                Address Unity House, Telford Road, Basingstoke, Hammpshire, RG21 6YJ <br/>
                Game Retail Limited is authorised and regulated by the Financial Conduct Authority. Firm reference number - 652341.
                </p>
                <hr class="finalLine"/>

                <h5>Represensitive  Example:</h5>
                <button class="firstButton">Represensitive 19.9% APR (Variable)</button>
                <button class="secondButton">Purchase rate 19.9% (Variable)</button>
                <button class="thirdButton">Assumed credit limit £1,200</button>
                <p>Subject to status. Terms and conditions apply. Game Retail Limited acts as a broker and not a lender. Commission may be received. We will introduce to PayPal
                (Europe).</p>

                
            </div>
        );
    }
}

export default Bottom;