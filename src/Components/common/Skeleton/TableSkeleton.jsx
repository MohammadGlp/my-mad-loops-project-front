import React from 'react';

const TableSkeleton = () => {
  return (
    <tr
      className="group border-b text-lite-purple group transition ease-in duration-200
hover:bg-zinc-50 hover:shadow-sm hover:border-b-0 hover:-translate-y-1
dark:hover:bg-dark-tertiary"
    >
      <td className="px-xl py-4 font-medium text-center hidden sm:table-cell">
        <div className="w-12 h-12 bg-gray-500 rounded-full mx-auto animate-pulse"></div>
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center">
        <div className="w-[100%] h-[14px] bg-gray-500 rounded-full animate-pulse"></div>
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden sm:table-cell">
        <div className="w-[100%] h-[14px] bg-gray-500 rounded-full animate-pulse"></div>
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4  text-center">
        <div className="w-[100%] h-[14px] bg-gray-500 rounded-full animate-pulse"></div>
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden lg:table-cell">
        <div className="w-[100%] h-[14px] bg-gray-500 rounded-full animate-pulse"></div>
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center cursor-pointer">
        <div className="w-12 h-12 bg-gray-500 rounded-full mx-auto animate-pulse"></div>
      </td>
    </tr>
  );
};

export default TableSkeleton;
