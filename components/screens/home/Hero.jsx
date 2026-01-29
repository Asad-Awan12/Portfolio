import { images } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div className="pt-20  max-sm:px-4 ">
      <div>
        <div className="flex gap-4 justify-center items-center">
          <div className="w-[89px] h-[85px] overflow-hidden rounded-xl">
            <Image
              src={images.personProfile}
              alt="Asad"
              width={89}
              height={85}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="lg:text-8xl text-4xl sm:text-6xl italic bg-gradient-to-b from-[#0E1C29] to-[rgba(69,83,96,0.5)] bg-clip-text text-transparent">
            I'm Muhammad Asad
          </div>
        </div>
        <div className="flex gap-4  justify-center items-center">
          <div className="lg:text-8xl text-3xl sm:text-5xl italic bg-gradient-to-b from-[#0E1C29] to-[rgba(69,83,96,0.5)] bg-clip-text text-transparent">
            Mern Developer
          </div>

          <div className="w-[89px] h-[85px] overflow-hidden rounded-xl">
            <Image
              src={images.sky}
              alt="Asad"
              width={89}
              height={85}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[89px] h-[85px] max-lg:hidden overflow-hidden rounded-xl">
            <Image
              src={images.coffie}
              alt="Asad"
              width={89}
              height={85}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <p className="md:text-lg  text-sm mx-auto  text-center w-11/12 lg:w-4/12 lg:mt-10 mt-5  text-gray-600">
          I specialize in creating thoughtful and impactful products,
          collaborating with startups and leading brands
        </p>
        <div className="mt-10 flex gap-3 sm:gap-10 items-center justify-center">
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
            <div className="text-sm text-nowrap"> Resume</div>
          </div>

          <div className="btn-light flex justify-center items-center gap-2">
            <div className="sm:w-6 w-4">
              <svg
                className="rotate-45 hover:rotate-0  transform ease-in duration-200 "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                    d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L13.5 11.5607L17.4697 15.5303C17.6842 15.7448 18.0068 15.809 18.287 15.6929C18.5673 15.5768 18.75 15.3033 18.75 15V6C18.75 5.58579 18.4142 5.25 18 5.25L9 5.25C8.69665 5.25 8.42318 5.43273 8.30709 5.71299C8.19101 5.99324 8.25517 6.31583 8.46967 6.53033L12.4393 10.5L5.46967 17.4697Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <Link href={"/projects"}>
              <div className="text-sm text-nowrap">See Project</div>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
