import React, { useEffect, useState } from "react";
import SignUpFirstPage from "./../../Components/content/SignUp/sign-up-first.component";
import SignUpSecondPage from "./../../Components/content/SignUp/sign-up-second.component";
import SignUpThirdPage from "./../../Components/content/SignUp/sign-up-third.component";
import SignUpFourthPage from "./../../Components/content/SignUp/sign-up-fourth.component";
import AuthRightSkill from "../../Components/common/AuthRightSkill.component";
import { toastifyToast } from "../../Components/common/Toast/toast";
import { useRegisterStudentMutation } from "../../store/auth/authApi";

const SignUpPage = () => {
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationalId: "",
    phoneNumber: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
  });
  const [currentPage, setCurrentPage] = useState(0);

  const [register, { isSuccess, data, isError, error, isLoading }] =
    useRegisterStudentMutation();

  useEffect(() => {
    if (isSuccess) {
      toastifyToast.success(data.message[0].message);
      setField("");
    }

    if (isError) {
      if (error.status === 400) {
        toastifyToast.error(error.data.message[0].message);
      } else if (error.status === 401) {
        toastifyToast.error(error.data.message[0].message);
      } else if (error.status === 403) {
        toastifyToast.error(error.data.message[0].message);
      } else {
        toastifyToast.error("مشکلی رخ داده است");
      }
    }
  }, [isLoading]);

  const setToReaquest = async (formData) => {
    await register({
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      birthDate: formData.birthDate,
      password: formData.password,
      nationalId: formData.nationalId,
      fullName: formData.firstName + " " + formData.lastName,
      profile:
        "https://mechanicwp.ir/wp-content/uploads/2018/04/user-circle.png",
    });
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
    <SignUpFirstPage data={field} next={handleNextPage} />,
    <SignUpSecondPage
      data={field}
      next={handleNextPage}
      prev={handlePrevPage}
    />,
    <SignUpThirdPage
      data={field}
      next={handleNextPage}
      prev={handlePrevPage}
    />,
    <SignUpFourthPage data={field} next={handleNextPage} />,
  ];

  return (
    <div className="m-auto w-full h-screen sm:flex sm:flex-row">
      <AuthRightSkill currentPage={currentPage} />
      {stepsPage[currentPage]}
    </div>
  );
};

export default SignUpPage;
