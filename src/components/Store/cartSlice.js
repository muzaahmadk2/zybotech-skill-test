import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((itm) => itm.id === item.id);
      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: +item.price,
          quantity: 1,
          totalPrice: item.price,
          image: item.image,
          title: item.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + item.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((itm) => itm.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((itm) => itm.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartdata = (cart) => {
  return async (dispatch, getState) => {
    let userId = localStorage.getItem("email");
    const state = getState();

    const sendRequest = async () => {
      const existingItem = state.cart.items.find((itm) => itm.id === cart.id);
      if (!existingItem) {
        cart.totalPrice = cart.price;
        cart.quantity = 1;
        const response = await fetch(
          `https://zybotech-f82af-default-rtdb.firebaseio.com/users/${userId}/cart/${cart.id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Sending Cart Data Failed..!");
        }
      } else {
        let t=existingItem.totalPrice;
        let q=existingItem.quantity;
        cart.quantity = q+1;
        cart.totalPrice = t+cart.price;
        const response = await fetch(
          `https://zybotech-f82af-default-rtdb.firebaseio.com/users/${userId}/cart/${cart.id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Sending Cart Data Failed..!");
        }
      }
    };

    try {
      await sendRequest();
      dispatch(cartAction.addItemToCart(cart));
    } catch (error) {
      alert(error.message);
    }
  };
};

export const fetchCartData = () => {
  let userId = localStorage.getItem("email");

  return async (dispatch,getState) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://zybotech-f82af-default-rtdb.firebaseio.com/users/${userId}/cart.json`
      );
      if (!response.ok) {
        throw new Error("fetch data failed..!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);

      let items = [];
      for (let i in cartData) {
        const item = cartData[i];
        // const existingItem = items.find((itm) => itm.id === item.id);
        // if (!existingItem) {
          items.push({
            id: item.id,
            price: +item.price,
            quantity: item.quantity,
            totalPrice: item.totalPrice,
            image: item.image,
            title: item.title,
          });
        // } else {
        //   existingItem.quantity++;
        //   existingItem.totalPrice = existingItem.totalPrice + item.price;
        // }
      }
      dispatch(
        cartAction.replaceCart({
          items: items || [],
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };
};

export const removeCartData = (id)=>{
  return async (dispatch,getState)=>{
    let userId = localStorage.getItem("email");
    const state = getState();

    const removeRequest = async ()=>{
      const existingItem = state.cart.items.find((itm) => itm.id === id);
      if(existingItem.quantity === 1){
        const response = await fetch(`https://zybotech-f82af-default-rtdb.firebaseio.com/users/${userId}/cart/${id}.json`,{
          method:"DELETE",
        });
        if(!response.ok){
          throw new Error("Deleting data failed..!");
        }
      }
      else{
        const cart = { ...existingItem};
        cart.quantity--;
        cart.totalPrice = cart.totalPrice - cart.price;
        const response = await fetch(
          `https://zybotech-f82af-default-rtdb.firebaseio.com/users/${userId}/cart/${id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Sending Cart Data Failed..!");
        }
      }
    }
    try {
      await removeRequest();
      dispatch(cartAction.removeItemFromCart(id));
    } catch (error) {
      alert(error.message);
    }
  }
}

export const cartAction = cartSlice.actions;
export default cartSlice;
