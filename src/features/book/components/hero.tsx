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
              <div className="my-8">
                <p className="text-lg text-black max-w-[450px] mx-auto lg:mx-0">
                  20 Things to Do Before 20 is a compendium of the finest
                  principles and secrets that have shaped the greatest
                  individuals in history. The secret has always been to learn
                  from people with experience.
                </p>
                <p className="text-lg text-black mt-4 mb-1 max-w-[450px] mx-auto lg:mx-0">
                  Are you ready to learn these secrets and watch as your life
                  soars to levels of achievement you could never have imagined?
                </p>
              </div>
              <button className="py-2.5 px-8 bg-primary text-white text-lg rounded-md w-fit mx-auto lg:mx-0">
                Buy Ebook Now
              </button>
            </div>

            <div className="flex w-[90%] mx-auto my-12 min-h-[450px] md:min-h-[550px] max-w-[400px]">
              <Image
                src="/book-one.jpg"
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
