import React from "react";
import { useField } from "formik";

const InputFeild = ({
  label,
  classInput,
  classLabel,
  id,
  classError,
  classForm,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className={classForm}>
      <label htmlFor={id} className={classLabel} {...props}>
        {label}
      </label>
      <input className={classInput} id={id} {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className={classError}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputFeild;