import React, { useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

const CustomTab = ({ children, tabs }) => {
  const [tabList, setTabList] = useState(tabs);

  const handleTabClick = (id) => {
    setTabList(
      tabList.map((tab) => {
        return tab.id === id
          ? { ...tab, active: true }
          : { ...tab, active: false };
      })
    );
  };

  return (
    <>
      <Tabs className="rounded-lg mt-4 mx-3 lg:mx-10">
        <TabList className="inline-flex pt-2 pr-4 lg:pr-12 w-full">
          {tabList.map((tab) => (
            <Tab
              key={tab.id}
              className="tab"
              selectedClassName="tab-active bg-lite-gray dark:bg-dark-primary"
              disabledClassName="tab-disabled"
              onClick={() => handleTabClick(tab.id)}
            >
              <img
                src={tab.active ? tab.activeIcon : tab.inactiveIcon}
                className="w-6 inline ml-3"
              />
              <span
                className={`${
                  tab.active
                    ? 'text-lite-purple'
                    : 'text-gray-400 cursor-pointer'
                }`}
              >
                {tab.title}
              </span>
            </Tab>
          ))}
        </TabList>
        <div className="bg-lite-gray border-2 dark:border-dark-tertiary px-2 pt-10 lg:px-4 lg:py-11 rounded-xl relative mb-10 dark:bg-dark-primary">
          <div className="faq-container pl-2 lg:pl-4">{children}</div>
        </div>
      </Tabs>
    </>
  );
};

export default CustomTab;
