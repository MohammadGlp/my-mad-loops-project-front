import React from "react";
import LandingTitle from "../../common/LandingTitle/LandingTitle";
import OffersForm from "../../common/OffersForm/OffersForm";
import offers from "../../../Assets/img/offerss.svg";

const LandingOffers = () => {
  return (
    <>
      <section className="dark:bg-dark-secondary md:bg-gray-300 pb-10">
        <div className="container mx-auto">
          <div data-aos="fade-down">
            <LandingTitle title="پیشنهادات و انتقادات" className="pt-20 mb-10">
              می توانید در باکس زیر پیشنهاد خود را وارد کنید
            </LandingTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center" data-aos="zoom-in-down">
              <OffersForm />
            </div>
            <div className="hidden md:block">
              <img className="w-96 py-14" data-aos="fade-up" src={offers}  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingOffers;
