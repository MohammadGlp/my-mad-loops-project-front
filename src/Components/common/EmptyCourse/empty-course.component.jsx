import React, { useEffect } from "react";
import "../EmptyCourse/empty-course.styles.scss";

const EmptyCourse = ({ field , className }) => {
  useEffect(() => {
    document.querySelector(".cont_principal").className =
      "cont_principal cont_error_active";
  }, []);

  return (
    <div className="cont_principal">
      <div className="cont_error absolute 2xl:mr-[470px] xl:mr-[400px] lg:mr-[300px] lg:mt-[170px] md:mr-[260px] sm:mt-[150px] sm:mr-[220px]  mt-[130px] mr-[140px]">
        <p className={className}>{field}</p>
      </div>
      <div className="cont_aura_1"></div>
      <div className="cont_aura_2"></div>
    </div>
  );
};

export default EmptyCourse;
