"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSending: boolean;
}

const Notifications = ({ isSending, setModalOpen }: IProps) => {
  console.log(isSending);
  return (
    <div
      className="flex flex-col justify-center transition-all items-center
    px-6 pb-12 pt-6 lg:px-8 bg-white w-[90%] max-w-[425px] rounded-[16px]"
    >
      <div>
        {isSending ? (
          <div className="text-center">
            <Image
              src="/loading.gif"
              alt="loading"
              className="mx-auto"
              width={120}
              height={120}
            />
            <p className="-mt-3">Processing Delivery...</p>
          </div>
        ) : (
          <div className="text-center">
            <Image
              src="/loading.gif"
              alt="loading"
              width={120}
              height={120}
              className="mx-auto"
            />
            <h2 className="-mt-3 text-xl font-[600]">Congratulations!</h2>
            <p className="">Book has been sent successfully to your email.</p>

            <button
              onClick={() =>
                setModalOpen((prevModalOpen) => (prevModalOpen = false))
              }
              className="mt-4 inline-block rounded-md bg-primary px-7 py-2.5 text-sm font-semibold 
              text-white shadow-sm hover:bg-primary/70 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
