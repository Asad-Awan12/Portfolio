import React from "react";

const Tag = ({ text }) => {
  return (
    <div className="mx-auto w-40 p-1 my-5 text-sm rounded-3xl  bg-[#EFF7FE]">
      <div className="flex border py-1 border-gray-300  rounded-2xl gap-2 justify-center items-center">
        <svg
          className="w-4 "
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#000000"
          strokeWidth="5.311999999999999"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <line x1="8" y1="56" x2="8" y2="40"></line>
            <line x1="20" y1="56" x2="20" y2="32"></line>
            <line x1="32" y1="56" x2="32" y2="24"></line>
            <line x1="44" y1="56" x2="44" y2="16"></line>
            <line x1="56" y1="56" x2="56" y2="8"></line>
          </g>
        </svg>{" "}
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Tag;
