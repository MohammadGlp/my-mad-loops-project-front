import React, { Component } from "react";
import "../Animate-AuthRightSkill-SVG/animate-auth-right-skill-svg.styles.scss";

const AnimateAuthRightSkill = () => {
  // const AuthLogo = document.querySelectorAll("#AuthLogo path");
  // for (let i = 0; i < AuthLogo.length; i++) {
  //   console.log(`Letter ${i} is ${AuthLogo[i].getTotalLength()}`);
  // }

  return (
    <div className="">
      <svg
        className="w-24"
        id="AuthLogo"
        width="30"
        height="22"
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="authTik"
          d="M3.66302 8.90871C2 8.5 0.662966 9.90871 1.16302 11.4088C1.66307 12.9089 8.66304 19.4087 8.66304 19.4087C10.263 21.4087 12.3297 20.242 13.163 19.4087C13.163 19.4087 26.8774 5.90872 28.1629 4.4088C29.4485 2.90887 27.1629 -0.0911254 25.163 1.40876C23.1631 2.90865 10.663 15.4088 10.663 15.4088C4.66302 8.90871 3.66302 8.90871 3.66302 8.90871Z"
          stroke="#7A58C9"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default AnimateAuthRightSkill;
