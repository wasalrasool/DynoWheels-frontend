import React from 'react'
import "./OrderPlaced.css"
import {Link} from 'react-router-dom'
//////////////////

import axios from "axios";
// import { createOrder, clearErrors } from "../../actions/orderAction";



//////////////

function OrderPlaced() {
  return (
    <div className="order-placed flex center">
    <div className="order-placed-1">Thank you for shopping with us</div>
    <div className="order-placed-2"><b>Order Placed</b></div>
    <Link to="/orders" className="order-placed-3 link">See My Orders</Link>
    </div>
  )
}

export default OrderPlaced;