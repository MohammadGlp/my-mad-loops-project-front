import React, { useState } from "react";
import _ from "lodash";
import { useEffect } from "react";
const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNext,
  onPrev,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1 || pagesCount === 0) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="flex justify-center">
      <ul className="flex absolute lg:bottom-16 sm:bottom-6 bottom-20">
        <li>
          <a
            onClick={onPrev}
            className="pagination-prev dark:border-dark-tertiary dark:hover:bg-dark-secondary"
          >
            قبلی
          </a>
        </li>
        {loading ? (
          <li>
            <a className="py-2 px-3 leading-tight text-lite-purple bg-white border border-gray-300 cursor-pointer font-bold dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-dark-secondary-title">
              <span className="w-2 h-2 bg-white animate-pulse rounded-full inline-block "></span>
              <span className="w-2 h-2 bg-white animate-pulse rounded-full inline-block mr-1 "></span>
              <span className="w-2 h-2 bg-white animate-pulse rounded-full inline-block mr-1 "></span>
            </a>
          </li>
        ) : (
          pages.map((page) => (
            <li key={page}>
              <a
                className={`pagination-item dark:border-dark-tertiary  ${
                  currentPage === page
                    ? "pagination-active"
                    : "pagination-hover"
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))
        )}
        <li>
          <a
            onClick={onNext}
            className="pagination-next dark:border-dark-tertiary dark:hover:bg-dark-secondary"
          >
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
