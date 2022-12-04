import React, { useRef, useState, useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import editImg from "../../../Assets/img-user-panel/edit.png";
import Input from "../../common/Inputs/TextInputs/Input";
import CustomDatePicker from "../../common/Date-Picker/date-picker-component";
import {
  useGetStudentByIdQuery,
  useUpdateStudentInfoMutation,
} from "../../../store/studentManager/studentApi";
import { useSelector } from "react-redux";
import { toastifyToast } from "../../common/Toast/toast";
import { selectToken } from "./../../../store/auth/authSlice";
import { useUploadImgMutation } from "../../../store/upload/uploadApiSlice";
import { selectSessionToken } from "../../../store/auth/authSessionSlice";
import { DecodeToken } from "../../../Core/utils/decodeToken";

const EditProfile = () => {
  const userToken = useSelector(selectToken);
  const userSessionToken = useSelector(selectSessionToken);
  const id = DecodeToken(userToken || userSessionToken);
  const [ref, setRef] = useState(false);

  const { data: userById } = useGetStudentByIdQuery({
    id: id._id,
  });

  useEffect(() => {
    const dataGetter = async () => {
      await userById;
    };
    dataGetter();
  }, [ref]);

  const splite = () => {
    try {
      const [firstName, ...rest] = userById.fullName.split(" ");
      const lastName = rest.join(" ");
      return [firstName, lastName];
    } catch (err) {
      return err;
    }
  };

  const [studentInfo, setStudentInfo] = useState({
    firstName: splite()[0],
    lastName: splite()[1],
    email: userById?.email,
    nationalId: userById?.nationalId,
    phoneNumber: userById?.phoneNumber,
    birthDate: userById?.birthDate,
    profile: "",
  });

  const [updateStudentInfo, { isSuccess, isError, error, isLoading }] =
    useUpdateStudentInfoMutation();

  const [uploadImg] = useUploadImgMutation();

  useEffect(() => {
    if (isSuccess) {
      setStudentInfo("");
    }

    if (isError) {
      if (error.originalStatus === 400) {
        toastifyToast.error("احتمالا چیزی را اشتباه وارد کردید!");
      } else if (error.originalStatus === 401) {
        toastifyToast.error("عدم دسترسی؛ لطفا وارد حساب خود شوید");
      } else if (error.originalStatus === 403) {
        toastifyToast.error(error?.data.message.message[0].message);
      } else {
        toastifyToast.error("مشکلی رخ داده است.");
      }
    }
  }, [isLoading]);

  const handleSubmit = (values) => {
    const editing = async () => {
      if (values.profile === "") {
        const update = await updateStudentInfo({
          fullName: values.firstName + " " + values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          birthDate: values.birthDate,
          nationalId: userById?.nationalId,
          profile:
            "https://mechanicwp.ir/wp-content/uploads/2018/04/user-circle.png",
          _id: id._id,
        });

        setRef((old) => !old);
        toastifyToast.success(update.data.message[0].message, {});
      } else {
        const imagefile = document.querySelector("#file");
        let myFormData = new FormData();
        myFormData.append("image", values.profile);
        const upload = await uploadImg({ myFormData: myFormData });

        if (upload.data.success === true) {
          const Picture = upload.data.result;

          const update = await updateStudentInfo({
            email: values.email,
            phoneNumber: values.phoneNumber,
            birthDate: values.birthDate,
            nationalId: userById?.nationalId,
            fullName: values.firstName + " " + values.lastName,
            profile: Picture,
            _id: id._id,
          });
          setRef((old) => !old);

          toastifyToast.success(update.data.message[0].message);
        } else {
          toastifyToast.warning("لطفا مجددا امتحان فرمایید", {});
        }
      }
    };
    editing();
  };

  const handleReset = (resetForm) => {
    toastifyToast.warning("تغییرات شما لغو شد");
    resetForm();
  };

  const fileInput = useRef();

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={editImg}
            className="rounded-t-xl w-full h-80 object-cover"
          />
          <div
            className="absolute right-0 left-0 mx-auto w-[60px] h-[60px] sm:w-[120px] sm:h-[100px] top-0 bottom-0 my-auto
            group "
            onClick={() => fileInput.current.click()}
          >
            <button
              className="bg-white text-transparent backdrop-opacity-20 backdrop-blur-[4px] backdrop-brightness-25 opacity-20
          rounded-tl-xl rounded-tr-lg rounded-bl-lg rounded-br-xl w-full h-full
          transition ease-in-out duration-300 group-hover:-translate-y-1"
            />
            <span
              className="text-white text-sm sm:text-lg absolute left-0 right-0 text-center top-0 bottom-0 h-8 my-auto
            transition ease-in-out duration-300 group-hover:-translate-y-1 cursor-pointer"
            >
              ویرایش تصویر
            </span>
          </div>
        </div>
        <Formik
          initialValues={studentInfo}
          validationSchema={Yup.object({
            firstName: Yup.string().required("لطفا فیلد نام را پر کنید"),
            lastName: Yup.string().required(
              "لطفا فیلد نام خانوادگی را پر کنید"
            ),
            email: Yup.string()
              .email("الگوی وارد شده صحیح نمی باشد")
              .required("لطفا فیلد ایمیل را پر کنید"),
            birthDate: Yup.string().required("لطفا فیلد تاریخ تولد را پر کنید"),
            phoneNumber: Yup.string()
              .required("لطفا فیلد شماره تماس را پر کنید")
              .matches(/^[0-9]+$/, "الگوی وارد شده صحیح نمی باشد")
              .min(11, "تعداد ارقام شماره تلفن صحیح نیست")
              .max(11, "تعداد ارقام شماره تلفن صحیح نیست"),
          })}
          onSubmit={handleSubmit}
        >
          {({ resetForm, setFieldValue }) => (
            <Form>
              <input
                type="file"
                id="file"
                name="profile"
                className="invisible"
                ref={fileInput}
                onChange={(event) => {
                  setFieldValue("profile", event.target.files[0]);
                }}
                multiple
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 p-6 animate-[onLoadPanel_.5s_ease-in]">
                <div>
                  <Input
                    className="py-2 px-3 w-full dark:bg-transparent focus:border-lite-purple dark:focus:border-lite-purple dark:text-white dark:border-gray-500 p-2 mb-1 border-2 border-[#B7B7B7] bg-white rounded-md outline-none duration-300"
                    name="firstName"
                    type="text"
                    label="نام:"
                    placeholder={splite()[0]}
                  />
                </div>
                <div>
                  <Input
                    className="py-2 px-3 w-full dark:bg-transparent focus:border-lite-purple dark:focus:border-lite-purple dark:text-white dark:border-gray-500 p-2 mb-1 border-2 border-[#B7B7B7] bg-white rounded-md outline-none duration-300"
                    name="lastName"
                    type="text"
                    label="نام خانوادگی:"
                    placeholder={splite()[1]}
                  />
                </div>
                <div>
                  <Input
                    className="py-2 px-3 w-full dark:bg-transparent focus:border-lite-purple dark:focus:border-lite-purple dark:text-white dark:border-gray-500 p-2 mb-1 border-2 border-[#B7B7B7] bg-white rounded-md outline-none duration-300"
                    name="nationalId"
                    type="text"
                    label="کد ملی:"
                    placeholder={userById?.nationalId}
                    disabled
                  />
                </div>
                <div>
                  <Input
                    className="py-2 px-3 w-full dark:bg-transparent focus:border-lite-purple dark:focus:border-lite-purple dark:text-white dark:border-gray-500 p-2 mb-1 border-2 border-[#B7B7B7] bg-white rounded-md outline-none duration-300"
                    name="email"
                    type="text"
                    label="ایمیل:"
                    placeholder={userById?.email}
                  />
                </div>
                <div>
                  <CustomDatePicker
                    name="birthDate"
                    label="تاریخ تولد:"
                    placeholder={userById?.birthDate}
                    classLabel="text-gray-600 block text-lg dark:text-dark-secondary-title"
                    className="py-2 px-3 w-full dark:bg-transparent focus:border-lite-purple dark:focus:border-lite-purple dark:text-white dark:border-gray-500 p-2 mb-1 border-2 border-[#B7B7B7] bg-white rounded-md outline-none duration-300"
                  />
                </div>
                <div>
                  <Input
                    className="py-2 px-3 w-full dark:bg-transparent focus:border-lite-purple dark:focus:border-lite-purple dark:text-white dark:border-gray-500 p-2 mb-1 border-2 border-[#B7B7B7] bg-white rounded-md outline-none duration-300"
                    name="phoneNumber"
                    type="text"
                    label="شماره موبایل:"
                    placeholder={userById?.phoneNumber}
                  />
                </div>
              </div>
              <div className="text-center text-base sm:text-xl animate-[onLoadPanel_1s_ease-in]">
                <button
                  type="button"
                  className="border-2 border-lite-purple px-6 py-2 rounded-lg text-lite-purple mx-2
              hover:border-red-600 hover:text-red-600 transition ease-in-out duration-300"
                  onClick={() => handleReset(resetForm)}
                >
                  لغو تغییرات
                </button>
                <button
                  type="submit"
                  className="border-2 border-lite-purple bg-lite-purple px-6 py-2 rounded-lg text-white mx-2
                hover:bg-green-600 hover:border-green-600 hover:text-white transition ease-in-out duration-300"
                >
                  ثبت تغییرات
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditProfile;
