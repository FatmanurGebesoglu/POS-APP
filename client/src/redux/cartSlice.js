import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

        if (findCartItem) {
            findCartItem.quantity++;
        }else{
            state.cartItems.push(action.payload);
        }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;