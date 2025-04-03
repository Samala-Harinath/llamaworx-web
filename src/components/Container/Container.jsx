import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div className={`w-full flex justify-center p-3 ${className}`}>
      <div className="max-w-[1440px] flex justify-center w-full">
        <div className="max-w-[75rem] w-full">{children}</div>
      </div>
    </div>
  );
};

export default Container;
