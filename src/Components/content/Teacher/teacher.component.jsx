import React, { useState } from "react";
import { FieldName } from "../../common/field-name-component/field-name.component";
import {
  BsInstagram,
  BsTelegram,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsDashLg,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useParams } from "react-router-dom";
import { useGetAllTeachersQuery } from "../../../store/teacherManager/teacherApiSlice";

const TeacherPage = () => {
  const { id } = useParams();
  const { teacherItem, isLoading, isSuccess, isError, error } =
    useGetAllTeachersQuery("getLastTeacher", {
      selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
        teacherItem: data?.result.find((item) => item._id === id),
        isLoading,
        isSuccess,
        isError,
        error,
      }),
    });

  let content;

  if (isLoading) {
    content = <h2 className="m-auto text-6xl">Loading...</h2>;
  } else if (isSuccess) {
    content = (
      <>
        <div
          className="h-16 sm:mt-20 mt-4 mb-1 text-right"
          data-aos="fade-down"
        >
          <FieldName
            showH2
            title={teacherItem?.fullName}
            classH2Field="sm:text-3xl text-xl dark:text-gray-300"
          />
        </div>
        <div className="w-500 h-fit text-right" data-aos="fade-down">
          <FieldName
            showP
            field={teacherItem?.phoneNumber}
            classPfield="sm:text-xl text-md pt-3 text-gray-400 break-all"
          />
        </div>
        <div
          className="flex h-16 sm:mt-20 mt-4 mb-1 text-right"
          data-aos="fade-up"
        >
          <div className="bg-gray-200 dark:bg-dark-tertiary dark:text-gray-400 ml-4 h-fit w-fit rounded-lg sm:mt-0 mt-2">
            <SiGmail className="sm:text-6xl text-4xl p-2" />
          </div>
          <FieldName
            showH2
            title={`ایمیل: ${teacherItem?.email}`}
            classH2Field="sm:text-3xl text-base pt-3 text-gray-500 dark:text-gray-600"
          />
        </div>
      </>
    );
  } else if (isError) {
    content = (
      <h2 className="m-auto text-6xl">{error?.data.message[0].message}</h2>
    );
  }

  return (
    <div className="dark:bg-dark-primary">
      <div className="container m-auto">
        <div className="flex 2xl:flex-row flex-col-reverse justify-between">
          <div className="2xl:w-[50%] w-full md:pr-16 pr-5">
            {content}
            <div className="flex flex-col justify-center md:flex-row md:justify-evenly md:gap-0 gap-10 text-center mt-16 mb-11">
              <div
                className="bg-[#F6F6FB] dark:bg-dark-secondary w-52 h-40 rounded-sm md:mx-0 mx-auto hover:scale-110 duration-300"
                data-aos="flip-up"
              >
                <div className="text-[#C53F3F] text-4xl mt-6">
                  {teacherItem?.courses.map((data) => data.lesson).length}+
                </div>
                <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
                <div className="text-[#675F74] text-3xl">درس </div>
              </div>
              <div
                className="bg-[#F6F6FB] dark:bg-dark-secondary w-52 h-40 rounded-sm md:mx-0 mx-auto hover:scale-110 duration-300"
                data-aos="flip-up"
              >
                <div className="text-[#C53F3F] text-4xl mt-6">
                  {teacherItem?.courses.length}+
                </div>
                <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
                <div className="text-[#675F74] text-3xl">دوره</div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[50%] w-full 2xl:h-800 xl:h-600 lg:h-550 md:h-450 h-350 overflow-hidden animate-[onLoadTeacher_1s_ease-in-out] ">
            <div className="relative xl:top-0 lg:top-5 md:top-12 sm:top-5 top-8">
              <div className="absolute lg:top-16 sm:top-8 2xl:inset-x-[300px] xl:inset-x-[450px] lg:inset-x-80 md:inset-x-60 sm:inset-x-60 2xl:w-9/12 xl:w-4/12 lg:w-5/12 md:w-5/12 sm:w-4/12 w-9/12 h-9/12 sm:left-0 left-[12%] sm:p-0 p-5 bg-gray-200 dark:bg-dark-secondary rounded-full z-10">
                <img
                  src={teacherItem?.profile}
                  className="rounded-full w-full h-full 2xl:p-28 lg:p-20 md:p-10 sm:p-8 p-3"
                  alt="bahr"
                />
                <div className="absolute 2xl:top-7 2xl:left-64 lg:top-6 lg:left-[198px] md:top-3 md:left-[160px] sm:top-2.5 sm:left-[100px] top-2 left-[120px]">
                  <BsLinkedin className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[20px] text-blue-500 hover:scale-110 duration-300 cursor-pointer" />
                </div>
                <div className="absolute 2xl:top-[102px] 2xl:left-[420px] lg:top-20 lg:left-[320px] md:top-[70px] md:left-[265px] sm:top-[40px] sm:left-[168px] top-[45px] left-[206px]">
                  <BsFacebook className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[20px] text-blue-900 hover:scale-110 duration-300 cursor-pointer" />
                </div>
                <div className="absolute 2xl:top-64 2xl:left-[480px] lg:top-[200px] lg:left-[370px] md:top-[160px] md:left-[289px] sm:top-[100px] sm:left-[189px] top-[125px] left-[236px]">
                  <BsInstagram className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[20px] text-lite-purple hover:scale-110 duration-300 cursor-pointer" />
                </div>
                <div className="absolute 2xl:bottom-[102px] 2xl:left-[420px] lg:bottom-20 lg:left-[320px] md:bottom-[60px] md:left-[255px] sm:bottom-[37px] sm:left-[163px] bottom-[45px] left-[206px]">
                  <BsTelegram className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[20px] text-blue-600 hover:scale-110 duration-300 cursor-pointer" />
                </div>
                <div className="absolute 2xl:bottom-7 2xl:left-64 lg:bottom-6 lg:left-[198px] md:bottom-3 md:left-[160px] sm:bottom-2 sm:left-[100px] bottom-1.5 left-[125px]">
                  <BsWhatsapp className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[20px] text-green-600 hover:scale-110 duration-300 cursor-pointer" />
                </div>
              </div>

              <div className="absolute 2xl:top-10 2xl:left-64 xl:top-14 xl:left-[700px] lg:top-16 lg:left-[590px] md:top-10 md:left-[450px] sm:top-7 sm:left-[340px] top-0 left-[225px] z-0">
                <img
                  src={require("../../../Assets/Ellipse 4.svg").default}
                  className="2xl:w-28 xl:w-24 lg:w-20 md:w-16 sm:w-12 w-10"
                />
              </div>
              <div className="absolute 2xl:top-[276px] 2xl:left-[360px] xl:top-[390px] xl:left-[600px] lg:top-[400px] lg:left-[500px] md:top-[280px] md:left-[395px] sm:top-[200px] sm:left-[310px] top-[180px] left-[200px]">
                <img
                  src={require("../../../Assets/Ellipse 3.svg").default}
                  className="2xl:w-44 xl:w-40 lg:w-32 md:w-24 sm:w-16 w-24"
                />
              </div>
              <div className="absolute 2xl:top-[570px] 2xl:left-[250px] xl:top-[330px] xl:left-[380px] lg:top-[330px] lg:left-[260px] md:top-[310px] md:left-[260px] sm:top-[225px] sm:left-[235px] top-[220px] left-[76px]">
                <img
                  src={require("../../../Assets/Ellipse 5.svg").default}
                  className="2xl:w-24 xl:w-20 lg:w-16 md:w-12 sm:w-8 w-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
