import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CgMouse } from "react-icons/all";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import "./Home.css";

const Home = () => {
  const alert = useAlert();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

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
          <MetaData title="ECommerce" />
          <div className="banner">
            <p>Welcome to Ecommerce!</p>
            <h1>Find amazing products inside!</h1>
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
