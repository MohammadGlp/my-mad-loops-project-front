import React from 'react';
import { BsFillGrid3X3GapFill, BsListUl } from 'react-icons/bs';

const GridAndList = ({ showGrid, setShowGrid }) => {
  return (
    <div className="m-auto rounded-[20px] sm:flex items-stretch transition ease-in-out duration-200 hidden">
      <BsListUl
        className={
          !showGrid
            ? 'md:text-5xl sm:text-[42px] p-2 text-[#373F49] cursor-pointer border-[#5DC8B2] border-y-2 border-r-2 rounded-r-lg transition ease-in-out duration-200 hover:bg-[#5DC8B2] hover:rounded-r-lg hover:text-white dark:text-dark-primary-title'
            : 'md:text-5xl sm:text-[42px] p-2 text-white cursor-pointer bg-[#5DC8B2] rounded-r-lg'
        }
        onClick={() => setShowGrid(true)}
      />
      <BsFillGrid3X3GapFill
        className={
          showGrid
            ? 'md:text-5xl sm:text-[42px] p-2 cursor-pointer border-[#5DC8B2] border-y-2 border-l-2 rounded-l-lg text-[#373F49] hover:rounded-l-lg transition ease-in-out duration-200 hover:bg-[#5DC8B2] hover:text-white dark:text-dark-primary-title'
            : 'md:text-5xl sm:text-[42px] p-2 cursor-pointer bg-[#5DC8B2] rounded-l-lg text-white'
        }
        onClick={() => setShowGrid(false)}
      />
    </div>
  );
};

export default GridAndList;
