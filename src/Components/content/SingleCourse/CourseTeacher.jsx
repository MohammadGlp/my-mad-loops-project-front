import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';
import bahr from '../../../Assets/bahr.jpg';
const CourseTeacher = ({ item }) => {
  return (
    <div className="course-Detail-container">
      <div className="course-detail-title-box">
        <p className="course-detail-title">مدرس</p>
      </div>
      <div className="flex text-gray-400 text-lg bg-[#E8E8E8] h-full">
        <img
          src={item?.teacher.profile}
          className="w-40 h-full object-cover"
        />
        <div className="p-4 dark:bg-dark-tertiary dark:text-dark-text">
          <h3 className="text-xl">استاد {item?.teacher.fullName}</h3>
          <p className="text-base">
            آموزش پروژه محور انگولار اولین دوره از سری دوره های هیولا
            شو و پروژه محور در وب سایت **** است
          </p>
          <div className="flex justify-end">
            <FaWhatsapp className="mr-2 hover:text-green-500 cursor-pointer hover:scale-125 duration-200" />
            <FaLinkedinIn className="mr-2 hover:text-blue-800 cursor-pointer hover:scale-125 duration-200" />
            <FaInstagram className="mr-2 hover:text-purple-900 cursor-pointer hover:scale-125 duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTeacher;
