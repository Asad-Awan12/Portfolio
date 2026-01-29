import Link from "next/link";
import React from "react";
import Tag from "../home/Tag";
import Line from "../home/Line";
import ContactForm from "./ContactForm";

export const Form = () => {
  return (
    <div className="pt-10 pb-20 mt-10 px-5 rounded-[50px] md:rounded-[100px] max-w-[1050px]  mx-auto">
      <Tag text={"Contact"} />
      <div className="text-center text-4xl md:text-6xl font-light text-gray-800">
        Reach Me Anytime
      </div>
      <div className="text-center  mt-5 text-md font-light text-gray-800">
        Have questions or need help? We’re here for you
      </div>
      <div className="flex max-md:flex-col  justify-between  gap-2">
        <div className="mt-8 max-md:w-full w-5/12 mx-auto gap-4 flex flex-col">
          <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF] p-8 sm:max-h-[210px] shadow-md shadow-gray-300  rounded-2xl">
            <div className="">
              <div className="mt-5 text-2xl font-medium text-black flex justify-start  items-center  gap-2">
                <div>
                  <svg
                    className="w-10 fill-black"
                    viewBox="0 0 24 24"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>{" "}
                <div> Email Me</div>
              </div>
              <div className="mt-2 text-md text-gray-600 ">
                Feel free to email me if you have any questions or need more
                details!
              </div>
              <Link href={"mailto:asadsikindar@gmail.com"}>
                {" "}
                <div className="mt-2 text-[16px] underline font-medium text-gray-700 ">
                  asadsikindar@gmail.com
                </div>
              </Link>
            </div>
          </div>
          <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF] p-8 sm:max-h-[210px] shadow-md shadow-gray-300  rounded-2xl">
            <div className="">
              <div className="mt-5 text-2xl font-medium text-black flex justify-start  items-center  gap-2">
                <div>
                  <svg
                    className="w-10 fill-black"
                    viewBox="0 0 24 24"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>{" "}
                <div> Prefer to Call ?</div>
              </div>
              <div className="mt-2 text-md text-gray-600 ">
                Feel free to book a call if that’s more convenient and easier
                for you
              </div>
              <Link href={"tel:+903206901350"}>
                {" "}
                <div className="mt-2 text-[16px] underline font-medium text-gray-700 ">
                  03236382581
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 max-md:w-full  w-6/12 mx-auto gap-4 flex flex-col">
          <ContactForm />
        </div>
      </div>{" "}
    </div>
  );
};
