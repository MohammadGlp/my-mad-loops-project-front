import React, { useEffect, useState } from "react";
import ForgetPassFirstPage from "./../../Components/content/ForgetPassword/ForgetPassFirst.component";
import ForgetPassSecondPage from "./../../Components/content/ForgetPassword/ForgetPassSecond.component";
import ForgetPassThirdPage from "./../../Components/content/ForgetPassword/ForgetPassThird.component";
import ForgetPassFourthPage from "./../../Components/content/ForgetPassword/ForgetPassFourth.component";
import AuthRightSkill from "../../Components/common/AuthRightSkill.component";
import { useForgetPasswordMutation } from "../../store/auth/authApi";
import { toastifyToast } from "./../../Components/common/Toast/toast";

const ForgetPasswordPage = () => {
  const [field, setField] = useState({
    email: "",
    text: "",
    password: "",
    confirmPassword: "",
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [forgetPassword, { isSuccess, isLoading, isError, error, data }] =
    useForgetPasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      toastifyToast.success(data.message[0].message);
      setField("");
    }
    if (isError) {
      toastifyToast.error(error.data.message[0].message);
    }
  }, [isLoading]);

  const setToReaquest = async (formData) => {
    await forgetPassword({ email: formData.email });
  };

  const handleNextPage = (newData, finalPage = false) => {
    setField((prev) => ({ ...prev, ...newData }));

    setCurrentPage((prev) => prev + 1);

    if (finalPage) {
      return setToReaquest(newData);
    }
  };

  const handlePrevPage = (newData) => {
    setField((prev) => ({ ...prev, ...newData }));
    setCurrentPage((prev) => prev - 1);
  };

  const stepsPage = [
    <ForgetPassFirstPage data={field} next={handleNextPage} />,
    <ForgetPassSecondPage
      data={field}
      next={handleNextPage}
      prev={handlePrevPage}
    />,
    <ForgetPassThirdPage
      data={field}
      next={handleNextPage}
      prev={handlePrevPage}
    />,
    <ForgetPassFourthPage data={field} next={handleNextPage} />,
  ];

  return (
    <div className="m-auto h-screen sm:flex sm:flex-row">
      <AuthRightSkill currentPage={currentPage} />
      {stepsPage[currentPage]}
    </div>
  );
};

export default ForgetPasswordPage;
