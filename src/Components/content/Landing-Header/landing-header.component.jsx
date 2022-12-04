import React, { useState } from "react";
import { Button } from "./../../common/button-component/button.component";
import { FieldName } from "../../common/field-name-component/field-name.component";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import LandingModal from "../../common/Landing-Modal/landing-modal.component";
import Robot from "../Landing-Header/landing-header-robot.component";
import { useGetAllNewsQuery } from "../../../store/news/newsApiSlice";
import { useGetCoursesQuery } from "../../../store/courses/coursesSlice";
import { useGetAllTeachersQuery } from "../../../store/teacherManager/teacherApiSlice";
import { useGetLessonsQuery } from "../../../store/lesson/lessonApiSlice";
import { FaBookReader } from "react-icons/fa";

const LandingHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: allNews } = useGetAllNewsQuery();
  const { data: allCourses } = useGetCoursesQuery();
  const { data: allLessons } = useGetLessonsQuery();
  const { data: allTeachers } = useGetAllTeachersQuery();
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <section className="dark:bg-dark-primary">
      <div className="container m-auto">
        <div className="grid grid-cols-7 2xl:h-700 xl:h-600 lg:h-500 md:h-550 sm:h-450 h-400">
          <div className="sm:col-span-3 col-span-7">
            <div className="grid h-3/6" data-aos="fade-down">
              <div className="grid">
                <FieldName
                  showH2
                  title="برنامه نویسی با پژوهشگاه سپهر"
                  classH2Field="pt-6 text-xl xl:text-4xl xl:mr-10 lg:text-2xl lg:mr-6 lg:pt-28 md:mr-4 m-auto pb-4 md:pt-12 sm:mr-0 sm:pt-12 dark:text-dark-primary-title"
                />
              </div>
              <div className="grid h-3/6 text-sm mx-2 text-center sm:text-right xl:mr-10 lg:mr-6 md:mr-4 mt-0 m-auto xl:text-lg lg:text-md md:text-sm sm:mx-0 sm:text-sm text-gray-700 dark:text-dark-secondary-title">
                <div className="h-[130px]" data-aos="fade-down">
                  <Typewriter
                    words={[
                      "برنامه نویسی با پژوهشگاه سپهر بهترین قدم شما برای کسب رسیدن به اهداف است تا با توانایی و علم هایی که به تنهایی بر توسط پژوهشگاه سپهر کسب کردید بتواند از طرق ان هزینه ها به درامد و خواسته های مورد نظرتان دست یابید و تا به اهدافتون علاوه بر آن بتوانید به تنهایی بصورت فری لنس علم هایی که به کار کنید و هزینه های مناسبی را دست یابید و دریافت کنید.",
                    ]}
                    cursor
                    cursorStyle=" |"
                    typeSpeed={30}
                    delaySpeed={1000}
                  />
                </div>
              </div>
            </div>
            <div
              className="grid grid-cols-4 h-1/6 text-sm mt-7 2xl:mt-0 xl:mt-10 xl:pt-4 lg:text-lg lg:mt-4 lg:pt-2 md:text-sm md:mt-0 md:pt-0 sm:mt-2 sm:pt-1 sm:text-xs"
              data-aos="fade-down"
            >
              <div className="col-span-1">
                <FaBookReader className="w-8 h-8 xl:w-12 xl:h-12 lg:w-9 lg:h-9 md:w-7 md:h-7 sm:w-5 sm:h-5 m-auto text-[#5DC8B2] hover:scale-125 duration-300 ease-in-out" />
                <FieldName
                  showP
                  field={`${allLessons?.result.length} درس`}
                  classPfield="mt-3 text-center dark:text-dark-secondary-title"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-8 xl:w-12 lg:w-9 md:w-7 sm:w-5 m-auto hover:scale-125 duration-300 ease-in-out"
                  src={require("../../../Assets/img/online-learning.png")}
                  alt="online-learning"
                />
                <FieldName
                  showP
                  field={`${allCourses?.length} دوره`}
                  classPfield="mt-3 text-center dark:text-dark-secondary-title"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-8 xl:w-12 lg:w-9 md:w-7 sm:w-5 m-auto hover:scale-125 duration-300 ease-in-out"
                  src={require("../../../Assets/img/newsletter.png")}
                  alt="newsletter"
                />
                <FieldName
                  showP
                  field={`${allNews?.length} مقاله`}
                  classPfield="mt-3 text-center dark:text-dark-secondary-title"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="w-8 xl:w-12 lg:w-9 md:w-7 sm:w-5 m-auto hover:scale-125 duration-300 ease-in-out"
                  src={require("../../../Assets/img/presentation.png")}
                  alt="presentation"
                />
                <FieldName
                  showP
                  field={`${allTeachers?.result.length} استاد`}
                  classPfield="mt-3 text-center dark:text-dark-secondary-title"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-5 h-2/6">
              <div className="col-span-5 sm:col-span-3 animate-[onLoadBtn_1s_ease-in-out]">
                <Link to="/courses">
                  <Button
                    classButton="btn border-transparent text-sm py-5 mt-5 px-24 mx-8 2 2xl:mt-5 2xl:px-24 xl:mt-6 xl:mx-12 xl:px-16 lg:py-5 lg:mt-5 lg:mx-4 lg:px-16 md:py-3 md:mt-0 md:mx-2
                    md:px-12 sm:py-3 sm:mt-0 sm:mx-0 sm:px-10 bg-lite-purple dark:text-dark-primary text-white lg:text-lg md:text-sm sm:text-xs
                    rounded-xl hover:drop-shadow-lg hover:scale-105 duration-200 ease-in-out"
                  >
                    شروع یادگیری
                  </Button>
                </Link>
              </div>
              <div className="col-span-5 sm:col-span-2 animate-[onLoadBtn_1s_ease-in-out]">
                <Button
                  onClick={openModal}
                  classButton="outline-none border-transparent btn text-sm py-5 mt-3 px-14 mx-16 2xl:mt-5 2xl:px-10 xl:mx-3 xl:mt-6 xl:px-6 lg:py-5 lg:mx-1 lg:mt-5 lg:px-4 md:py-3
                md:mx-0 md:mt-0 md:px-4 sm:py-3 sm:mx-0 sm:mt-0 sm:px-2 bg-dark-purple dark:text-dark-primary text-white lg:text-lg md:text-sm sm:text-xs 
                rounded-xl hover:drop-shadow-lg hover:scale-105 duration-200 ease-in-out"
                >
                  مشاوره تخصصی
                </Button>
                <LandingModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4 col-span-0 sm:block hidden relative">
            <div className="absolute xl:right-40 lg:right-20 md:right-14 sm:right-10 md:top-96 sm:top-80 w-[60%] h-48 rounded-full drop-shadow-xl shadow-black">
              <Robot />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeader;
