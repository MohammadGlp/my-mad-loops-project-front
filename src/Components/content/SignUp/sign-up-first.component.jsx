import React from "react";
import { Button } from "./../../common/button-component/button.component";
import { BsChevronRight } from "react-icons/bs";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignUpFirstPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="flex flex-col w-full h-full dark:bg-dark-primary">
      <div className="animate-[onLoadAnim_1.5s_ease-in-out]">
        <div className="flex mt-6 justify-start">
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
            title="ثبت اطلاعات عمومی"
            field="اطلاعات عمومی خود را ثبت کنید !"
            classH2Field="text-black sm:text-6xl text-5xl dark:text-white"
            classPfield="text-[#8D8D8D] text-xl mt-2"
          />
        </div>

        <Formik
          initialValues={props.data}
          validationSchema={Yup.object({
            firstName: Yup.string().required("لطفا فیلد نام را پر کنید"),

            lastName: Yup.string().required(
              "لطفا فیلد نام خانوادگی را پر کنید"
            ),
            email: Yup.string()
              .email("الگوی وارد شده صحیح نمی باشد")
              .required("لطفا فیلد ایمیل را پر کنید"),
          })}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="flex flex-col items-center mt-14">
                <InputFeild
                  classForm="flex flex-col items-start h-28"
                  label="نام:"
                  name="firstName"
                  type="text"
                  id="firstName"
                  classInput="dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="نام خود را وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1"
                />
                <InputFeild
                  classForm="flex flex-col mt-2 h-28"
                  label="نام خانوادگی:"
                  name="lastName"
                  type="text"
                  id="lastName"
                  classInput="dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="نام خانوادگی خود را وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1"
                />
                <InputFeild
                  classForm="flex flex-col mt-2 h-28"
                  label="ایمیل:"
                  name="email"
                  type="text"
                  id="email"
                  classInput="dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="نمونه : example@gmail.com"
                  classError="text-red-500 h-[20px] mb-1"
                />
              </div>
              <div className="mt-2 h-14 flex justify-center">
                <Button
                  className="bg-button-purple text-white sm:w-96 w-80 text-xl h-12 mt-1 text-center rounded-xl hover:button-shadow dark:hover:shadow-purple duration-300 ease-in-out"
                  ButtonType="submit"
                >
                  ادامه
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpFirstPage;
