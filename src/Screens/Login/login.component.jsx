import React from "react";
import Login from "./../../Components/content/Login/login.component";

const LoginPage = ({isDarkmode}) => {
  return (
    <section>
      <div className="m-auto w-full h-screen">
        <Login />
      </div>
    </section>
  );
};

export default LoginPage;
