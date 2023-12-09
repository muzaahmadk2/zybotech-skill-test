import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((itm) => itm.id === item.id);
      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: +item.price,
          quantity: 1,
          totalPrice: item.price,
          image:item.image,
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
export const cartAction = cartSlice.actions;
export default cartSlice;
