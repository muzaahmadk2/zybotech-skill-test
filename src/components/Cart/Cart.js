import NavBar from "../navbar/navbar";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className={classes.container}>
      <NavBar/>
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
          key={item.title}
            item={{
              id:item.id,
              title: item.title,
              price: item.price,
              quantity:item.quantity,
              totalPrice:item.totalPrice,
              image:item.image,
            }}
          />
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Cart;