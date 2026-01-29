import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-10">
      <div className="text-white">
        <ul className="nav flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
          <li className="nav-item cursor-pointer select-none">
            {" "}
            <Link href={"/"}> Home</Link>
          </li>
          <li className="nav-item cursor-pointer select-none">
            {" "}
            <Link href={"/projects"}> Project</Link>
          </li>
          <li className="nav-item max-md:hidden cursor-pointer select-none">
            {" "}
            <Link href={"/#service"}> Service</Link>
          </li>
          <li className="nav-item max-md:hidden cursor-pointer select-none">
            {" "}
            <Link href={"/contact"}> Contact</Link>
          </li>
          <li className="nav-item nav-button bg-white select-none text-black px-3 py-1 rounded-full cursor-pointer">
            Resume
          </li>
        </ul>
      </div>
    </div>
  );
};
