import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { removeItem } from "../../../store/cart/cartSlice";
import TableSkeleton from "../../common/Skeleton/TableSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { dateConvert } from "../../../Core/utils/TimeAndDateConverter";
import { selectCurrentUser } from "../../../store/auth/authSlice";
import { selectSessionCurrentUser } from "../../../store/auth/authSessionSlice";
import { useAddStudentToCourseMutation } from "../../../store/courses/coursesSlice";
import { toastifyToast } from "./../../common/Toast/toast";

const TableBody = ({ course }) => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);

  const [
    addStudentToCourse,
    { isSuccess, isError, error, isLoading: isLoad, data },
  ] = useAddStudentToCourseMutation();

  const { title, cost, teacher, startDate, lesson } = course;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const dispatch = useDispatch();
  const removeItems = () => dispatch(removeItem(course._id));

  const dates = dateConvert(startDate);

  const addCourse = async (courseId) => {
    const res = await addStudentToCourse({
      courseId: { courseId: courseId },
      obj: currentUser?._id || currentSessionUser?._id,
    });
    if (res?.data) {
      console.log(courseId);
      dispatch(removeItem(courseId));
      toastifyToast.success("دوره انتخاب شده با موفقیت اضافه گردید.");
    } else {
      toastifyToast.error(error?.data.message[0].message);
    }
  };

  return loading ? (
    <TableSkeleton />
  ) : (
    <tr className="border-b dark:border-dark-tertiary text-lite-purple group hover:bg-zinc-50 dark:hover:bg-dark-tertiary hover:shadow-sm hover:-translate-y-1 transition ease-in-out duration-200">
      <td className="px-xl py-4 font-medium text-center hidden lg:table-cell">
        <img src={lesson.image} className="w-12 mx-auto h-10" />
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center">
        {title}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden sm:table-cell">
        {teacher.fullName}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4  text-center">
        {cost}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden lg:table-cell">
        {`${dates.year}/${dates.month}/${dates.day}`}
      </td>
      {currentUser || currentSessionUser ? (
        <td
          className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center cursor-pointer"
          onClick={() => addCourse(course._id)}
        >
          <MdPostAdd className="mx-auto hover:text-green-500 transition ease-in-out duration-300 text-3xl" />
        </td>
      ) : null}
      <td
        className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center cursor-pointer"
        onClick={removeItems}
      >
        <FaTrashAlt className="mx-auto hover:text-red-500 transition ease-in-out duration-300" />
      </td>
    </tr>
  );
};

export default TableBody;
