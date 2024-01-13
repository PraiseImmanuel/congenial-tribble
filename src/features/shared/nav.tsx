import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import Wrapper from "./wrapper";

const Nav = () => {
  return (
    <div className="py-2 md:py-3 shadow-sm bg-white fixed w-full">
      <Wrapper>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-[700] text-primary">WO</p>

          <div className=" md:hidden">
            <Hamburger size={24} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Nav;
