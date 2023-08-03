import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

////
import Carousal from "../../Helpers/Carousal"
import BannerCard from "../../Helpers/BannerCard";
import { Link } from "react-router-dom";
import Products from "../Product/Products";



const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products,
  
    productsCount,
    resultPerPage,
    filteredProductsCount,} = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
       
          <MetaData title="Dyno Wheels" />
        
      <div className="banner">
        <div className="carousal-div">
          <Carousal />
        </div>
       
        <div className="banner-right">
        <Link className="link" to="/products">
          <BannerCard
            className="banner-card"
            title="Highest Quality"
            description="Every Product is sold after complete quality checks"
          />
          </Link>
          <Link className="link" to="/whatsapp">
          <BannerCard
            className="banner-card"
            title="Start Car Project"
            description="Exclusive rewards for starting a car project. Free discounts and other stuff"
          />
          </Link>
          <Link className="link" to="/whatsapp">

          <BannerCard
            className="banner-card"
            title="Sell Now"
            description="Become a Seller on DynoWheels"
           
          />
           </Link>
        </div>
      </div>
        

          {/* <div className="carousal-div">
            <Carousal/>
          </div> */}
          {/* <Products/> */}

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="line"></div>
          <div className="flex center">
          <Link to="/products" className="more-products link">
            <p>Find More Products</p>
          </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
