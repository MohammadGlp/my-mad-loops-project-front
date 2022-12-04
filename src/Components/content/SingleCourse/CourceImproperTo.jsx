import React from 'react';
import close from '../../../Assets/close.png';
const CourceImproperTo = () => {
  return (
    <div className="course-Detail-container" data-aos="fade-up">
      <div className="course-detail-title-box">
        <p className="course-detail-title">
          این دوره برای چه کسی مناسب نیست
        </p>
      </div>
      <div className="flex items-center text-gray-400 text-lg py-2 px-5 bg-[#E8E8E8] dark:bg-dark-tertiary dark:text-dark-text">
        <img src={close} alt="" className="w-5 h-5 ml-3" />
        <p>میتونی سایت های عالی پیاده سازی کنی</p>
      </div>
      <div className="flex items-center text-gray-400 bg-[#F9F9FF] text-lg py-2 px-5 dark:bg-dark-secondary dark:text-dark-text">
        <img src={close} alt="" className="w-5 h-5 ml-3" />
        <p>از پشتیبانی قدرتمند گوگل برخوردار میشی</p>
      </div>
    </div>
  );
};

export default CourceImproperTo;
