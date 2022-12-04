import React, { Fragment } from "react";
import { FiChevronLeft, FiLogOut } from "react-icons/fi";
import {
  BsFillBookmarkHeartFill,
  BsFillLayersFill,
  BsChatTextFill,
} from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStorage } from "../../Core/services/storage/storage";
import { logOut, selectCurrentUser } from "../../store/auth/authSlice";
import {
  selectSessionCurrentUser,
  logOutSession,
} from "../../store/auth/authSessionSlice";
import { useGetStudentByIdQuery } from "../../store/studentManager/studentApi";
import { useEffect, useState } from "react";
import { Button } from "../common/button-component/button.component";
import { useGetEmployeeQuery } from "../../store/teacherManager/teacherApiSlice";

const NavigationChange = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const { data: admin, isLoading: isLoad } = useGetEmployeeQuery({
    id: currentUser?._id,
  });
  const { data: userById, isLoading } = useGetStudentByIdQuery({
    id: currentUser?._id || currentSessionUser?._id,
  });

  useEffect(() => {
    if (currentUser?.role === "admin" || currentUser?.role === "teacher") {
      setUserData(admin);
    } else {
      setUserData(userById);
    }
  }, [isLoading, isLoad]);

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const handleGoPanel = () => {
    if (currentUser?.role === "admin" || currentUser?.role === "teacher") {
      dispatch(logOut(currentUser));
      window.location.href = `http://localhost:2001/home`;
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="mt-2 text-base">
        <Menu.Button className="inline-flex justify-center w-full text-gray-700 bg-gray-200 dark:bg-dark-tertiary hover:scale-105 rounded-lg shadow-sm outline-none duration-150">
          <img
            className="ml-2 w-12 h-12 rounded-r-lg"
            src={
              userData?.role === "admin" || userData?.role === "teacher"
                ? userData?.profile
                : userData?.profile
            }
            alt="profile"
          />
          <FiChevronLeft className="w-4 h-4 -rotate-90 mt-4 ml-2 dark:text-gray-400" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-90"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-90"
      >
        <Menu.Items className="absolute sm:left-0 -left-28 sm:w-64 w-[304px] mt-3 origin-top-left bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-dark-tertiary focus:outline-none">
          <div className="text-right text-lg">
            <Menu.Item>
              {({ active }) => (
                <Button
                  classButton="w-full text-right"
                  onClick={
                    userData?.role === "student"
                      ? () => navigate("/user-panel")
                      : handleGoPanel
                  }
                >
                  <div>
                    <FiChevronLeft className="w-5 h-5 ml-2 absolute left-2 top-7 dark:text-gray-400" />
                    <div
                      className={classNames(
                        active
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-900"
                          : "text-gray-700",
                        "block px-5 py-6 text-xl rounded-t-lg dark:text-gray-400"
                      )}
                    >
                      {userData?.role === "admin" ||
                      userData?.role === "teacher"
                        ? userData?.fullName
                        : userData?.fullName}
                    </div>
                  </div>
                </Button>
              )}
            </Menu.Item>
            <hr className="py-1 dark:border-dark-tertiary" />
            {userData?.role === "student" ? (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/user-panel/myCourses">
                      <div className="relative group">
                        <BsFillLayersFill className="w-5 h-5 ml-2 absolute right-5 top-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 duration-150" />
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 dark:bg-gray-700 text-gray-900"
                              : "text-gray-700",
                            "block px-14 py-3 dark:text-gray-400"
                          )}
                        >
                          دوره های من
                        </div>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/user-panel/bookmark">
                      <div className="relative group">
                        <BsFillBookmarkHeartFill className="w-5 h-5 ml-2 absolute right-5 top-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300  duration-150" />
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 dark:bg-gray-700 text-gray-900"
                              : "text-gray-700",
                            "block px-14 py-3 dark:text-gray-400"
                          )}
                        >
                          علاقه مندی ها
                        </div>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                {/* <Menu.Item>
                  {({ active }) => (
                    <Link to="/">
                      <div className="relative group">
                        <BsChatTextFill className="w-5 h-5 ml-2 absolute right-5 top-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300  duration-150" />
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 dark:bg-gray-700 text-gray-900"
                              : "text-gray-700",
                            "block px-14 py-3 dark:text-gray-400"
                          )}
                        >
                          نقد و نظرات
                        </div>
                      </div>
                    </Link>
                  )}
                </Menu.Item> */}
                <hr className="mt-2 dark:border-dark-tertiary" />
              </>
            ) : null}

            <Menu.Item>
              {({ active }) => (
                <div className="relative group">
                  <FiLogOut className="w-5 h-5 ml-2 absolute right-5 top-6 text-red-500 group-hover:text-red-600 dark:group-hover:text-gray-300 duration-150" />
                  <button
                    onClick={() => {
                      dispatch(logOut(userData));
                      dispatch(logOutSession(userData));
                      clearStorage();
                    }}
                    type="submit"
                    className={classNames(
                      active
                        ? "bg-gray-100 dark:bg-red-900 text-gray-900"
                        : "text-gray-700",
                      "block w-full text-right px-14 py-5 text-red-500 group-hover:text-red-600 dark:group-hover:text-gray-300 rounded-b-lg"
                    )}
                  >
                    خروج
                  </button>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavigationChange;
