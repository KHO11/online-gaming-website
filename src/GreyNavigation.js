import React from "react";
import "./App.css";

class GreyNavigation extends React.Component {
    render() {
        return(
            <div class="greyNavigation">
                <i class='fas fa-truck'>Free Tracked Delivery on UK game <br/>Orders over £19.99</i>
                <i class='fas fa-money-bill-wave'>Everything is cheaper when you <br/> Trade-In - Find out more</i>
                <i class='fas fa-building'>Collect your orders from OVER 7000 <br/> LOCATIONS and game stores </i>
            </div>
        );
    }
}

export default GreyNavigation;