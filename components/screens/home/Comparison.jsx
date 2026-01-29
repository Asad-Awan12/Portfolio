import React from "react";
import Line from "./Line";
import Tag from "./Tag";
import Link from "next/link";

const Comparison = () => {
  return (
    <div className="pt-30 pb-20 mt-20 px-5 rounded-[50px] md:rounded-[100px] bg-[#D8DFE5]">
      <Tag text={"Process"} />
      <div className="text-center text-4xl md:text-6xl font-light text-gray-800">
        From Vision to Execution
      </div>
      <div className="text-center  mt-5 text-md font-light text-gray-800">
        A refined design process that ensures consistency, creativity for every
        project
      </div>
      <div className="mt-8 max-w-[1000px] mx-auto gap-4 grid grid-cols-12 ">
        <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF] p-5  rounded-2xl">
          <div className="mt-6">
            <div className="w-10 h-10 text-lg  text-white flex items-center justify-center bg-black rounded-full shadow-lg shadow-gray-400">
              1
            </div>

            <div className="mt-5 text-xl text-black font-bold">
              Let's Get In Touch
            </div>
            <div className="mt-2 text-md text-gray-600 ">
              Start by reaching out through our contact page. Fill out the form
              or book a call to discuss your project
            </div>
            <Line />
          </div>
          <div className="flex justify-end items-center mt-3">
            <div className=" bg-gray-300 p-1 text-sm rounded-lg">Step 1</div>
          </div>
        </div>
        <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF] p-5  rounded-2xl">
          <div className="mt-6">
            <div className="w-10 h-10 text-lg  text-white flex items-center justify-center bg-black rounded-full shadow-lg shadow-gray-400">
              2
            </div>

            <div className="mt-5 text-xl text-black font-bold">
              Grab Your Designs
            </div>
            <div className="mt-2 text-md text-gray-600 ">
              Tell me your unique vision, and I’ll create stunning, functional
              designs that perfectly align with your goals
            </div>
            <Line />
          </div>
          <div className="flex justify-end items-center mt-3">
            <div className=" bg-gray-300 p-1 text-sm rounded-lg">Step 2</div>
          </div>
        </div>
      </div>
      <div className="mt-5 max-w-[1000px] mx-auto gap-4 grid grid-cols-12">
        <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF] p-5  rounded-2xl">
          <div className="mt-6">
            <div className="w-10 h-10 text-lg  text-white flex items-center justify-center bg-black rounded-full shadow-lg shadow-gray-400">
              3
            </div>

            <div className="mt-5 text-2xl text-black ">
              Kickstart Development
            </div>
            <div className="mt-2 text-md text-gray-600 ">
              I expertly transform your designs into a powerful, scalable
              solution, fully ready to launch
            </div>
            <Line />
          </div>
          <div className="flex justify-end items-center mt-3">
            <div className=" bg-gray-300 p-1 text-sm rounded-lg">Step 3</div>
          </div>
        </div>
        <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF] p-5  rounded-2xl">
          <div className="mt-6">
            <div className="w-10 h-10 text-lg  text-white flex items-center justify-center bg-black rounded-full shadow-lg shadow-gray-400">
              4
            </div>

            <div className="mt-5 text-xl text-black font-bold">
              And Hand Over
            </div>
            <div className="mt-2 text-md text-gray-600 ">
              Receive a fully tested, polished, and high-quality product
              tailored to your needs with ongoing support
            </div>
            <Line />
          </div>
          <div className="flex justify-end items-center mt-3">
            <div className=" bg-gray-300 p-1 text-sm rounded-lg">Step 4</div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex gap-3 sm:gap-10 items-center justify-center">
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
          </Link>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
