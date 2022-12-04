import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const DashMenuItemLg = ({ items }) => {
  const { icon, title, path } = items;
  const { pathname } = useLocation();
  return (
    <NavLink
      to={path}
      className={`${
        pathname.slice(12) === path || pathname.slice(12) === null
          ? 'bg-white rounded-md lg:rounded-xl mt-3 p-2 flex shadow-purple text-lite-purple transition ease-in duration-200 dark:bg-dark-secondary dark:text-text-lite-purple dark:shadow-purple'
          : 'bg-white rounded-md lg:rounded-xl mt-3 hover:shadow-purple text-gray-500 p-2 flex transition ease-in duration-200 dark:bg-dark-secondary dark:text-dark-secondary-title dark:hover:shadow-purple'
      } ${
        title === 'خروج'
          ? 'hover:bg-[#FF1C1C] dark:hover:bg-[#951111] hover:text-white pr-11 transition ease-out duration-200'
          : 'hover:text-lite-purple'
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="hidden md:inline mr-2 lg:mr-2 xl:mr-6 text-sm lg:text-lg xl:text-2xl">
        {title}
      </span>
    </NavLink>
  );
};

const DashMenuItemSm = ({ items }) => {
  const { icon, path } = items;
  const { pathname } = useLocation();
  return (
    <NavLink
      to={path}
      className={
        pathname.slice(12) === path || pathname.slice(12) === null
          ? 'bg-white rounded-md lg:rounded-xl px-1.5 py-1 sm:px-2.5 sm:py-2 mx-1 sm:mx-4 shadow-purple text-lite-purple transition ease-in duration-300'
          : 'bg-white rounded-md lg:rounded-xl px-1.5 py-1 sm:px-2.5 sm:py-2 mx-1 sm:mx-4 hover:shadow-purple text-gray-500 transition ease-in duration-300'
      }
    >
      {icon}
    </NavLink>
  );
};

export { DashMenuItemLg, DashMenuItemSm };
