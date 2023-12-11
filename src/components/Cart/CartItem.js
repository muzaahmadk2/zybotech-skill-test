import { sendCartdata,removeCartData } from "../Store/cartSlice";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title,  price, image ,quantity,totalPrice,id} = props.item;

  const addItemHandler = () => {
    dispatch(sendCartdata({ id, title, price,image }));
  };
  const removeItemHandler = () => {
    dispatch(removeCartData(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice}{" "}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.image}>
        <img src={image}/>
      </div>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler} >-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;