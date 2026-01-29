import { images } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "../home/ProjectCard";

const Main = () => {
  return (
    <div className="pt-30 pb-20 mt-10 px-5 rounded-[50px] md:rounded-[20px] bg-[#E3E8ED]">
      <div className="text-center text-4xl md:text-6xl font-light max-w-[800px] mx-auto text-gray-800">
        The Design Of Success
      </div>
      <div className="sm:flex justify-center items-center gap-5">
        <div className="   pt-4 flex items-center justify-center">
          <Image
            className="rounded-full w-10 h-10 z-20 border-2 border-gray-100 -mr-3 bg-cover"
            width={40}
            height={20}
            src={images.personProfile}
            alt="person"
          />{" "}
          <Image
            className="rounded-full w-10 h-10 bg-cover z-19 border-2 border-gray-100 -mr-3"
            width={40}
            height={20}
            src={images.personProfile}
            alt="person"
          />{" "}
          <Image
            className="rounded-full w-10 h-10 bg-cover z-18 border-2 border-gray-100 -mr-3"
            width={40}
            height={20}
            src={images.personProfile}
            alt="person"
          />{" "}
        </div>
        <div className="text-center  mt-5 text-md font-light text-gray-800">
          Trusted by <span className="font-semibold"> 5,000 +</span> Audience
          worldwide
        </div>
      </div>
      <div className="mt-5 flex gap-3 sm:gap-10 items-center justify-center">
        <div className="btn-dark flex justify-center items-center gap-2">
          <div className="sm:w-6 w-4">
            <svg
              className="-rotate-45  hover:rotate-0  transform ease-in duration-200"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H13.25V12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M13.25 12.75V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25V12.75Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <Link href={"/contact"}>
            {" "}
            <div className="text-sm text-nowrap"> Contact Me</div>
          </Link>{" "}
        </div>
      </div>
      <div className=" max-w-[1000px] mx-auto grid grid-cols-12 max-sm:px-4 gap-4 mt-15">
        <div className="md:col-span-6 col-span-12">
          {" "}
          <ProjectCard image={images.worldtone} text="World Tone" />
        </div>
        <div className="md:col-span-6 col-span-12">
          {" "}
          <ProjectCard image={images.wisemarket} text="Wise Market" />
        </div>
        <div className="md:col-span-6 col-span-12">
          {" "}
          <ProjectCard image={images.yimpy} text="Yimpy" />
        </div>
        <div className="md:col-span-6 col-span-12">
          {" "}
          <ProjectCard image={images.mylink} text="Mylink" />
        </div>
        <div className="md:col-span-6 col-span-12">
          {" "}
          <ProjectCard
            image={images.priceinpakistan}
            text="Price in Pakistan"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
