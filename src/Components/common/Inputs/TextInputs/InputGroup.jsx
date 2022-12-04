import React from 'react';
import { useField } from 'formik';

const InputGroups = ({ label, icon, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        {label ? (
          <label className="text-gray-600 inline-block mb-2 text-lg dark:text-dark-secondary-title">
            {label}
          </label>
        ) : null}

        <div
          className="flex items-center bg-[#F1F2F7] rounded-lg border-2 dark:border-dark-tertiary border-[#F1F2F7]
           text-gray-600 focus-within:text-[#673CC0] focus-within:bg-white
            focus-within:border-[#673CC0] dark:focus-within:border-[#673CC0] focus-within:border-2
            transition ease-in duration-200 dark:bg-dark-secondary dark:text-dark-primary-title"
        >
          <div className="flex items-center rounded-tr-lg rounded-br-lg  text-2xl min-h-[40px] bg-transparent px-2">
            {icon}
          </div>
          <input
            {...props}
            {...field}
            className="rounded-tl-lg rounded-bl-lg py-2 bg-transparent outline-none w-full text-gray-600 dark:text-gray-300"
          />
        </div>
        <div className="text-red-500 h-[20px] mb-1">
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default InputGroups;
