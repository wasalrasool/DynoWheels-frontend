import React, { Fragment } from "react";
import "./Header.css";
import Burger from "../../Burger/Burger";
// import {} from "../assets/test-logo.png"

function Header() {
  return (
    <Fragment>
      <div className="header-1 flex">
        <ul className="flex">
          <li>Sell On Dyno Wheels </li>
          <li>Affiliate Program</li>
          <li>Customer Care</li>
          <li>Track Order</li>
        </ul>
      </div>
      <div className="header-2 flex">
        <div className="logo flex"><img src="../assets/test-logo.png" alt="Company Logo" /></div>
        <div className="search-bar flex">
          <input type="text" placeholder="What are you looking for..." />
          <button>SEARCH</button>
        </div>
        <div id="burger">
          {/* <Burger /> */}
          Burger
        </div>
        <div className="menu flex">
          <h5>Sign In</h5>
        </div>
        <div className="menu flex">
          <h6>Orders</h6>
        </div>
        <div className="menu flex">
          <h6>Cart</h6>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
