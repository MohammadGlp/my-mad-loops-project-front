import React from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../../Components/content/SingleCourse/CourseDetails";
import CourseOpacity from "../../Components/content/SingleCourse/CourseOpacity";
import CourseTeacher from "../../Components/content/SingleCourse/CourseTeacher";
import CoursePrice from "../../Components/content/SingleCourse/CoursePrice";
import CoursePrerequisite from "../../Components/content/SingleCourse/CoursePrerequisite";
import CourseProperTo from "../../Components/content/SingleCourse/CourseProperTo";
import CourceImproperTo from "../../Components/content/SingleCourse/CourceImproperTo";
import CoursesTab from "../../Components/common/tabs/CoursesTab";
import { useGetCoursesQuery } from "../../store/courses/coursesSlice";
import { FiClock } from "react-icons/fi";
import { dateConvert } from "../../Core/utils/TimeAndDateConverter";
import Like from "../../Components/common/Like/Like";
import { selectCurrentUser } from "./../../store/auth/authSlice";
import { useSelector } from "react-redux";

const SingleCourse = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { id } = useParams();
  const { course } = useGetCoursesQuery("getCourses", {
    selectFromResult: ({ data }) => ({
      course: data?.find((item) => item._id === id),
    }),
  });

  return (
    <div className="dark:bg-dark-primary">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 p-2 lg:p-6 container mx-auto h-fit">
        <div
          className="xl:col-span-9 bg-[#F9F9FF] custom-shadow dark:shadow-none  rounded-lg dark:bg-dark-secondary"
          data-aos="fade-up"
        >
          <div className="rounded-lg overflow-hidden">
            <img src={course?.lesson.image} className="w-full h-500" />
            <div className="px-4 lg:px-16">
              <h1 className="text-2xl lg:text-4xl font-bold text-center my-5 lg:my-10 dark:text-dark-primary-title">
                {course?.lesson.lessonName}
              </h1>
              <p className="text-lg lg:text-2xl text-gray-400 leading-10 dark:text-dark-text">
                {course?.lesson.description}
              </p>
            </div>
            <div className="h-16 sm:my-5 my-32 ">
              <div className="w-11/12 m-auto grid grid-cols-10 rounded-lg">
                <div className="sm:col-span-5 col-span-10 flex justify-start sm:border-none border-lite-purple border-b-2">
                  <span className="">
                    <img
                      className="w-10 m-2 sm:mr-5 mr-20"
                      src={require("../../Assets/img/profile.png")}
                      alt="profile"
                    />
                  </span>
                  <h2 className="2xl:text-lg xl:text-md mt-4 dark:text-dark-secondary-title text-left">
                    {course?.teacher?.fullName}
                  </h2>
                </div>
                <div className="sm:col-span-5 col-span-10 flex justify-end items-center">
                  <div className="mt-4 sm:mb-0 mb-4 mr-3 2xl:text-lg xl:text-md dark:text-dark-secondary-title">
                    آیا این مطلب براتون مفید بود ؟
                  </div>
                  <div className="ml-2 mt-4">
                    <Like id={course?._id} />
                  </div>
                </div>
              </div>
            </div>
            <CoursesTab courseId={id} />
          </div>
        </div>
        <div className="xl:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-1">
            <CourseDetails item={course} />
            <CourseOpacity item={course} />
            <CourseTeacher item={course} />
            {currentUser?.role === "admin" ||
            currentUser?.role === "teacher" ? (
              <></>
            ) : (
              <CoursePrice item={course} />
            )}
            <CoursePrerequisite />
            <CourseProperTo />
            <CourceImproperTo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
