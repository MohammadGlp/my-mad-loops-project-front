import React, { useEffect, useState } from "react";
import reactIcon from "../../../Assets/img-user-panel/React-icon.svg";
import PanelHeader from "./PanelHeader";
import { Link, useNavigate } from "react-router-dom";
import LastCourseSkeleton from "../../common/Skeleton/LastCourseSkeleton";
import OfferCourseSkelton from "../../common/Skeleton/OfferCourseSkelton";
import { useGetCoursesQuery } from "../../../store/courses/coursesSlice";
import { useSelector } from "react-redux";
import { useGetStudentByIdQuery } from "../../../store/studentManager/studentApi";
import { DecodeToken } from "../../../Core/utils/decodeToken";
import { selectToken } from "../../../store/auth/authSlice";
import { selectSessionToken } from "../../../store/auth/authSessionSlice";

const Dashboard = () => {
  const userToken = useSelector(selectToken);
  const userSessionToken = useSelector(selectSessionToken);
  const id = DecodeToken(userToken || userSessionToken);
  const { data: userById } = useGetStudentByIdQuery({
    id: id._id,
  });
  const { data, isLoading } = useGetCoursesQuery();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const getDate = () => {
    const orderedDates = data
      .slice()
      .sort((a, b) => b.startDate.localeCompare(a.startDate));

    return { orderedDates: orderedDates[0] };
  };

  return (
    <>
      <PanelHeader />
      {/* 1 */}
      <div className="mx-2 md:mx-10 sm:my-5 relative overflow-hidden rounded-xl animate-[onLoadPanel_1s_ease-in]">
        <div
          onClick={() => navigate("/user-panel/editProfile")}
          className="absolute top-0 sm:top-auto sm:bottom-0 left-0 px-4 py-2 sm:px-10 sm:py-4 rounded-tl-xl dark:border-dark-tertiary rounded-br-xl
           sm:rounded-tl-none sm:rounded-br-none sm:rounded-tr-xl sm:rounded-bl-xl border-4 sm:text-xl text-base font-bold text-purple-500
           dark:text-lite-purple dark:hover:text-dark-tertiary hover:bg-lite-purple hover:text-white transition ease-in-out duration-300 cursor-pointer"
        >
          ویرایش
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-10 border-4 dark:border-dark-tertiary rounded-xl text-gray-400
          px-3 lg:px-10 py-5 text-lg lg:text-2xl dark:text-dark-secondary-title"
        >
          <p>
            نام و نام خانوادگی :
            <span className="font-bold text-lite-purple">
              {" " + userById?.fullName}
            </span>
          </p>

          <p>
            تاریخ تولد :
            <span className="text-lite-purple font-bold">
              {" " + userById?.birthDate}
            </span>
          </p>

          <p>
            شماره همراه :
            <span className="text-lite-purple font-bold">
              {" " + userById?.phoneNumber}
            </span>
          </p>

          <p>
            شماره ملی :
            <span className="text-lite-purple font-bold">
              {" " + userById?.nationalId}
            </span>
          </p>

          <p>
            ایمیل:
            <span className="text-lite-purple text-sm lg:text-xl font-bold">
              {" " + userById?.email}
            </span>
          </p>
        </div>
      </div>

      {/* end 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 lg:mx-10 mt-6 animate-[onLoadPanel_1.5s_ease-in]">
        <div>
          <p className="text-2xl lg:text-3xl font-bold mr-5 lg:mr-10 mb-2 lg:mb-6 text-gray-500 dark:text-dark-secondary-title">
            آخرین دوره ثبت شده :
          </p>
          {isLoading ? (
            <LastCourseSkeleton />
          ) : (
            <Link to={`/courses/${getDate().orderedDates._id}`}>
              <div
                className="border-4 dark:border-dark-tertiary rounded-xl py-4 px-6 flex bg-gradient-to-l from-lite-gray to-white
              hover:ring group hover:ring-gray-400 hover:ring-offset-0 transition ease-out duration-300 cursor-pointer
              dark:bg-gradient-to-l dark:from-dark-secondary dark:to-dark-tertiary"
              >
                <img
                  src={getDate().orderedDates.lesson.image}
                  className="w-40 group-hover:scale-105 duration-700 rounded-md"
                />
                <div className="w-full mr-5 sm:mr-10 dark:text-dark-secondary-title">
                  <p className="text-2xl font-bold mb-4">
                    {getDate().orderedDates.title}
                  </p>
                  <div className="flex flex-col text-lg">
                    <span className="border-b dark:border-dark-primary py-4 sm:py-8">
                      {getDate().orderedDates.teacher.fullName}
                    </span>
                    <span className="py-4 sm:py-6">
                      {getDate().orderedDates.cost} ت
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
        <div>
          <p className="text-2xl lg:text-3xl font-bold mr-5 lg:mr-10 mb-2 lg:mb-6 text-gray-500 dark:text-dark-secondary-title">
            دوره های پیشنهادی :
          </p>
          {loading ? (
            <>
              <OfferCourseSkelton />
              <OfferCourseSkelton />
            </>
          ) : (
            <>
              {data.slice(0, 2).map((item) => (
                <Link to={`/courses/${item._id}`}>
                  <div
                    className="border-4 dark:border-dark-tertiary rounded-xl py-4 px-6 flex bg-gradient-to-l from-lite-gray to-white mb-6
              hover:ring group hover:ring-gray-400 hover:ring-offset-0 transition ease-out duration-300 cursor-pointer
              dark:bg-gradient-to-l dark:from-dark-secondary dark:to-dark-tertiary"
                  >
                    <img
                      src={item.lesson.image}
                      className="w-20 group-hover:scale-105 duration-700 rounded-md"
                    />
                    <div className="w-full mr-5 md:mr-10 dark:text-dark-secondary-title">
                      <p className="text-xl md:text-2xl font-bold mb-4">
                        {item.title}
                      </p>
                      <div className="sm:flex justify-between text-lg">
                        <div>{item.teacher.fullName}</div>
                        <div>{item.cost} ت</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
