import React from "react";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectIsCartOpen,
  setIsCartOpen,
} from "../../../store/cart/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CartHover = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <div
      className="md:grid hidden w-96 h-fit dark:border-white-secondary border dark:border-dark-tertiary fixed top-[56px] left-48 z-40 rounded-lg"
      style={{
        opacity: !isCartOpen ? "0" : "1",
        visibility: !isCartOpen ? "hidden" : "visible",
        display: !isCartOpen ? "none" : "grid",
        transition: "all ease-in 200ms",
      }}
      onMouseEnter={() => dispatch(setIsCartOpen(isCartOpen))}
      onMouseLeave={() => dispatch(setIsCartOpen(!isCartOpen))}
    >
      {cartItems?.map((item) => {
        return (
          <div
            className="w-full h-full flex border-b dark:border-dark-tertiary dark:bg-dark-secondary bg-white p-2 rounded-t-lg"
            key={item._id}
          >
            <div className="w-20 p-2 h-20 my-auto">
              <img src={item.lesson.image} className="w-full h-full" />
            </div>
            <div className="flex flex-col my-auto mr-4">
              <h1 className="dark:text-gray-100">{item.title}</h1>
              <h4 className="dark:text-gray-400">{item.teacher.fullName}</h4>
              <p className="dark:text-gray-500">{item.cost}تومان</p>
            </div>
          </div>
        );
      })}

      {cartItems?.length === 0 ? (
        <div className="w-full h-full text-center font-bold bg-white relative">
          <img
            className=""
            src={require("../../../Assets/img/cart-emptybg.JPG")}
            alt=""
          />
          <h2 className="absolute text-deep-purple bottom-12 right-16 text-3xl">
            سبد خرید شما خالی است
          </h2>
        </div>
      ) : (
        <Link
          className="text-center w-full h-fit text-2xl p-3 dark:text-dark-primary dark:bg-gray-500 text-white cursor-pointer rounded-b-lg bg-[#00bfd6]"
          to="/cart"
        >
          مشاهده سبد خرید
        </Link>
      )}
    </div>
  );
};

export default CartHover;
