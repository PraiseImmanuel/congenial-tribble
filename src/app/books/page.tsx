import Book from "@/features/book/book";
import { Metadata } from "next";
import React from "react";

const BooksPage = () => {
  return (
    <>
      <Book />
    </>
  );
};

export default BooksPage;

export const metadata: Metadata = {
  title: "Williams Obaedo | Books",
  description:
    "Williams Obaedo is also very passionate about the boy child and the need for total men. He runs an organisation called Guys Mentorship Networks, which aims to raise young boys into better sons, brothers, husbands, fathers, friends, leaders, and total men in general.",
};
