import React from "react";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

const Call = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 text-lg">
      <div
        className="flex justify-evenly border-2 border-lite-purple rounded-lg py-14 lg:mx-10 dark:bg-dark-secondary"
        data-aos="flip-left"
      >
        <div className="flex items-center text-lite-purple dark:text-dark-text">
          <BsTelephoneFill className="text-3xl mb-3 ml-3" />
          <p className="hidden sm:block">تلفن تماس</p>
        </div>
        <div>
          <p className="text-lite-purple dark:text-dark-text">
            <bdo dir="ltr">+9801133221144</bdo>
          </p>
          <p className="text-lite-purple dark:text-dark-text">
            <bdo dir="ltr">+9801133221144</bdo>
          </p>
        </div>
      </div>
      <div
        className="flex justify-evenly items-center border-2 border-lite-purple rounded-lg py-14 lg:mx-10 sm:px-5 xl:px-0 dark:bg-dark-secondary"
        data-aos="flip-right"
      >
        <div className="flex items-center text-lite-purple dark:text-dark-text">
          <BsEnvelopeFill className="text-3xl text-lite-purple dark:text-dark-text mt-2 mb-3 ml-3" />
          <p className="hidden sm:block">ایمیل پژوهشگاه</p>
        </div>
        <div className="text-left">
          <p className="text-lite-purple mb-2 dark:text-dark-text">
            Sepehr.Sari@gmail.com
          </p>
          <p className="text-lite-purple dark:text-dark-text">
            Bahr.academy@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Call;
