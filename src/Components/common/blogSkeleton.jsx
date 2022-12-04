import React from "react";

const BlogSkeleton = ({ items }) =>
  Array(10)
    .slice(0, items)
    .fill()
    .map((index) => (
      <div className="w-full" key={index}>
        <div className="h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex justify-center items-center animate-pulse w-full h-48 bg-gray-400 rounded-t-lg dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>

          <div className="p-6">
            <h2 className="bg-gray-400 dark:bg-gray-700 animate-pulse h-4 w-1/4 mb-2 rounded-lg"></h2>
            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500 dark:bg-gray-700 rounded-lg"></h1>
            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
            <div className="flex items-center flex-wrap ">
              <a className="bg-indigo-300 dark:bg-gray-700 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0 rounded-lg"></a>
              <span className="bg-indigo-300 dark:bg-gray-700 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-lg"></span>
            </div>
          </div>
        </div>
      </div>
    ));

export default BlogSkeleton;
