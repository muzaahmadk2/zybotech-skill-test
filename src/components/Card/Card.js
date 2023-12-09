import classes from "./Card.module.css";
import { RiHeartAddFill } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../Store/cartSlice";
import { useContext } from "react";
import AuthContext from "../Store/Auth-Context";
import { useNavigate } from "react-router";

const Card = (props) => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const clickhandler = (e) => {
    if (isLoggedIn) {
      const cartItem = {
        id: props.title,
        title: props.title,
        image: props.image,
        price: +props.price,
      };
      dispatch(cartAction.addItemToCart(cartItem));
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className={`${classes.card}  ${
        showDetails && `${classes.showDetails} ${classes.box_shadow}`
      }`}
      onClick={toggleDetails}
    >
      <div
        className={
          !showDetails
            ? `${classes.image_container} ${classes.box_shadow}`
            : classes.image_container
        }
      >
        <span className={classes.heart}>
          {props.fill === "false" ? (
            <img src="/image/product-image/material-symbols_heart-plus-outline.svg" />
          ) : (
            <img src="/image/product-image/material-symbols_heart-plus.svg" />
          )}
        </span>

        <div className={classes.img}>
          <img src={props.image} />
        </div>
      </div>
      {showDetails && (
        <div className={classes.overlay}>
          <span>{props.title}</span>
          <span>$ {props.price}</span>
          <button className={classes.addToCart} onClick={clickhandler}>
            Add to Cart
          </button>
        </div>
      )}
      {!showDetails && (
        <div className={classes.info}>
          <span>{props.title}</span>
          <span className={classes.overlay_price}>$ {props.price}</span>
        </div>
      )}
    </div>
  );
};
export default Card;
