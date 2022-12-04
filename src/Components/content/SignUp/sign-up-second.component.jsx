import React from "react";
import { Button } from "./../../common/button-component/button.component";
import { BsChevronRight } from "react-icons/bs";
import { FaChevronCircleRight } from "react-icons/fa";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import PhoneNumberField from "../../common/Inputs/InputPhoneNumber.component";
import CustomDatePicker from "../../common/Date-Picker/date-picker-component";

const SignUpSecondPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="flex flex-col w-full h-full dark:bg-dark-primary">
      <div className="animate-[onLoadAnim_1.5s_ease-in-out]">
        <div className="flex justify-start mt-6">
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
            title="ثبت اطلاعات شخصی"
            field="اطلاعات شخصی خود را ثبت کنید !"
            classH2Field="text-black sm:text-6xl text-5xl dark:text-white"
            classPfield="text-[#8D8D8D] text-xl mt-2"
          />
        </div>

        <Formik
          initialValues={props.data}
          validationSchema={Yup.object({
            nationalId: Yup.string()
              .required("لطفا فیلد کد ملی را پر کنید")
              .matches(/^[0-9]+$/, "الگوی وارد شده صحیح نمی باشد")
              .min(10, "تعداد ارقام کد ملی صحیح نیست")
              .max(10, "تعداد ارقام کد ملی صحیح نیست"),

            phoneNumber: Yup.string()
              .required("شماره تماس را وارد کنید")
              .matches(
                /^(0|0098|\+98|98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,
                "شماره تلفن صحیح نیست"
              ),

            birthDate: Yup.string()
              .required("لطفا فیلد تاریخ تولد را پر کنید")
              .nullable(),
          })}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <div className="flex flex-col items-center mt-14">
                <InputFeild
                  classForm="flex flex-col items-start h-24"
                  label="شماره ملی:"
                  name="nationalId"
                  type="text"
                  id="nationalId"
                  classInput="dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="شماره ملی خود را وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1"
                />
                <PhoneNumberField
                  classInput="dark:input-dark"
                  classForm="flex flex-col mt-2 h-24"
                  label="شماره همراه:"
                  name="phoneNumber"
                  type="tel"
                  classLabel="text-xl mb-2 dark:text-white"
                  dropdownClass="bottom-full absolute dark:input-secondary dark:text-gray-600"
                  classError="text-red-500 h-[20px] mt-1 mr-1"
                />
                <CustomDatePicker
                  classForm="flex flex-col mt-2 h-24"
                  label="تاریخ تولد:"
                  name="birthDate"
                  className="ltr dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="1401/06/12"
                />
              </div>
              <div className="mt-2 h-14 flex justify-center">
                <Button
                  className="bg-button-purple text-white sm:w-96 w-80 text-xl h-12 mt-3 text-center rounded-xl hover:button-shadow dark:hover:shadow-purple duration-300 ease-in-out"
                  ButtonType="submit"
                >
                  ادامه
                </Button>
              </div>
              <div className="mt-3 m-auto sm:pl-80 pl-64 w-fit">
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

export default SignUpSecondPage;
