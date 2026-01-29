import { images } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "../home/ProjectCard";

const OtherProject = () => {
  return (
    <div className="pt-30 pb-20 mt-10 px-5 rounded-[50px] md:rounded-[20px] ">
      <div className="text-center text-4xl md:text-6xl font-light max-w-[800px] mx-auto text-gray-800">
        Other Projects{" "}
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
      </div>
    </div>
  );
};

export default OtherProject;
