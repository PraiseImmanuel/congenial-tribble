import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="w-[90%] max-w-[1080px] mx-auto">{children}</div>;
};

export default Wrapper;
