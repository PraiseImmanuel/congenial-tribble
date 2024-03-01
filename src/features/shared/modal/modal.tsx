"use client";
import React from "react";
import { motion } from "framer-motion";
import ClientDetails from "./client-details";

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ setModalOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`bg-[#f1f1f1] min-h-screen z-10 fixed top-0 left-0 w-full justify-center items-center flex`}
    >
      <ClientDetails setModalOpen={setModalOpen} />
    </motion.div>
  );
};

export default Modal;
