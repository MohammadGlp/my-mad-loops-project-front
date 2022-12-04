import React, { useEffect, useCallback, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "../button-component/button.component";
import InputGroup from "../../common/Inputs/TextInputs/InputGroup";
import Textarea from "../../common/Inputs/TextareaInputs/Textarea";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const LandingModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    from: {
      duration: 300,
    },

    to: {
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    },
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="w-full h-screen z-40 fixed flex justify-center top-0 right-0 bg-gray-800 bg-opacity-80"
        >
          <animated.div style={animation}>
            <div className="bg-white dark:bg-dark-primary lg:w-[800px] md:w-[700px] sm:w-[600px] w-[500px] sm:h-fit h-[675px] relative sm:top-32 top-0 sm:rounded-xl">
              <div className="grid grid-cols-2 w-full h-full">
                <div className="col-span-2 sm:h-24 h-9 relative">
                  <div
                    className="border-4 border-t-0 text-lg rounded-b-xl border-gray-800 border-opacity-80 px-10 py-2 top-0 
                    lg:right-80 md:right-64 sm:right-52 sm:block hidden absolute"
                  >
                    <h2 className="dark:text-gray-400">مشاوره تخصصی</h2>
                  </div>
                  <Button
                    classButton="sm:text-3xl sm:bg-transparent sm:p-0 py-1 pl-5 pr-6 rounded-bl-xl bg-red-500 text-xl text-red-900 sm:hover:text-red-500 hover:text-white sm:m-8 duration-300 font-bold"
                    aria-label="Close Modal"
                    onClick={() => setShowModal((prev) => !prev)}
                  >
                    X
                  </Button>
                </div>
                <div className="col-span-2">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                    }}
                    validationSchema={Yup.object({
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

                      message: Yup.string().required(
                        "لطفا پیغام خود را بنویسید"
                      ),
                    })}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    <Form>
                      <div className="grid grid-cols-1 sm:grid-cols-2 px-5 sm:gap-5 md:gap-8 lg:gap-8 xl:mx-28">
                        <div>
                          <InputGroup
                            label="نام و نام خانوادگی"
                            name="name"
                            type="text"
                            placeholder="نام خود را وارد کنید..."
                          />
                          <InputGroup
                            label="ایمیل"
                            name="email"
                            type="text"
                            placeholder="نمونه : example@gmail.com"
                          />
                          <InputGroup
                            label="شماره تماس"
                            type="text"
                            name="phone"
                            placeholder="9203 458 911"
                          />
                        </div>
                        <div>
                          <Textarea
                            label="پیام"
                            name="message"
                            placeholder="لطفا پیام خود را درج کنید..."
                            className="rounded-lg py-2 bg-[#F1F2F7] dark:bg-dark-secondary dark:text-gray-300 outline-none w-full min-h-full max-h-64 px-4 border-2 border-[#F1F2F7] dark:border-dark-tertiary focus:border-lite-purple dark:focus:border-lite-purple focus:bg-white duration-200"
                          />
                        </div>
                      </div>
                      <Button
                        ButtonType="submit"
                        classButton="sm:relative left-0 top-0 absolute border-2 sm:rounded-lg rounded-br-lg text-lg pt-2 pb-2 mb-3 px-10 ease-in-out duration-300 border-[#8055D9] bg-[#8055D9] text-white
                        hover:bg-[#673CC0] hover:border-[#673CC0] dark:text-dark-primary hover:button-shadow dark:hover:shadow-purple duration-300 ease-in-out mx-auto block"
                      >
                        ارسال پیام
                      </Button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default LandingModal;
