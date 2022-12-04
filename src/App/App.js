import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Toastify from "../Components/common/Toast/toast";
import UnAuthenticated from "./UnAuthenticated/UnAuthenticated";
import Authenticated from "./Authenticated/Authenticated";
import { selectCurrentUser } from "./../store/auth/authSlice";
import BackToTop from "./../Components/common/BackToTop/BackToTop";
import { selectSessionCurrentUser } from "../store/auth/authSessionSlice";

const App = () => {
  const user = useSelector(selectCurrentUser);
  const sessionUser = useSelector(selectSessionCurrentUser);

  const [isDarkMode, setIsDarkMode] = useState(true);

  const { pathname } = useLocation();
  const ref = useRef(document.documentElement);
  const Wrapper = ({ children }) => {
    useLayoutEffect(() => {
      ref.current.scrollTo(0, 0);
    }, [pathname]);
    return children;
  };

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "45b6a943-f35f-4ebe-a62b-c31ea05300b1";

    window.$crisp.push([
      "set",
      "user:email",
      [user?.email || sessionUser?.email],
    ]);
    (function () {
      let d = document;
      let s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      setIsDarkMode(true);
    } else {
      localStorage.theme = "light";
      setIsDarkMode(false);
    }
  }, []);

  const setTheme = () => {
    localStorage.theme === "dark"
      ? (localStorage.theme = "light")
      : (localStorage.theme = "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`App transition-colors duration-1000 ${localStorage.theme}`}
    >
      <Toastify />
      <Wrapper>
        {user || sessionUser ? (
          <Authenticated setTheme={setTheme} />
        ) : (
          <UnAuthenticated setTheme={setTheme} />
        )}
      </Wrapper>
      <BackToTop />
    </div>
  );
};

export default App;
