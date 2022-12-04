import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastifyToast = toast;
const Toastify = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      style={{
        width: "350px",
        fontSize: "18px",
        fontFamily: "roya",
      }}
    />
  );
};

export default Toastify;
