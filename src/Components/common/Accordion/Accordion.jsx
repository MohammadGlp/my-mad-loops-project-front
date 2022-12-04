import React from 'react';

const Accordion = ({
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
  children,
}) => {
  const { id, title, description, active } = item;

  return (
    <div className="mb-2" dir={dir}>
      <div
        onClick={() => onToggle(id)}
        className={`${
          active ? headerActiveStyle : headerInactiveStyle
        } ${headerMainStyle} flex justify-between items-center text-gray-700 cursor-pointer`}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-xl">{title}</h4>
        </div>
        <span>{active ? activeIcon : inactiveIcon}</span>
      </div>
      <div
        className={`${
          active ? bodyActiveStyle : bodyInactiveStyle
        } ${bodyMainStyle}`}
      >
        <p className="text-xl mb-1">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
