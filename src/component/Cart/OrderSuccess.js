import React, { useEffect } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./OrderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { emptyCart } from "../../actions/cartAction";
// import { useDispatch } from "react-redux";

const OrderSuccess = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(emptyCart());
  // }, [dispatch]);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify([]));
  }, []);

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
