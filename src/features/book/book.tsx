import React from "react";
import Wrapper from "../shared/wrapper";
import Image from "next/image";
import Hero from "./components/hero";
import Layout from "./components/layout";
import FromAuthor from "./components/from-author";

const Book = () => {
  return (
    <Layout>
      <Hero />
      <FromAuthor />
    </Layout>
  );
};

export default Book;
