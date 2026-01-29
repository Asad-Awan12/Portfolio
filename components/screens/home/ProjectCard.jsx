import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ text, image }) => {
  let url = text.split(" ").join("").toLowerCase();
  return (
    <Link href={`/projects/${url}`}>
      <div className="p-3  border-1 border-gray-300 rounded-lg">
        <div className="">
          <Image
            src={image}
            height={444}
            width={322}
            alt="wisemarket"
            className=" w-full h-full rounded-lg drop-shadow-2xl"
          />
        </div>
        <div className="flex justify-between p-2 mt-2 ">
          <div className="text-md text-gray-500">{text}</div>
          <div>
            {" "}
            <div className="sm:w-6 w-4">
              <svg
                className="fill-gray-500 rotate-45 hover:rotate-0  transform ease-in duration-200 "
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
                  <path d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L13.5 11.5607L17.4697 15.5303C17.6842 15.7448 18.0068 15.809 18.287 15.6929C18.5673 15.5768 18.75 15.3033 18.75 15V6C18.75 5.58579 18.4142 5.25 18 5.25L9 5.25C8.69665 5.25 8.42318 5.43273 8.30709 5.71299C8.19101 5.99324 8.25517 6.31583 8.46967 6.53033L12.4393 10.5L5.46967 17.4697Z"></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
