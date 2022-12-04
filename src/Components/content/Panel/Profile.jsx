import React from "react";
import { useSelector } from "react-redux";
import { useGetStudentByIdQuery } from "../../../store/studentManager/studentApi";
import { DecodeToken } from "./../../../Core/utils/decodeToken";
import { selectToken } from "../../../store/auth/authSlice";
import { selectSessionToken } from "../../../store/auth/authSessionSlice";

const Profile = () => {
  const userToken = useSelector(selectToken);
  const userSessionToken = useSelector(selectSessionToken);
  const id = DecodeToken(userToken || userSessionToken);

  const { data: userById } = useGetStudentByIdQuery({
    id: id._id,
  });
  return (
    <>
      <div className="rounded-xl overflow-hidden hidden xl:block bg-white dark:bg-dark-secondary">
        <img
          src={userById?.profile}
          className="w-full h-52 object-cover object-top"
        />
      </div>

      <div className="flex items-center xl:hidden">
        <img
          src={userById?.profile}
          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full ml-2"
        />
      </div>
    </>
  );
};

export default Profile;
