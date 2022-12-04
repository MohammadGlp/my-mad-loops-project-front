import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import Input from "../../common/Inputs/TextInputs/Input";
import { Button } from "../../common/button-component/button.component";
import zing from "../../../Assets/img-user-panel/zing.svg";
import cart from "../../../Assets/img-user-panel/cart.svg";
import cart2 from "../../../Assets/img-user-panel/cart2.svg";
import { selectCartCount } from "../../../store/cart/cartSlice";
import { useSelector } from "react-redux";

import { BsEyeFill } from "react-icons/bs";
import { RiNotificationBadgeFill, RiChatCheckFill } from "react-icons/ri";
import { CgMoreVertical } from "react-icons/cg";

const PanelHeader = ({ data, onSearch }) => {
  const counter = useSelector(selectCartCount);
  let location = useLocation();
  const navigate = useNavigate();

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const handleLeadSP = (value) => {
    const trimmedLead =
      value
        .substring(0, 60)
        .substring(0, value.substring(0, 60).lastIndexOf(" ")) + "...";
    return trimmedLead;
  };

  return (
    <div className="flex justify-end items-center py-5 lg:py-8 px-4 lg:px-2 animate-[onLoadPanel_.5s_ease-in]">
      <div className="basis-1/4">
        <Menu as="div" className="relative">
          <div className="mt-2 text-base absolute sm:-bottom-11 -bottom-8 xl:right-28 lg:right-[70px] md:right-12 sm:right-9">
            <Menu.Button>
              <img
                className="mr-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto hover:scale-125 transition ease-in-out duration-300"
                src={zing}
                alt="notification"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-50"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-50"
          >
            <Menu.Items className="absolute 2xl:-left-44 xl:-left-56 md:-left-60 sm:-left-64 -left-[234px] sm:w-96 w-[321px] z-50 sm:mt-16 mt-10 origin-top-right bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-dark-tertiary outline-none">
              <div class="block py-4 px-4 rounded-t-lg text-xl text-center text-gray-700 bg-gray-50 dark:bg-dark-tertiary dark:text-white">
                پیغام ها
                <div className="relative">
                  <Menu as="div">
                    <div className="mt-2 text-base absolute -bottom-11 xl:right-28 lg:right-[110px] md:right-28 sm:right-28 right-12">
                      <Menu.Button>
                        <CgMoreVertical className="w-6 h-6 absolute hover:text-gray-400 dark:hover:text-gray-400 duration-150 right-52 bottom-11" />
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-50"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-50"
                        >
                          <Menu.Items className="absolute sm:-left-64 -left-[255px] sm:w-64 w-[270px] z-50 -mt-5 origin-top-left bg-white dark:bg-dark-primary rounded-lg shadow-lg border border-gray-200 dark:border-dark-tertiary outline-none">
                            <Menu.Item className="z-50">
                              {({ active }) => (
                                <Link to="/user-panel/">
                                  <div
                                    href="#"
                                    class="flex py-3 px-3 w-full h-14 hover:bg-slate-200 rounded-lg dark:hover:bg-gray-800 group border-b dark:border-dark-tertiary"
                                  >
                                    <div class="flex-shrink-0">
                                      <div class="flex justify-center -mt-0.5 items-center w-9 h-9 rounded-full bg-gray-900 border border-white dark:border-gray-800">
                                        <RiChatCheckFill className="w-5 h-5 text-gray-100" />
                                      </div>
                                    </div>
                                    <div class="pr-3 w-full">
                                      <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                        <span class="text-lg text-gray-900 dark:text-white">
                                          علامت زدن همه به خوانده شده
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
              </div>
              <div className="text-right text-lg">
                <hr className="dark:border-dark-tertiary" />
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/user-panel/">
                      <div
                        href="#"
                        class="flex py-3 px-4 w-full sm:h-20 h-28 hover:bg-gray-100 dark:hover:bg-gray-700 group border-b dark:border-dark-tertiary"
                      >
                        <div class="flex-shrink-0">
                          <div class="flex justify-center mt-1.5 items-center w-11 h-11 rounded-full bg-gray-700 border border-white dark:border-gray-800">
                            <RiNotificationBadgeFill className="w-5 h-5 text-gray-100" />
                          </div>
                        </div>
                        <div class="pr-3 w-full">
                          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            <span class="font-semibold text-lg text-gray-900 dark:text-white">
                              {handleLeadSP(
                                "خبر جدید برای تست کردن لیست باکس نوتیفیکیشن"
                              )}
                            </span>
                          </div>
                          <div class="text-sm text-lite-purple font-mono group-hover:text-gray-400">
                            10 دقیقه پیش
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/user-panel/myCourses">
                      <div
                        href="#"
                        class="flex py-3 px-4 w-full sm:h-20 h-28 hover:bg-gray-100 dark:hover:bg-gray-700 group border-b dark:border-dark-tertiary"
                      >
                        <div class="flex-shrink-0">
                          <div class="flex justify-center mt-1.5 items-center w-11 h-11 rounded-full bg-gray-700 border border-white dark:border-gray-800">
                            <RiNotificationBadgeFill className="w-5 h-5 text-gray-100" />
                          </div>
                        </div>
                        <div class="pr-3 w-full">
                          <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            <span class="font-semibold text-lg text-gray-900 dark:text-white">
                              {handleLeadSP(
                                "دوره اکبر اصغر نژاد اسموس کلایی موجود شد"
                              )}
                            </span>
                          </div>
                          <div class="text-sm text-lite-purple font-mono group-hover:text-gray-400">
                            همین الان
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                <hr className="dark:border-dark-tertiary" />
                <Menu.Item>
                  {({ active }) => (
                    <div className="relative group">
                      <BsEyeFill className="w-4.5 h-4.5 mr-2 absolute sm:right-[118px] right-[88px] top-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 duration-150" />
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 dark:bg-dark-primary text-gray-900 duration-150"
                            : "text-gray-700",
                          "block w-full py-4 px-4 rounded-b-lg text-xl text-center text-gray-700 bg-gray-50 dark:bg-dark-tertiary dark:text-white"
                        )}
                      >
                        مشاهده همه
                      </button>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="basis-1/2">
        {location.pathname === "/user-panel" ? (
          <p className="text-3xl md:text-4xl xl:text-5xl text-center font-bold text-lite-purple dark:text-dark-primary-title">
            داشبورد
          </p>
        ) : (
          <Formik
            initialValues={{ search: "" }}
            onSubmit={(values) => {
              onSearch(
                data
                  ?.map((data) => data)
                  .filter(
                    (course) =>
                      course.title
                        .toString()
                        .toLowerCase()
                        .indexOf(values.search) > -1
                  )
              );
            }}
          >
            <Form>
              <Input
                name="search"
                type="search"
                placeholder="دوره مورد نظر.."
                err={true}
                className="border-2 mb-3 dark:border-gray-600 dark:text-gray-400 rounded-lg outline-0 w-full text-sm sm:text-lg py-1 md:py-2 px-2 focus:border-lite-purple
                  dark:focus:border-lite-purple duration-300 dark:bg-transparent"
              />
              <Button
                ButtonType="submit"
                classButton="border-2 rounded-lg w-full py-1 md:py-2 px-2 border-lite-purple text-lite-purple hover:text-white hover:bg-lite-purple
                transition ease-out duration-300 dark:bg-lite-purple dark:text-dark-primary-title dark:hover:border-deep-purple dark:hover:bg-deep-purple"
              >
                جست و جو
              </Button>
            </Form>
          </Formik>
        )}
      </div>
      {counter === 0 ? (
        <div className="basis-1/4" onClick={() => navigate("/cart")}>
          <img
            src={cart2}
            className="mr-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto hover:scale-125 transition ease-in-out duration-300"
          />
        </div>
      ) : (
        <div className="basis-1/4" onClick={() => navigate("/cart")}>
          <img
            src={cart}
            className="mr-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto hover:scale-125 transition ease-in-out duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default PanelHeader;
