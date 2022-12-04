import React from 'react';
import reactIcon from '../../../Assets/img-user-panel/React-icon.svg';

const OfferCourseSkelton = () => {
  return (
    <div
      className="border-4 dark:border-dark-tertiary rounded-xl py-4 px-6 flex bg-gradient-to-l from-lite-gray to-white mb-6
    hover:ring group hover:ring-gray-400 hover:ring-offset-0 transition ease-out duration-300 cursor-pointer
    dark:bg-gradient-to-l dark:from-dark-secondary dark:to-dark-tertiary"
    >
      <div className="items-center flex">
        <div className="w-20 h-20 bg-gray-500 rounded-full mx-auto animate-pulse"></div>
      </div>
      <div className="w-full mr-5 md:mr-10 dark:text-dark-secondary-title">
        <div className="my-4 w-[100px] h-[14px] bg-gray-500 rounded-full animate-pulse"></div>

        <div className="sm:flex justify-between text-lg">
          <div className="mt-4 w-[50px] h-[14px] bg-gray-500 rounded-full animate-pulse"></div>
          <div className="mt-4 w-[50px] h-[14px] bg-gray-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default OfferCourseSkelton;
