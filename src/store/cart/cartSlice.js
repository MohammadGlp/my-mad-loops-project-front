import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toastifyToast } from "./../../Components/common/Toast/toast";

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload?._id
      );
      if (existingCartItem) {
        toastifyToast.warning("دوره از قبل در سبد خرید شما موجود است!");
      } else {
        state.cartItems.push(action.payload);
        toastifyToast.success("دوره به سبد خرید شما اضافه شد");
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    resetItem: (state) => {
      state.cartItems = [];
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  selectCartReducer,
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  selectCartReducer,
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
  selectCartItems,
  (cartItems) => cartItems.length
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.cost, 0)
);

export const { addItem, removeItem, resetItem, setIsCartOpen } =
  cartSlice.actions;

export default cartSlice.reducer;
