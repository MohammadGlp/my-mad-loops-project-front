import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../button-component/button.component";
import Input from "../Inputs/TextInputs/Input";
import Textarea from "../Inputs/TextareaInputs/Textarea";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/auth/authSlice";
import { useContactUsMutation } from "../../../store/contactUs/contact-us-api-slice";
import { toastifyToast } from "../Toast/toast";
import { selectSessionCurrentUser } from "./../../../store/auth/authSessionSlice";

const OffersForm = () => {
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
  });
  const [contactUs, { isSuccess, data, isError, error, isLoading }] =
    useContactUsMutation();

  useEffect(() => {
    if (isSuccess) {
      toastifyToast.success(data.message[0].message);
      setCantact("");
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
    <div className="form py-2 md:bg-transparent bg-gray-200 dark:bg-transparent shadow-md">
      {!currentUser || !currentSessionUser ? (
        <label htmlFor="email" className="dark:text-dark-primary-title">
          ایمیل:
        </label>
      ) : null}
      <Formik
        initialValues={contact}
        validationSchema={
          !currentUser && !currentSessionUser
            ? Yup.object({
                email: Yup.string()
                  .email("الگوی وارد شده صحیح نمی باشد")
                  .required("لطفا فیلد ایمیل را پر کنید"),
                message: Yup.string().required("لطفا پیغام خود را بنویسید"),
              })
            : Yup.object({
                message: Yup.string().required("لطفا پیغام خود را بنویسید"),
              })
        }
        onSubmit={handleSubmit}
      >
        <Form>
          {!currentUser && !currentSessionUser ? (
            <Input
              name="email"
              placeholder="ایمیل خود را وارد کنید.."
              type="text"
              className="rounded-lg mt-1 py-2 px-2 border border-gray-400 hover:border-lite-purple bg-transparent input w-full"
            />
          ) : null}
          <Textarea
            name="message"
            placeholder="متن خود را وارد کنید..."
            className="rounded-lg py-2 px-2 mt-2 min-h-full max-h-56 border border-gray-400 hover:border-lite-purple bg-transparent input"
          />
          <Button
            type="submit"
            classButton="btn btn-primary w-full text-lg mb-1 pb-1"
          >
            ارسال
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default OffersForm;
