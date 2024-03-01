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

const links = ["facebook", "instagram", "twitter"];
const linksSvg = [
  <RiFacebookBoxLine />,
  <RiInstagramLine />,
  <RiTwitterXFill />,
];
const linksRoute = [
  "https://www.facebook.com/williamsobaedo.greatone",
  "https://www.instagram.com/williamsobaedo/",
  "https://twitter.com/obaedo_williams",
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
          <p className="text-2xl font-[700] text-primary">WO</p>

          <div className="hidden md:flex items-center gap-x-5 text-lg text-primary">
            {linksSvg.map((item, index) => (
              <Link
                key={index}
                href={linksRoute[index]}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent transition-all duration-300"
              >
                {item}
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
                      href={linksRoute[index]}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-accent transition-all duration-300"
                    >
                      {item}
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
