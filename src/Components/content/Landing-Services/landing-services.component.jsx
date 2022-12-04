import React, { useState } from "react";
import { FieldName } from "../../common/field-name-component/field-name.component";
// import getAllCategory from "./../../../Core/services/api/getAllCategory/all-category-api";

const LandingServices = () => {
  // const [category] = useState(getAllCategory);

  return (
    <section className="dark:bg-dark-primary">
      <div className="container m-auto">
        <div className="text-center m-auto pt-40 lg:pt-20 md:pt-2 sm:pt-2 pb-10">
          <div data-aos="fade-down">
            <FieldName
              showH2
              showP
              classH2Field="text-neutral-900 font-bold sm:text-3xl text-xl m-auto dark:text-dark-primary-title"
              title="خدمات ما"
              classPfield="text-slate-400 sm:text-base text-xs mt-2 dark:text-dark-text"
              field="خدماتی در اختیار شما میگذاریم که"
            />
          </div>

          <div className="xl:bg-lines-dash lg:bg-white bg-no-repeat md:h-96 grid grid-cols-4 mt-12 lg:mt-36 md:mt-28 sm:mt-28 dark:bg-dark-primary">
            <div className="sm:col-span-1 col-span-2" data-aos="fade-down">
              <div
                className="sm:w-32 sm:h-32 w-28 h-28 xl:mt-14 lg:mt-2 mt-5 rounded-xl bg-lite-pink dark:bg-dark-secondary m-auto 
            hover:scale-110 duration-300 ease-in-out group"
              >
                <img
                  className="m-auto sm:pt-8 pt-7 sm:w-16 w-14 group-hover:rotate-[360deg] duration-300 ease-in-out"
                  src={require("../../../Assets/img/certificate.png")}
                  alt="certificate"
                />
              </div>
              <FieldName
                showH2
                showP
                classH2Field="font-bold sm:text-lg text-md m-auto mt-4 dark:text-dark-secondary-title"
                title="مدرک معتبر"
                classPfield="w-36 m-auto mt-3 sm:text-md text-sm text-gray-500 dark:text-dark-text"
                field="از طریق مجموعه ما میتونی مدرک معتبر بگیری"
              />
            </div>
            <div className="sm:col-span-1 col-span-2" data-aos="fade-up">
              <div
                className="sm:w-32 sm:h-32 w-28 h-28 xl:mt-14 lg:mt-2 mt-5 rounded-xl bg-lite-pink dark:bg-dark-secondary m-auto 
            hover:scale-110 duration-300 ease-in-out group"
              >
                <img
                  className="m-auto sm:sm:pt-8 pt-7 sm:w-16 w-14 group-hover:rotate-[360deg] duration-300 ease-in-out"
                  src={require("../../../Assets/img/opportunity.png")}
                  alt="opportunity"
                />
              </div>
              <FieldName
                showH2
                showP
                classH2Field="font-bold sm:text-lg text-md m-auto mt-4 dark:text-dark-secondary-title"
                title="فرصت شغلی"
                classPfield="w-36 m-auto mt-3 sm:text-md text-sm text-gray-500 dark:text-dark-text"
                field="با ارتباط برقرار کردن با ما این فرصت شغلی برات ایجاد میشه"
              />
            </div>
            <div className="sm:col-span-1 col-span-2" data-aos="fade-down">
              <div
                className="sm:w-32 sm:h-32 w-28 h-28 xl:mt-14 lg:mt-2 mt-5 rounded-xl bg-lite-pink dark:bg-dark-secondary m-auto 
            hover:scale-110 duration-300 ease-in-out group"
              >
                <img
                  className="m-auto sm:pt-8 pt-7 sm:w-16 w-14 group-hover:rotate-[360deg] duration-300 ease-in-out"
                  src={require("../../../Assets/img/online-business.png")}
                  alt="opportunity"
                />
              </div>
              <FieldName
                showH2
                showP
                classH2Field="font-bold sm:text-lg text-md m-auto mt-4 dark:text-dark-secondary-title"
                title="مشاوره"
                classPfield="w-36 m-auto mt-3 sm:text-md text-sm text-gray-500 dark:text-dark-text"
                field="اگه جایی برات مبهم بود میتونی با مشاوران ما درمیان بزاری"
              />
            </div>
            <div className="sm:col-span-1 col-span-2" data-aos="fade-up">
              <div
                className="sm:w-32 sm:h-32 w-28 h-28 xl:mt-14 lg:mt-2 mt-5 rounded-xl bg-lite-pink dark:bg-dark-secondary m-auto 
            hover:scale-110 duration-300 ease-in-out group"
              >
                <img
                  className="m-auto sm:pt-8 pt-7 sm:w-16 w-14 group-hover:rotate-[360deg] duration-300 ease-in-out"
                  src={require("../../../Assets/img/exam.png")}
                  alt="opportunity"
                />
              </div>
              <FieldName
                showH2
                showP
                classH2Field="font-bold sm:text-lg text-md m-auto mt-4 dark:text-dark-secondary-title"
                title="امتحان"
                classPfield="w-36 m-auto mt-3 sm:text-md text-sm text-gray-500 dark:text-dark-text"
                field="برای ثبت نام و تعیین سطحت باید یه سری امتحان هارو بدی"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
