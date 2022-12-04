import React from "react";
import { Outlet } from "react-router-dom";
import ContactItem from "../../Components/content/ContactUs/ContactItem";
import ContactUsItems from "../../Core/services/Fake Service/ContactUsItems";

const ContactUs = () => {
  return (
    <div className="dark:bg-dark-primary">
      <div className="container mx-auto">
        <div className="xl:mx-44">
          <div className="pt-16 mb-10">
            <h1 className="text-center text-3xl font-black mb-6 text-deep-purple dark:text-dark-primary-title">
              در تماس باشید!
            </h1>
            <p className="text-center text-deep-purple text-lg dark:text-dark-secondary-title">
              از طریق موارد زیر می توانید با ما در تماس باشید و اطلاع رسانی
              کنید.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
            {ContactUsItems.map((item) => (
              <ContactItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                to={item.path}
              />
            ))}
          </div>
          <div className="rounded-3xl mt-8 py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
