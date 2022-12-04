import React from "react";

const CoursesAccordion = ({
  item,
  onToggle,
  dir,
  headerActiveStyle,
  headerInactiveStyle,
  headerMainStyle,
  bodyMainStyle,
  bodyActiveStyle,
  bodyInactiveStyle,
  activeIcon,
  inactiveIcon,
  active,
  children,
}) => {
  return (
    <div className="mb-2" dir={dir}>
      <div
        onClick={() => onToggle()}
        className={`${
          active ? headerActiveStyle : headerInactiveStyle
        } ${headerMainStyle} flex justify-between items-center text-gray-700 cursor-pointer`}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-xl">{item}</h4>
        </div>
        <span>{active ? activeIcon : inactiveIcon}</span>
      </div>
      <div
        className={`${
          active ? bodyActiveStyle : bodyInactiveStyle
        } ${bodyMainStyle}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CoursesAccordion;
