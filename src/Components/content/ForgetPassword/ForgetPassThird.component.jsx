import React from "react";
import { Button } from "./../../common/button-component/button.component";
import { BsChevronRight } from "react-icons/bs";
import { FaChevronCircleRight } from "react-icons/fa";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const ForgetPassThirdPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <div className="flex flex-col w-full h-full dark:bg-dark-primary">
      <div className="animate-[onLoadAnim_1.5s_ease-in-out]">
        <div className="sm:flex sm:justify-start flex justify-center mt-6">
          <Link to="/login">
            <Button classButton="flex items-center text-[#555555] dark:text-[#B7B7B7]">
              <BsChevronRight className="w-8 text-black dark:text-white text-xl" />
              برگشت به صفحه ورود
            </Button>
          </Link>
        </div>
        <div className="mx-auto text-center mt-7">
          <FieldName
            showH2
            showP
            title="رمز عبور جدیدتو وارد کن"
            field="توجه ! رمز عبور جدید نباید با رمز عبور پیشین یکسان باشد"
            classH2Field="text-black dark:text-white sm:text-6xl text-5xl"
            classPfield="text-[#8D8D8D] text-xl mt-2"
          />
        </div>
        <div className="dark:hidden mx-auto mt-10 mb-5 flex justify-center">
          <img
            src={
              require("../../../Assets/img-auth/key-forget-auth.svg").default
            }
            className="w-20"
            alt=""
          />
        </div>
        <div className="dark:flex mx-auto mt-10 mb-5 hidden justify-center">
          <img
            src={
              require("../../../Assets/img-auth/key2dark.svg").default
            }
            className="w-20"
            alt=""
          />
        </div>
        <Formik
          initialValues={props.data}
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
          {({ values }) => (
            <Form>
              <div className="flex flex-col items-center">
                <InputFeild
                  classForm="flex flex-col items-start h-24"
                  label="رمز عبور جدید:"
                  name="password"
                  type="password"
                  id="password"
                  classInput="dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="رمز عبور جدید را وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1 m-auto w-96"
                />
                <InputFeild
                  classForm="flex flex-col mt-4 h-24"
                  label="تکرار رمز عبور جدید:"
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  classInput="dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="رمز عبور جدید را دوباره وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1"
                />
              </div>
              <div className="mt-2 h-14 flex justify-center">
                <Button
                  className="bg-button-purple text-white sm:w-96 w-80 text-xl h-12 mt-4 text-center rounded-xl hover:button-shadow dark:hover:shadow-purple duration-300 ease-in-out"
                  ButtonType="submit"
                >
                  بازنشانی رمز عبور
                </Button>
              </div>
              <div className="mt-4 m-auto sm:pl-80 pl-64 w-fit">
                <Button
                  className="flex items-center mr-14 dark:text-[#B7B7B7]"
                  onClick={() => props.prev(values)}
                >
                  <FaChevronCircleRight
                    className="w-8 text-[#555555] dark:text-[#B7B7B7]
                  rounded-full text-base"
                  />
                  برگشت به مرحله قبل
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgetPassThirdPage;
