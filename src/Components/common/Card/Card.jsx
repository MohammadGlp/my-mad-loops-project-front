import React from "react";
import { Button } from "./../button-component/button.component";
import starFill from "../../../Assets/star-fill.svg";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useGetCoursesLikeQuery } from "../../../store/courses/coursesSlice";
import { rateCalculate } from "../../../Core/utils/funcs";

const CardAI = ({ item }) => {
  const { data: courseLike } = useGetCoursesLikeQuery(item._id);

  const handleLead = (value) => {
    const trimmedLead =
      value
        .substring(0, 60)
        .substring(0, value.substring(0, 60).lastIndexOf(" ")) + "...";
    return trimmedLead;
  };

  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-dark-secondary text-gray-500 hover:-translate-y-2 hover:z-50 transition ease-in-out duration-300 custom-shadow dark:shadow-none rounded-lg p-3 my-4 flex flex-col group">
      <div className="w-full h-56">
        <img
          onClick={() => navigate(`courses/${item._id}`)}
          src={item.lesson.image}
          className="rounded-md w-full h-full hover:cursor-pointer"
          alt=""
        />
      </div>
      {/* <p className="text-right text-xs font-bold text-blue-600 mt-4 mb-2">
        آرشیو شده
      </p> */}
      <div className="mt-5">
        <p
          onClick={() => navigate(`courses/${item._id}`)}
          className="text-right text-xl mb-3 hover:cursor-pointer text-gray-900 dark:text-dark-primary-title"
        >
          {item.title}
        </p>
        <p className="text-gray-500 text-sm mb-3 text-right dark:text-dark-text">
          {handleLead(item.lesson.description)}
        </p>
        <div className="flex justify-between mb-3 dark:text-dark-secondary-title">
          <div className="flex items-center">
            <HiOutlineUser size="20px" className="ml-3" />
            <span>{item.teacher.fullName}</span>
          </div>
          <div className="flex">
            <img className="ml-3" src={starFill} alt="" />
            <span> {rateCalculate(courseLike?.result)}</span>
          </div>
        </div>

        <div className="flex justify-between mb-3 dark:text-dark-secondary-title">
          <div className="flex items-center">
            <HiOutlineUsers size="20px" className="ml-3" />
            <span>50</span>
          </div>
          <span>{item.cost} ریال</span>
        </div>
        <Button
          onClick={() => navigate(`courses/${item._id}`)}
          ButtonType="button"
          classButton="btn btn-base w-full group-hover:border-lite-purple lg:group-hover:block lg:hidden transition ease-in-out duration-300 dark:text-dark-secondary-title"
        >
          جزئیات دوره
        </Button>
      </div>
    </div>
  );
};

export default CardAI;
