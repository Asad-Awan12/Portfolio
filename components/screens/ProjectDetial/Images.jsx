import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import Line from "../home/Line";

const Images = ({ description, imagess }) => {
  return (
    <div className="mt-20 ">
      <div className="text-gray-700 my-10">{description[1]}</div>
      <div className="text-gray-700 my-5">
        With its robust AI-powered features and user-friendly interface, Alter
        has redefined how businesses generate interest, engage with their
        audience, and streamline their SaaS growth.
      </div>
      <div className="relative w-full my-10 h-[40vh] sm:h-[100vh]">
        <Image
          src={imagess[0]}
          alt="detail"
          fill
          className="sm:object-cover  object-contain   border border-gray-200 bg-white p-4 rounded-2xl shadow-xl shadow-gray-300"
        />
      </div>
      <div className="text-gray-700 my-10">{description[2]}</div>
      <div className="relative w-full my-10 h-[40vh] sm:h-[100vh]">
        <Image
          src={images.detail}
          alt="detail"
          fill
          className="sm:object-cover  object-contain   border border-gray-200 bg-white p-4 rounded-2xl shadow-xl shadow-gray-300"
        />
      </div>
      <div className="text-gray-700 my-10">{description[3]}</div>
      <div className="text-gray-700 my-5">W {description[4]}</div>
      <div className="relative w-full my-10 h-[40vh] sm:h-[100vh]">
        <Image
          src={images.detail}
          alt="detail"
          fill
          className="sm:object-cover  object-contain   border border-gray-200 bg-white p-4 rounded-2xl shadow-xl shadow-gray-300"
        />
      </div>
      <div className="text-gray-700 my-10">{description[2]}</div>
      <div className="text-gray-700 my-5">{description[0]}</div>
    </div>
  );
};

export default Images;
