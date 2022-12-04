import axios from "axios";
// import { getItem } from "../storage/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.interceptors.response.use(
  (response) => {
    console.log("با موفقیت انجام شد");
    return response;
  },
  async (error) => {
    // check if error is expected from backend
    try {
      const expectedError =
        error.response &&
        error.response.state >= 400 &&
        error.response.status < 500;

      // if error doesnt expected when we log it
      if (!expectedError) {
        // tweak it later
        // get error message from backend (see object of response later... maybe its changed)
        try {
          console.log(error.response.data.message[0].message);
          toast.info(error.response.data.message[0].message, {});
        } catch (error) {}
      }
    } catch (error) {}
    return Promise.reject(error);
  }
);

// will send token to headers request ( in x-auth-token body )
// axios.interceptors.request.use((config) => {
//   config.headers["x-auth-token"] = getItem("token");
//   return config;
// });

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
    width: "330px",
    fontSize: "12px",
  }}
/>;

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
