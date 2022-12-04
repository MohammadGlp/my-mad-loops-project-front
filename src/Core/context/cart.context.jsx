import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearAllCartItems = (cartItems, clearList) =>
  cartItems.filter((cartItem) => cartItem.id === clearList.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  AddItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const Cart = {
  TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Cart.TOGGLE_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case Cart.SET_CART_ITEMS:
      return { ...state, ...payload };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItems = (newCartItem) => {
    const newTotalCount = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newTotalPrice = newCartItem.reduce(
      (counter, cartItem) => counter + Number(cartItem.price),
      0
    );

    dispatch({
      type: Cart.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItem,
        cartCount: newTotalCount,
        cartTotal: newTotalPrice,
      },
    });
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: Cart.TOGGLE_CART_OPEN, payload: bool });
  };

  const AddItemToCart = (productToAdd) => {
    updateCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    updateCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearCart = (clearList) => {
    updateCartItems(clearAllCartItems(cartItems, clearList));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    AddItemToCart,
    removeItemFromCart,
    clearCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
