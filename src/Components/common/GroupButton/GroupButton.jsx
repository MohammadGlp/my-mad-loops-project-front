import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const GroupButton = ({ items, width, onSorting }) => {
  const [openGroupBtn, setOpenGroupBtn] = useState(false);
  const [selectedGroupBtn, setSelectedGroupBtn] = useState(
    items[0].title
  );

  const handleGroupBtn = (title) => {
    setSelectedGroupBtn(title);
    setOpenGroupBtn(false);
  };

  const GroupBtnClassLg = (item, index) => {
    const classList = [];
    classList.push(
      selectedGroupBtn === item ? 'groupBtn-active' : ''
    );
    classList.push(index === 0 ? 'groupBtn-right' : '');
    classList.push(index === items.length - 1 ? 'groupBtn-left' : '');
    return classList.join(' , ');
  };

  const GroupBtnClassSm = (item, index) => {
    const classList = [];
    classList.push(index === items.length - 1 ? 'border-0' : '');
    return classList.join(' , ');
  };

  const sortAndSet = (item) => {
    handleGroupBtn(item.title);
    onSorting(item.type);
  };

  return (
    <>
      <div className="groupBtn-lg">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`groupBtn ${GroupBtnClassLg(
              item.title,
              index
            )} ${width}`}
            onClick={() => sortAndSet(item)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="groupBtn-sm text-gray-500 mx-3">
        <button
          className="groupBtn-sm-btn"
          onClick={() => setOpenGroupBtn(!openGroupBtn)}
        >
          <span>{selectedGroupBtn}</span>
          <span>
            <FaAngleDown />
          </span>
        </button>
        <div
          className={`groupBtn-sm-div absolute w-[95%] left-0 right-0 mx-auto bg-white mt-5 ${
            openGroupBtn ? 'block' : 'hidden'
          }`}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`groupBtn-sm-item pr-5 z-50 ${GroupBtnClassSm(
                item.type,
                index
              )}`}
              onClick={() => sortAndSet(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GroupButton;
