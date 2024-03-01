"use client";
import React, { useState } from "react";
import Hero from "./components/hero";
import Layout from "./components/layout";
import FromAuthor from "./components/from-author";
import Modal from "../shared/modal/modal";

const Book = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Layout>
        <Hero setModalOpen={setModalOpen} />
        <FromAuthor setModalOpen={setModalOpen} />
      </Layout>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
};

export default Book;
