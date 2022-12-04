import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import { Button } from "./../../common/button-component/button.component";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useSwiperRef from "./../Landing-Blog/swiper-wrapper-button";
import { useNavigate } from "react-router-dom";
import "./swi.styles.scss";
import { useGetAllTeachersQuery } from "../../../store/teacherManager/teacherApiSlice";

SwiperCore.use([Autoplay, Navigation]);

const LandingTeacher = () => {
  const { data, isLoading } = useGetAllTeachersQuery();
  const handleLead = (value) => {
    const trimmedLead =
      value
        .substring(0, 100)
        .substring(0, value.substring(0, 100).lastIndexOf(" ")) + "...";
    return trimmedLead;
  };

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  const navigate = useNavigate();
  return (
    <section className="dark:bg-dark-primary pb-10">
      <div className="container m-auto">
        <div className="text-center pt-16" data-aos="fade-down">
          <FieldName
            showH2
            showP
            classH2Field="text-neutral-900 font-bold sm:text-3xl text-xl mr-4 dark:text-dark-primary-title"
            title="اساتید برتر"
            classPfield="text-slate-400 sm:text-base text-xs mt-2 dark:text-dark-text"
            field="با اساتید برتر آشنا شوید."
          />
        </div>
        <Swiper
          data-aos="zoom-in-up"
          className="swiper-v mt-10"
          autoplay={{
            delay: 3000,
          }}
          slidesPerView={2}
          initialSlide={2}
          grabCursor={true}
          freeMode={true}
          roundLengths={true}
          navigation={{
            nextEl,
            prevEl,
          }}
          centerInsufficientSlides={true}
          centeredSlides={true}
        >
          {data?.result.map((item) => (
            <SwiperSlide className="flex my-auto" key={item._id}>
              {({ isActive, isPrev, isNext }) =>
                isActive ? (
                  <div className="grid lg:grid-cols-2 rounded-xl bg-[#F4F5F9] dark:bg-dark-secondary">
                    <div className="sm:mr-6 p-3 sm:ml-8 lg:ml-0">
                      <div className="flex sm:justify-between justify-center">
                        <h2 className="text-xl my-5 sm:block lg:hidden hidden dark:text-dark-primary-title">
                          {item.fullName}
                        </h2>
                        <div className="md:mr-14 lg:hidden sm:block cursor-pointer">
                          <img
                            src={item.profile}
                            className="rounded-full sm:block lg:hidden sm:w-16 w-24 mt-5"
                          />
                        </div>
                      </div>

                      <h2 className="sm:text-xl text-base xl my-5 ml-2 lg:block sm:hidden dark:text-dark-primary-title">
                        {item.fullName}
                      </h2>

                      <h4 className="sm:text-base text-sm text-[#615C67] dark:text-dark-secondary-title">
                        {item.email}
                      </h4>
                      <p className="sm:text-sm text-xs mt-2 text-[#4A4453] dark:text-dark-text">
                        {item.phoneNumber}
                      </p>
                      <Button
                        onClick={() => navigate(`teacher/${item._id}`)}
                        classButton="text-white bg-[#5DC8B2] w-20 rounded-lg p-2 mt-16 hover:scale-110 transition-transform ease-in duration-150 "
                      >
                        بیشتر
                      </Button>
                    </div>

                    <div className="relative 2xl:left-6 xl:left-12 left-6 lg:block sm:hidden lg:mb-5 z-0">
                      <img
                        src={item.profile}
                        className="rounded-full xl:w-52 lg:w-44 sm:w-16 2xl:mx-36 xl:mx-28 lg:mx-16 mt-10 z-10 lg:block hidden"
                      />
                      <div className="lg:block hidden">
                        <img
                          src={require("../../../Assets/Ellipse 3.svg").default}
                          className="xl:w-28 lg:w-24 2xl:absolute 2xl:top-36 2xl:right-32 xl:absolute xl:top-36 xl:right-24 lg:absolute lg:top-32 lg:right-12 -z-10"
                          alt=""
                        />
                        <img
                          src={require("../../../Assets/Ellipse 4.svg").default}
                          className="xl:w-16 lg:w-14 2xl:absolute 2xl:top-4 2xl:right-44 xl:absolute xl:top-4 xl:right-36 lg:absolute lg:top-4 lg:right-24 -z-10"
                          alt=""
                        />
                        <img
                          src={require("../../../Assets/Ellipse 5.svg").default}
                          className="xl:w-24 lg:w-20 2xl:absolute 2xl:top-32 2xl:right-72 xl:absolute xl:top-32 xl:right-64 lg:absolute lg:top-32 lg:right-44 -z-10"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                ) : isPrev || isNext ? (
                  <div className="m-auto flex justify-center rounded-full w-28 p-3 opacity-75 bg-gray-200">
                    <img
                      src={item.profile}
                      className="rounded-full w-28"
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="m-auto flex rounded-full w-14 p-2 opacity-50 bg-gray-200">
                    <img
                      src={item.profile}
                      className="rounded-full w-14"
                      alt=""
                    />
                  </div>
                )
              }
            </SwiperSlide>
          ))}
          <div className="flex justify-center mt-10">
            <div
              className="w-14 h-14 p-1 bg-[#E3E3E3] cursor-pointer rounded-full transition ease-in-out duration-500 hover:bg-[#C6ECE4] group"
              ref={prevElRef}
            >
              <div className="bg-[#F4F5F9] w-12 h-12 dark:bg-dark-primary rounded-full shadow-md transition ease-in-out duration-500 group-hover:bg-[#5DC8B2] group">
                <BsPlayFill className="w-full h-full -mx-[3px] rounded-sm text-9xl transition ease-in-out duration-500 text-[#707070] group-hover:text-white" />
              </div>
            </div>
            <div
              className="rotate-180 mr-5 w-14 h-14 p-1 bg-[#E3E3E3] cursor-pointer rounded-full transition ease-in-out duration-500 hover:bg-[#C6ECE4] group"
              ref={nextElRef}
            >
              <div className="bg-[#F4F5F9] w-12 h-12 dark:bg-dark-primary rounded-full shadow-md transition ease-in-out duration-500 group-hover:bg-[#5DC8B2] group">
                <BsPlayFill className="w-full h-full -mx-[3px] rounded-sm text-9xl transition ease-in-out duration-500 text-[#707070] group-hover:text-white" />
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default LandingTeacher;
