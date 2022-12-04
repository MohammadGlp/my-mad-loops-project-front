import React, { useState } from "react";
import CartTable from "./cart-table.component";
import { Button } from "./../../common/button-component/button.component";
import { resetItem, selectCartTotalPrice } from "../../../store/cart/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "./../../../store/auth/authSlice";
import { selectSessionCurrentUser } from "./../../../store/auth/authSessionSlice";
import { useNavigate } from "react-router-dom";
import Modal from "../../common/Modal/modal.component";

const CartPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotalPrice);
  const clearCartItem = () => dispatch(resetItem());

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="dark:bg-dark-primary w-full h-fit">
      <div className="py-12">
        <div className="w-[95%] m-auto border-2 dark:border-dark-tertiary rounded-lg dark:bg-dark-secondary">
          <CartTable />
          <div className="sm:flex w-full justify-between dark:bg-dark-secondary bg-[#f8f8f8] rounded-lg">
            <div className="font-bold text-deep-purple dark:text-lite-purple text-xl p-5">
              <span className="text-black dark:text-gray-400">
                قیمت کل محصولات:
              </span>
              {cartTotal} تومان
            </div>
            <div className="sm:flex">
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                click={clearCartItem}
              />
              <Button
                onClick={openModal}
                className="sm:w-fit w-2/5 btn btn-danger rounded-none sm:rounded-none rounded-br-md md:text-2xl text-lg sm:text-xl h-full dark:text-dark-primary"
              >
                حذف همه
              </Button>
              {currentUser || currentSessionUser ? (
                <Button
                  onClick={() => navigate("/user-panel/myCourses")}
                  className="sm:w-fit w-3/5 btn btn-primary rounded-none md:text-2xl sm:text-xl text-lg h-full rounded-bl-md dark:text-dark-primary"
                >
                  مشاهده دوره ها
                </Button>
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                  className="sm:w-fit w-3/5 btn btn-primary rounded-none md:text-2xl sm:text-xl text-lg h-full rounded-bl-md dark:text-dark-primary"
                >
                  ورود و دیدن دوره ها
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
