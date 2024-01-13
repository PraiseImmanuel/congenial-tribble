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
              leading-[1.15] max-w-[560px] mx-auto lg:mx-0"
              >
                From the{" "}
                <span className="text-primary">Author&apos;s Desk</span>
              </h1>

              <p className="text-lg text-black my-8 max-w-[450px] mx-auto lg:mx-0">
                20 Things to do before 20 is a compilation of principles and
                keys that have worked over the years. Success follows
                principles. Learn the principles and produce the result.
              </p>
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
