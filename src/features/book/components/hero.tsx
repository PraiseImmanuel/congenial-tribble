import Wrapper from "@/features/shared/wrapper";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-right-top pt-[120px] md:pt-[25px] pb-[70px]">
        <Wrapper>
          <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-center lg:items-center min-h-screen">
            <div className="flex flex-col my-6">
              <h1 className="text-black font-[700] text-[52px] lg:text-[56px] leading-[1.15] max-w-[560px] mx-auto lg:mx-0">
                20 Things to do <span className="text-primary ">before 20</span>
              </h1>

              <p className="text-lg text-black my-8 max-w-[450px] mx-auto lg:mx-0">
                20 Things to do before 20 is a compilation of principles and
                keys that have worked over the years. Success follows
                principles. Learn the principles and produce the result.
              </p>
              <button className="py-2.5 px-8 bg-primary text-white text-lg rounded-md w-fit mx-auto lg:mx-0">
                Buy Ebook Now
              </button>
            </div>

            <div className="flex w-[90%] mx-auto my-12 min-h-[450px] md:min-h-[550px] max-w-[400px]">
              <Image
                src="/hero-image.jpg"
                className="rounded-ss-[60px] md:rounded-ss-[80px] w-full object-cover "
                width={600}
                height={600}
                alt="20 Things to do before 20"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Hero;
