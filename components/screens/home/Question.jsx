import React from "react";
import Line from "./Line";
import Tag from "./Tag";
import SingleQuestion from "./SingleQuestion";
import { FAQ_DATA } from "@/libs/utils";
import Link from "next/link";

const Question = () => {
  return (
    <div className="pt-30 pb-20 mt-20 px-5 rounded-[50px] md:rounded-[100px] bg-[#D8DFE5]">
      <Tag text={"FAQS"} />
      <div className="text-center text-4xl md:text-6xl font-light text-gray-800">
        Questions? Answers!
      </div>
      <div className="text-center  mt-5 text-md font-light text-gray-800">
        Find quick answers to the most common questions about the services
        offered
      </div>
      <div className="mt-8 w-full lg:max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:px-4">
        <div className="md:col-span-5 col-span-12 bg-[#F6FBFF] p-5 shadow-lg max-h-[300px] shadow-gray-400 rounded-2xl">
          <div className="mt-6">
            <div className=" text-lg  text-black flex items-center justify-center ">
              <svg
                className="w-10 shadow-md rounded-full shadow-gray-400"
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
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 18.01L12.01 17.9989"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>

            <div className="mt-3 text-2xl text-black  text-center">
              Get In Touch
            </div>
            <div className="mt-2 text-md text-gray-600 text-center">
              Still have questions? Feel free to get in touch with us today!
            </div>
          </div>
          <div className="flex justify-center items-center mt-3">
            <div className="btn-dark  flex w-50 justify-center items-center gap-2">
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
              <div className="text-sm text-nowrap">
                {" "}
                <Link href={"/contact"}>Ask A Question</Link>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-7 col-span-12   ">
          {FAQ_DATA.map((question, index) => (
            <div key={index} className="mb-3">
              {" "}
              <SingleQuestion
                QUESTION={question.question}
                ANSWER={question.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
