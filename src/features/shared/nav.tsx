"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import Wrapper from "./wrapper";
import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterXFill,
} from "react-icons/ri";

const linksSvg = [
  {
    svg: <RiFacebookBoxLine />,
    route: "https://www.facebook.com/williamsobaedo.greatone",
    name: "Facebook",
  },
  {
    svg: <RiInstagramLine />,
    route: "https://www.instagram.com/williamsobaedo/",
    name: "Instagram",
  },
  {
    svg: <RiTwitterXFill />,
    route: "https://twitter.com/obaedo_williams",
    name: "Twitter",
  },
];

const NAVLINKS = [
  {
    name: "Home",
    route: "",
  },
  {
    name: "About",
    route: "",
  },
  {
    name: "Books",
    route: "",
  },
];

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className={`py-2 md:py-5 shadow-sm  fixed w-full transition-all duration-300 ${
        !isOpen
          ? "backdrop-blur-[2px] bg-white/60"
          : "backdrop-blur-[8px] bg-white bg-opacity-95"
      }`}
    >
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-2xl font-[700] text-primary">WO</p>
            <div className="ml-12 gap-6 flex text-black/90 text-[14px] items-center transition-all duration-200">
              {NAVLINKS.map((link) => (
                <Link
                  href={link.route}
                  key={link.name}
                  className="flex gap-2 items-center lg:hover:scale-[1.15] hover:text-primary transition-all after:content-[''] after:transition-all after:w-0 hover:after:w-6 after:h-[2px] hover:after:visible after:bg-primary after:rounded-[50%] after:invisible"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-x-5 text-lg text-primary ">
            {linksSvg.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent transition-all duration-300"
              >
                {item.svg}
              </Link>
            ))}
          </div>

          <div className=" md:hidden">
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {/* Mobile Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="block md:hidden border-t border-t-primary mt-2 pt-14 min-h-screen"
            >
              <div className="flex items-center text-center flex-col gap-5 mt-10">
                <p className="text-black/60 font-[600] text-xl">
                  Connect With Me
                </p>
                <div className="flex flex-col gap-y-6 items-center">
                  {linksSvg.map((item, index) => (
                    <Link
                      key={index}
                      href={item.route}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-accent text-[#222] transition-all duration-300"
                    >
                      <span className="flex items-center">
                        {item.svg}
                        <span className="pl-1">{item.name}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Wrapper>
    </nav>
  );
};

export default Nav;
