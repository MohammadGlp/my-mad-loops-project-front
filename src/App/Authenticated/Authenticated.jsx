import React from "react";

import { Routes, Route } from "react-router-dom";

import PublicRoute from "../PublicRoute/PublicRoute";
import UserPanel from "../../Screens/Panel/UserPanel";
import Dashboard from "../../Components/content/Panel/Dashboard";
import MyCourses from "../../Components/content/Panel/MyCourses";
import CoursesList from "../../Components/content/Panel/CoursesList";
import EditProfile from "../../Components/content/Panel/EditProfile";
import MyBookMark from "../../Components/content/Panel/MyBookMark";
import EditPassword from "../../Components/content/Panel/EditPassword";
import { selectCurrentUser } from "./../../store/auth/authSlice";
import { useSelector } from "react-redux";
import { selectSessionCurrentUser } from "../../store/auth/authSessionSlice";
import AdminAuth from "../AdminAuthenticated/AdminAuthenticated";

const Authenticated = (props) => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);

  return (
    <Routes>
      <Route path="*" element={<PublicRoute setTheme={props.setTheme} />} />
      {currentUser?.role || currentSessionUser?.role === "student" ? (
        <Route path="user-panel" element={<UserPanel />}>
          <Route index element={<Dashboard />} />
          <Route path="myCourses" element={<MyCourses />} />
          <Route path="courseList" element={<CoursesList />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="bookmark" element={<MyBookMark />} />
          <Route path="editPassword" element={<EditPassword />} />
        </Route>
      ) : null}
      <Route path="/adminAuth/:token" element={<AdminAuth />} />
    </Routes>
  );
};

export default Authenticated;
