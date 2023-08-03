import React, { Fragment } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
///////
//react bootstrap css link
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// import logos from "../../../assets/test-logo.png";


const Header = () => {
  // return <ReactNavbar {...options} />;
  return (
    <div>
      <div className="header-1 flex">
        <ul className="flex">
          <Link className="link" to="/whatsapp">
            {" "}
            <li className="white-color">Sell On Dyno Wheels </li>
          </Link>
          <Link className="link" to="/whatsapp">
            {" "}
            <li className="white-color">Affiliate Program</li>
          </Link>
          <Link className="link " to="/whatsapp">
            {" "}
            <li className="white-color">Customer Care</li>
          </Link>
          <Link className="link" to="/orders">
            {" "}
            <li className="white-color">Track Order</li>
          </Link>
        </ul>
      </div>
      <div className="header-2 flex">
        <div className="logo flex">
          <Link className="link" to="/">
            <h1>Dyno Wheels</h1>
          </Link>
        </div>

        <Link to="/search" className="search-bar flex link">
          <div className="search-opt">
            <div>
              <h6>SEARCH ANY PRODUCT</h6>
            </div>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </Link>

        <div className="menu-wrapper">
        <Link className="link" to="/products">
          <div className="menu flex">
            <h5>Products</h5>
          </div>
        </Link>
        <Link className="link" to="/cart">
          <div className="menu flex">
            <h5>Cart</h5>
          </div>
        </Link>
        <Link className="link" to="/login">
          <div className="menu flex">
            <h5>My Account</h5>
          </div>
        </Link>
        <Link className="link" to="/about">
          <div className="menu flex">
            <h5>About Us</h5>
          </div>
        </Link>
        <Link className="link" to="/orders">
          <div className="menu flex">
            <h5>Orders</h5>
          </div>
        </Link></div>
        {/* <div className="menu flex">
          <h6>Cart</h6>
        </div> */}
      </div>
      <div>
        <navBarBootstrap />
      </div>
    </div>
  );
};

export default Header;
