import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section>
      <div className="container m-auto">
        <div className="lg:flex lg:justify-evenly lg:mb-0 mb-10">
          <div className="xl:w-2/6 lg:w-3/6">
            <img
              src={require("../../Assets/NotFoundImg.png")}
              className="w-full h-full"
              alt="NotFound"
            />
          </div>
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-6xl text-black">صفحه مورد نظر پیدا نشد.</h1>
            <p className="text-base text-gray-600 mt-5">
              صفحه ای که دنبالش هستید پیدا نشده است. ممکن است صفحه حذف یا تغییر
              کرده باشد.
            </p>
            <div className="bg-deep-purple hover:bg-white transition duration-500 ease-in-out group rounded-md mt-5 lg:w-11/12 w-8/12 mx-auto">
              <Link
                className="inline-block p-4 text-xl w-full text-white group-hover:text-deep-purple"
                to="/"
              >
                بازگشت به خانه
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
