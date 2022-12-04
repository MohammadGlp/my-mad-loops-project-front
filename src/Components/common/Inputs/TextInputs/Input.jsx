import React from "react";
import { useField } from "formik";
const InputGroups = ({ label, className, err, check, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {label ? (
        <label className="text-gray-600 mb-2 text-lg dark:text-dark-secondary-title">
          {label}
        </label>
      ) : null}
      <input checked={check} {...props} {...field} className={className} />
      {err ? null : (
        <div className="text-red-500 h-[20px] mb-1">
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default InputGroups;
