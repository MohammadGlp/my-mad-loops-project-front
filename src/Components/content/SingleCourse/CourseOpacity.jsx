import React from 'react';
import { FaUsers, FaUserGraduate } from 'react-icons/fa';
const CourseOpacity = ({ item }) => {
  return (
    <div className="course-Detail-container" data-aos="fade-left">
      <div className="course-detail-title-box">
        <p className="course-detail-title">ظرفیت</p>
      </div>
      <div className="course-detail-item-odd">
        <div className="flex items-center">
          <FaUsers />
          <p className="mr-3">ظرفیت کل دوره</p>
        </div>
        <div className="text-zinc-500 dark:text-dark-text">
          <p>{item?.capacity}</p>
        </div>
      </div>
      <div className="course-detail-item-even">
        <div className="flex items-center">
          <FaUserGraduate />
          <p className="mr-3">تعداد دانشجویان دوره:</p>
        </div>
        <div className="text-zinc-500 dark:text-dark-text">
          <p>{item?.students.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseOpacity;
