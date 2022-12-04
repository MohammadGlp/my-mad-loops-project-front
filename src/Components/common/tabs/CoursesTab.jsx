import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { TabPanel } from 'react-tabs';
import CommentsTab from './CommentsTab';
import CustomTab from './CustomTab';
import Accordion from '../Accordion/Accordion';
import tabData from '../../../Core/services/Fake Service/CourseTabList';
import faqList from '../../../Core/services/Fake Service/faqs';

const CoursesTab = ({ courseId }) => {
  const [faq, setFaq] = useState(faqList);
  const handleToggle = (id) => {
    //this func is for every faq to be open or close
    setFaq(
      faq.map((item) => {
        return item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: item.active };
      })
    );
  };
  return (
    <CustomTab tabs={tabData}>
      <TabPanel>
        {faq.map((faq) => (
          <Accordion
            key={faq.id}
            item={faq}
            onToggle={handleToggle}
            dir="rtl"
            headerActiveStyle="border-b-0 rounded-bl-none rounded-br-none dark:border-dark-tertiary"
            headerInactiveStyle="border-b-2 rounded-bl-xl rounded-br-xl delay-[300ms] dark:border-dark-tertiary"
            headerMainStyle="p-4 bg-white border-t-2 border-r-2 border-l-2 border-gray-200 w-full dark:border-dark-tertiary
                    rounded-tl-xl rounded-tr-xl dark:bg-dark-secondary dark:text-dark-secondary-title"
            bodyMainStyle="w-full px-4 bg-white rounded-bl-xl rounded-br-xl border-r-2 border-l-2 dark:border-dark-tertiary dark:bg-dark-secondary text-gray-400 dark:text-dark-text"
            bodyActiveStyle="max-h-[100rem] overflow-hidden border-b-2 transition-[max-height] ease-in-out duration-300"
            bodyInactiveStyle="max-h-[0rem] overflow-hidden border-b-0 transition-[max-height,border] ease-in-out duration-[300ms,350ms]"
            activeIcon={<FaMinus />}
            inactiveIcon={<FaPlus />}
          />
        ))}
      </TabPanel>
      <TabPanel>
        <CommentsTab id={courseId} />
      </TabPanel>
    </CustomTab>
  );
};

export default CoursesTab;
