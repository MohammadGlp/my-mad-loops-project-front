import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import editImg from "../../../Assets/img-user-panel/edit.png";
import { useSelector } from "react-redux";
import { toastifyToast } from "../../common/Toast/toast";
import { selectCurrentUser } from "./../../../store/auth/authSlice";
import { selectSessionCurrentUser } from "../../../store/auth/authSessionSlice";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import {
  useResetPasswordMutation,
  useForgetPasswordMutation,
} from "../../../store/auth/authApi";
import { useGetStudentByIdQuery } from "../../../store/studentManager/studentApi";

const EditPassword = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);
  const [userData, setUserData] = useState();
  const [ref, setRef] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    password: "",
    confirmPassword: "",
  });
  const {
    data: userById,
    isLoading,
    isFetching,
    refetch,
  } = useGetStudentByIdQuery({
    id: currentUser?._id || currentSessionUser?._id,
  });
  const [resetPassword] = useResetPasswordMutation();
  const [forgetPassword] = useForgetPasswordMutation();

  useEffect(() => {
    if (userById) {
      const getMountUser = async () => {
        await forgetPassword({ email: userById?.email });
      };
      getMountUser();
    }
  }, [ref]);

  useEffect(() => {
    refetch();
  }, [ref]);

  console.log(userById);

  const handleSubmit = (values) => {
    const editing = async () => {
      const response = await resetPassword({
        password: values.password,
        token: userById?.resetPasswordToken,
      });
      console.log(response);
      if (response.data) {
        toastifyToast.success(response.data.message[0].message);
        setRef((old) => !old);
        values.password = "";
        values.confirmPassword = "";
      } else {
        toastifyToast.warning("لطفا مجددا امتحان فرمایید");
        console.log("userData");
      }
    };

    editing();
  };

  const handleReset = (resetForm) => {
    toastifyToast.warning("تغییرات شما لغو شد");
    resetForm();
  };

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={editImg}
            className="rounded-t-xl w-full h-80 object-cover"
          />
        </div>

        <Formik
          initialValues={studentInfo}
          validationSchema={Yup.object({
            password: Yup.string()
              .required("لطفا رمز عبور خود را وارد کنید")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "باید شامل 8 نویسه، یک حروف بزرگ، یک عدد و یک نویسه خاص باشد"
              ),
            confirmPassword: Yup.string()
              .required("لطفا تکرار رمز عبور خود را وارد کنید")
              .oneOf(
                [Yup.ref("password"), null],
                "رمز عبور باید شبیه رمز عبور وارد شده باشد"
              ),
          })}
          onSubmit={handleSubmit}
        >
          {({ resetForm }) => (
            <Form>
              <div className="flex flex-col items-center mt-10 animate-[onLoadPanel_.5s_ease-in]">
                <InputFeild
                  classForm="flex flex-col items-start h-24"
                  label="رمز عبور جدید:"
                  name="password"
                  type="password"
                  id="password"
                  classInput="dark:bg-transparent focus:border-lite-purple dark:focus:border-lite-purple dark:text-white dark:border-gray-500 sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] bg-white rounded-md outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="رمز عبور جدید را وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1 m-auto sm:w-96 w-72"
                />
                <InputFeild
                  classForm="flex flex-col items-start mt-4 h-24"
                  label="تکرار رمز عبور جدید:"
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  classInput="dark:bg-transparent focus:border-lite-purple dark:focus:border-lite-purple dark:text-white dark:border-gray-500 sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] bg-white rounded-md outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="رمز عبور جدید را دوباره وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1 m-auto sm:w-96 w-72"
                />
              </div>
              <div className="text-center text-base sm:text-xl mt-10 animate-[onLoadPanel_1s_ease-in]">
                <button
                  className="border-2 border-lite-purple px-6 py-2 rounded-lg text-lite-purple mx-2
              hover:border-red-600 hover:text-red-600 transition ease-in-out duration-300"
                  onClick={() => handleReset(resetForm)}
                >
                  لغو تغییرات
                </button>
                <button
                  type="submit"
                  className="border-2 border-lite-purple bg-lite-purple px-6 py-2 rounded-lg text-white mx-2
                hover:bg-green-600 hover:border-green-600 hover:text-white transition ease-in-out duration-300"
                >
                  ثبت تغییرات
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditPassword;
