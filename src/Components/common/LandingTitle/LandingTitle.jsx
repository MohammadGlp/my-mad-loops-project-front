import React from 'react';

const LandingTitle = ({ title, children, className }) => {
  return (
    <div className={`text-center ${className}`}>
      <h5 className="text-3xl font-black dark:text-dark-primary-title">
        {title}
      </h5>
      <p className="text-gray-500 dark:text-dark-text">{children}</p>
    </div>
  );
};

export default LandingTitle;
