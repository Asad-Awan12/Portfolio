import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div
      className="max-w-[1440px] mx-auto sticky top-0 backdrop-blur-xs blur-out z-10  p-3 sm:p-5
    
      "
    >
      <div className="flex  justify-between items-center  md:px-4">
        <Link href={"/"}>
          <div className="dancefont text-[26px] cursor-pointer font-bold text-gray-700">
            Muhammad Asad
          </div>
        </Link>
        <div className="flex justify-between gap-7 text-lg text-gray-600  font-medium items-center">
          <div className="cursor-pointer max-md:hidden">
            <Link href={"/projects"}>Project</Link>
          </div>
          <div className="cursor-pointer max-md:hidden">
            {" "}
            <Link href={"/#service"}>Services</Link>
          </div>
          <div className="cursor-pointer max-md:hidden">
            {" "}
            <Link href={"/contact"}>Contact</Link>{" "}
          </div>
          <div className="btn-dark text-sm sm:text-[14px] ">
            {" "}
            <Link href={"/contact"}>Get In Touch</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
