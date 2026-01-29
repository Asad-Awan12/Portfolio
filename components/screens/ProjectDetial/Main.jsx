"use client";
import React from "react";
import { ProjectHeader } from "./ProjectHeader";
import Images from "./Images";
import Line from "../home/Line";
import OtherProject from "./OtherProject";
import { notFound, useParams } from "next/navigation";
import { projectDetails } from "@/libs/utils";
const Main = () => {
  const params = useParams();
  const data = projectDetails.find((item) => item.name === params.name);
  if (!data) {
    notFound();
  }
  console.log(data);
  return (
    <>
      <div className="max-w-[1440px] mx-auto  p-3 sm:p-5">
        <ProjectHeader
          title={data.heading}
          description={data.descriptions[0]}
          tools={data.tools}
        />
        <Images description={data.descriptions} imagess={data.images} />
      </div>
      <Line />
      <OtherProject />
    </>
  );
};

export default Main;
