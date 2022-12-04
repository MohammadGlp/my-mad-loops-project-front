import React from "react";

const Location = ({ locationApi }) => {
  return (
    <div data-aos="zoom-in-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.183194726343!2d53.06685958486149!3d36.59789667999073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8515a7cb36f467%3A0x8a63125684473844!2z2b7amNmI2YfYtNqv2KfZhyDYs9m-2YfYsQ!5e0!3m2!1sfa!2s!4v1663688394312!5m2!1sfa!2s"
        width="100%"
        height="600"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-3xl dark:invert"
      ></iframe>
    </div>
  );
};

export default Location;
