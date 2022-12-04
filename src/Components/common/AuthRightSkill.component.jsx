import React from "react";
import { FieldName } from "./field-name-component/field-name.component";
import { BsFillCircleFill, BsDashLg, BsCheckLg } from "react-icons/bs";
import { matchRoutes, useLocation } from "react-router-dom";
import AuthRightSkillLogo from "../common/Animate-AuthRightSkill-SVG/animate-auth-right-skill-svg.component";

const AuthRightSkill = ({ currentPage }) => {
  const routes = [{ path: "/forget-pass" }, { path: "/sign-up" }];

  const useCurrentPath = () => {
    const location = useLocation();
    const [{ route }] = matchRoutes(routes, location);

    return route.path;
  };
  const currentPath = useCurrentPath();

  return (
    <div className="md:block hidden bg-[#F3F4F8] dark:bg-[#222326] w-[60%] h-full ">
      <div className="flex justify-start mr-10 mt-28">
        <div className="rounded-full border-[3px] border-[#7A58C9] p-3 w-fit h-fit relative">
          {currentPage === 0 ? (
            <BsFillCircleFill className="text-xl text-[#7A58C9]" />
          ) : (
            <div className="p-[10px]">
              <AuthRightSkillLogo />
            </div>
          )}
        </div>
        <div className="flex flex-col mr-3">
          <FieldName
            showH2
            showP
            title={
              currentPath === "/forget-pass" ? "ثبت ایمیل" : "اطلاعات عمومی"
            }
            field={
              currentPath === "/forget-pass"
                ? "ایمیل مربوط خود را وارد کنید"
                : "اطلاعات عمومی خود را وارد کنید"
            }
            classH2Field={`text-2xl ${
              currentPage === 0
                ? "text-[#7A58C9]"
                : "text-black dark:text-white"
            }`}
            classPfield={`text-base  ${
              currentPage === 0 ? "text-[#7A58C9]" : "text-[#8D8D8D]"
            }`}
          />
        </div>
      </div>
      <div className="w-3 h-24 rotate-90 mr-[58px]">
        <BsDashLg className="w-full h-full scale-x-[6] scale-y-75 text-[#7A58C9]" />
      </div>
      <div className="flex justify-start mr-10">
        <div
          className={`rounded-full border-[3px] relative ${
            currentPage === 1
              ? "border-[#7A58C9]"
              : currentPage > 1
              ? "border-[#7A58C9]"
              : "border-[#8D8D8D]"
          }  p-3 w-fit h-fit`}
        >
          {currentPage === 1 ? (
            <BsFillCircleFill className="text-xl text-[#7A58C9]" />
          ) : currentPage > 1 ? (
            <div className="p-[10px]">
              <AuthRightSkillLogo />
            </div>
          ) : (
            <BsFillCircleFill className="text-xl text-[#8D8D8D]" />
          )}
        </div>
        <div className="flex flex-col mr-3">
          <FieldName
            showH2
            showP
            title={
              currentPath === "/forget-pass" ? "بررسی ایمیل" : "اطلاعات شخصی"
            }
            field={
              currentPath === "/forget-pass"
                ? "کد عبور را وارد کنید"
                : "اطلاعات شخصی خود را وارد کنید"
            }
            classH2Field={`text-2xl ${
              currentPage === 1
                ? "text-[#7A58C9]"
                : "text-black dark:text-white"
            }`}
            classPfield={`text-base  ${
              currentPage === 1 ? "text-[#7A58C9]" : "text-[#8D8D8D]"
            }`}
          />
        </div>
      </div>
      <div className="w-3 h-24 rotate-90 mr-[58px]">
        <BsDashLg className="w-full h-full scale-x-[6] scale-y-75 text-[#7A58C9]" />
      </div>
      <div className="flex justify-start mr-10">
        <div
          className={`rounded-full border-[3px] relative ${
            currentPage === 2
              ? "border-[#7A58C9]"
              : currentPage > 2
              ? "border-[#7A58C9]"
              : "border-[#8D8D8D]"
          }  p-3 w-fit h-fit`}
        >
          {currentPage === 2 ? (
            <BsFillCircleFill className="text-xl text-[#7A58C9]" />
          ) : currentPage > 2 ? (
            <div className="p-[10px]">
              <AuthRightSkillLogo />
            </div>
          ) : (
            <BsFillCircleFill className="text-xl text-[#8D8D8D]" />
          )}
        </div>
        <div className="flex flex-col mr-3">
          <FieldName
            showH2
            showP
            title={
              currentPath === "/forget-pass"
                ? "تایید رمز عبور جدید"
                : "انتخاب رمز عبور"
            }
            field={
              currentPath === "/forget-pass"
                ? "رمز عبور جدید را وارد کنید"
                : "رمز عبور را وارد کنید"
            }
            classH2Field={`text-2xl ${
              currentPage === 2
                ? "text-[#7A58C9]"
                : "text-black dark:text-white"
            }`}
            classPfield={`text-base  ${
              currentPage === 2 ? "text-[#7A58C9]" : "text-[#8D8D8D]"
            }`}
          />
        </div>
      </div>
      <div className="w-3 h-24 rotate-90 mr-[58px]">
        <BsDashLg className="w-full h-full scale-x-[6] scale-y-75 text-[#7A58C9]" />
      </div>

      <div className="flex justify-start mr-10">
        <div
          className={`rounded-full border-[3px] relative ${
            currentPage === 3
              ? "border-[#00C9A3]"
              : currentPage > 3
              ? "border-[#7A58C9]"
              : "border-[#8D8D8D]"
          }  p-3 w-fit h-fit`}
        >
          {currentPage === 3 ? (
            <div className="p-[10px]">
              <AuthRightSkillLogo />
            </div>
          ) : (
            <BsFillCircleFill className="text-xl text-[#8D8D8D]" />
          )}
        </div>
        <div className="flex flex-col mr-3">
          <FieldName
            showH2
            showP
            title="انجام شد"
            field={
              currentPath === "/forget-pass"
                ? "رمز عبور جدید تایید شد"
                : "اطلاعات وارد شده ثبت شد"
            }
            classH2Field={`text-2xl ${
              currentPage === 3
                ? "text-[#00C9A3]"
                : "text-black dark:text-white"
            }`}
            classPfield={`text-base  ${
              currentPage === 3 ? "text-[#00C9A3]" : "text-[#8D8D8D]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthRightSkill;
