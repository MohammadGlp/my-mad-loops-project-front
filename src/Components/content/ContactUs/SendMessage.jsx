import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputGroup from "../../common/Inputs/TextInputs/InputGroup";
import Textarea from "../../common/Inputs/TextareaInputs/Textarea";
import { Button } from "../../common/button-component/button.component";
import { BsPerson, BsEnvelope, BsPhoneVibrate } from "react-icons/bs";
import { useContactUsMutation } from "../../../store/contactUs/contact-us-api-slice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./../../../store/auth/authSlice";
import { toastifyToast } from "../../common/Toast/toast";
import { selectSessionCurrentUser } from "../../../store/auth/authSessionSlice";

const SendMessage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);

  const [contact, setCantact] = useState({
    name:
      currentUser || currentSessionUser
        ? currentUser?.fullName || currentSessionUser?.fullName
        : "",
    email:
      currentUser || currentSessionUser
        ? currentUser?.email || currentSessionUser?.email
        : "",
    message: "",
    phone: "",
  });
  const [contactUs, { isSuccess, data, isError, error, isLoading }] =
    useContactUsMutation();

  useEffect(() => {
    if (isSuccess) {
      toastifyToast.success(data.message[0].message);
      setCantact({ name: "", email: "", message: "", phone: "" });
    }

    if (isError) {
      if (error.status === 400) {
        toastifyToast.error("احتمالا چیزی را اشتباه وارد کردید!");
      } else if (error.status === 401) {
        toastifyToast.error(error.data.message.message[0].message);
      } else if (error.status === 403) {
        toastifyToast.error(error.data.message.message[0].message);
      } else {
        toastifyToast.error(error.data.message.message[0].message);
      }
    }
  }, [isLoading]);

  const handleSubmit = async (values) => {
    if (currentUser || currentSessionUser) {
      await contactUs({
        text: values.message,
        name: values.name,
        email: values.email,
      });
    } else {
      await contactUs({
        text: values.message,
        name: values.name,
        email: values.email,
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={contact}
        validationSchema={
          !currentUser && !currentSessionUser
            ? Yup.object({
                name: Yup.string().required(
                  "لطفا فیلد نام و  نام خانوادگی را پر کنید"
                ),
                email: Yup.string()
                  .email("الگوی وارد شده صحیح نمی باشد")
                  .required("لطفا فیلد ایمیل را پر کنید"),
                phone: Yup.string()
                  .required("لطفا فیلد شماره تماس را پر کنید")
                  .matches(/^[0-9]+$/, "الگوی وارد شده صحیح نمی باشد")
                  .min(11, "تعداد ارقام شماره تلفن صحیح نیست")
                  .max(11, "تعداد ارقام شماره تلفن صحیح نیست"),

                message: Yup.string().required("لطفا پیغام خود را بنویسید"),
              })
            : Yup.object({
                message: Yup.string().required("لطفا پیغام خود را بنویسید"),
              })
        }
        onSubmit={handleSubmit}
      >
        <Form>
          <div
            className={
              !currentUser && !currentSessionUser
                ? "grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:gap-8 lg:gap-8 xl:mx-28 mt-5"
                : "w-8/12 mx-auto"
            }
          >
            {!currentUser && !currentSessionUser ? (
              <div>
                <div data-aos="fade-down">
                  <InputGroup
                    label="نام و نام خانوادگی"
                    name="name"
                    type="text"
                    icon={<BsPerson />}
                  />
                </div>
                <div data-aos="fade-left">
                  <InputGroup
                    label="ایمیل"
                    name="email"
                    type="text"
                    icon={<BsEnvelope />}
                  />
                </div>
                <div>
                  <InputGroup
                    label="شماره تماس"
                    type="text"
                    name="phone"
                    icon={<BsPhoneVibrate />}
                  />
                </div>
              </div>
            ) : null}
            <div data-aos="fade-right">
              <Textarea
                label="پیام"
                name="message"
                className="rounded-lg py-2 bg-[#F1F2F7] min-h-full outline-none w-full max-h-64 
                px-4 border-2 border-[#F1F2F7] focus:border-lite-purple focus:bg-white dark:bg-dark-secondary dark:text-gray-300"
              />
            </div>
          </div>
          <Button
            // data-aos="zoom-in-up"
            // data-aos-duration="1000"
            type="submit"
            classButton="border-2 rounded-lg text-base pt-3 pb-3 px-10 transition ease-out duration-300 border-lite-purple bg-lite-purple text-white
            hover:bg-lite-purple hover:border-lite-purple hover:shadow-md mx-auto block"
          >
            ارسال پیام
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default SendMessage;
