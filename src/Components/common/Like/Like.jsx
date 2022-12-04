import React from "react";
import likeFillIcon from "../../../Assets/likee.png";
import likeIcon from "../../../Assets/likesolid.png";
import disLikeFillIcon from "../../../Assets/dislikee.png";
import disLikeIcon from "../../../Assets/dislikesolid.png";

import {
  useDisLikedCourseMutation,
  useLikedCourseMutation,
  useGetCoursesLikeQuery,
} from "../../../store/courses/coursesSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/auth/authSlice";
import { selectSessionCurrentUser } from "../../../store/auth/authSessionSlice";
import { toastifyToast } from "../Toast/toast";
import { useEffect } from "react";

const Like = ({ id }) => {
  const { data: likeCount } = useGetCoursesLikeQuery(id);
  const [likedCourse, { isSuccess, isError, isLoading, error, data }] =
    useLikedCourseMutation();
  const [
    disLikedCourse,
    {
      isSuccess: doroste,
      isLoading: loadshode,
      isError: kharabe,
      error: likeNashode,
      data: likeShode,
    },
  ] = useDisLikedCourseMutation();
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);

  useEffect(() => {
    if (isSuccess) {
      if (currentUser || currentSessionUser) {
        toastifyToast.success(data?.message[0].message);
      } else {
        toastifyToast.info(data?.message[0].message);
      }
    }
    if (isError) {
      toastifyToast.error(error?.data.message[0].message);
    }
  }, [isLoading]);

  useEffect(() => {
    if (doroste) {
      toastifyToast.success(likeShode?.message[0].message);
    }
    if (kharabe) {
      toastifyToast.error(likeNashode.data?.message[0].message);
    }
  }, [loadshode]);

  return (
    <div className="flex items-center text-gray-400 text-lg">
      <span className="px-3 w-10 mb-1">{likeCount?.like}</span>
      <img
        src={isSuccess ? likeFillIcon : likeIcon}
        className="w-4 h-4 sm:w-5 sm:h-5 mb-3 cursor-pointer"
        onClick={() =>
          likedCourse({
            courseId: id,
            userId: currentUser?._id || currentSessionUser?._id,
          })
        }
      />
      <span className="px-3 w-10 mb-1">{likeCount?.dislike}</span>
      <img
        src={doroste ? disLikeFillIcon : disLikeIcon}
        className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
        onClick={() =>
          disLikedCourse({
            courseId: id,
            userId: currentUser?._id || currentSessionUser?._id,
          })
        }
      />
    </div>
  );
};

export default Like;
