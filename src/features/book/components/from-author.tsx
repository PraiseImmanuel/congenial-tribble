import Wrapper from "@/features/shared/wrapper";
import Image from "next/image";
import React from "react";

const FromAuthor = () => {
  return (
    <>
      <div className="bg-second bg-no-repeat bg-right-top py-16">
        <Wrapper>
          <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-center lg:items-center">
            <div className="flex flex-col my-6">
              <h1
                className="text-black font-[700] text-[52px] lg:text-[56px] 
              leading-[1.15] max-w-[600px] mx-auto lg:mx-0"
              >
                From the{" "}
                <span className="text-primary">Author&apos;s Desk</span>
              </h1>
              <div className="my-8">
                <p className="text-lg text-black mt-4 max-w-[550px] mx-auto lg:mx-0">
                  You can compress ten years into ten days; did you know that?
                  Yes, in ten days or less, you can acquire the same wisdom and
                  experience gained in ten years. The secret is to learn from
                  people with experience.
                </p>
                <p className="text-lg text-black mt-4 max-w-[550px] mx-auto lg:mx-0">
                  This book aims to empower young individuals with 20
                  life-changing secrets for building incredible futures. While
                  primarily targeted at those under 20, it is applicable to all
                  young people seeking a transformative life.
                </p>
                <p className="text-lg text-black mt-4 max-w-[550px] mx-auto lg:mx-0">
                  For individuals above 20, the book serves as a motivational
                  guide, highlighting essential actions to regain control over
                  life.
                </p>
                <p className="text-lg text-black mt-4 max-w-[550px] mx-auto lg:mx-0">
                  Additionally, it functions as a valuable mentoring resource
                  for parents, educators, religious institutions, and anyone
                  working with teenagers and young people, facilitating their
                  journey toward success and extraordinary adulthood.
                </p>
              </div>
              <button className="hidden lg:block py-2.5 px-8 bg-primary text-white text-lg rounded-md w-fit mx-auto lg:mx-0">
                Buy Ebook Now
              </button>
            </div>
            <div className="">
              <div className="flex w-[90%] mx-auto my-12 min-h-[450px] md:min-h-[550px] max-w-[400px] mb-10">
                <Image
                  src="/author's-image.jpg"
                  className="rounded-[60px] md:rounded-[80px] w-full object-cover"
                  width={600}
                  height={600}
                  alt="wiliams obaedo"
                />
              </div>
              <button className="block lg:hidden py-2.5 px-8 bg-primary text-white text-lg rounded-md w-fit mx-auto lg:mx-0">
                Buy Ebook Now
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default FromAuthor;
