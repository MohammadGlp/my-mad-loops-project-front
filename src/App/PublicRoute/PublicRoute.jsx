import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SingleCourse from "./../../Screens/SingleCourse/SingleCourse";
import SingleBlog from "./../../Screens/Single-Blog/single-blog.component";
import BlogsPage from "./../../Screens/Blogs/blogs-page.component";
import CoursesPage from "./../../Screens/Courses/courses-page.component";
import LandingPage from "./../../Screens/Landing/landing-page.component";
import Navigation from "../../Components/Navigation/navigation.component";
import TeacherPage from "./../../Components/content/Teacher/teacher.component";
import ContactUs from "./../../Screens/ContactUs/ContactUs";
import Call from "./../../Components/content/ContactUs/Call";
import SendMessage from "./../../Components/content/ContactUs/SendMessage";
import Location from "./../../Components/content/ContactUs/Location";
import CartPage from "./../../Components/content/Cart/cart.component";
import Footer from "./../../Components/Footer/footer.component";
import NotFoundPage from "./../../Screens/Not-Found/not-found.component";

const PublicRoute = (props) => {
  return (
    <>
      <Navigation setTheme={props.setTheme} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="courses/:id" element={<SingleCourse />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="blogs/:id" element={<SingleBlog />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="teacher/:id" element={<TeacherPage />} />
        <Route path="contactUs" element={<ContactUs />}>
          <Route index element={<Call />} />
          <Route path="message" element={<SendMessage />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRoute;
