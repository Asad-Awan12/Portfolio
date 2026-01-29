import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import Tag from "./Tag";

export const Clients = () => {
  return (
    <div className="pt-30 pb-20 mt-20 px-5 rounded-[50px] md:rounded-[100px] bg-[#D8DFE5]">
      <Tag text={"Happy Clients"} />
      <div className="text-center text-4xl md:text-6xl font-light text-gray-800">
        Hear from Satisfied Clients
      </div>
      <div className="text-center  mt-5 text-md font-light text-gray-800">
        Discover how clients have elevated their digital presence through expert
        designs
      </div>
      <div className="mt-5 max-w-[1200px]  mx-auto gap-4 grid grid-cols-12">
        <div
          className="  women h-[364px]
  md:col-span-4 col-span-12 
  relative overflow-hidden
  rounded-2xl 
  shadow-[rgba(16,49,77,0.235)_0px_0.7px_0.7px_-1px,
          rgba(16,49,77,0.227)_0px_1.8px_1.8px_-2px,
          rgba(16,49,77,0.22)_0px_3.6px_3.6px_-3px,
          rgba(16,49,77,0.2)_0px_7px_7px_-4px,
          rgba(16,49,77,0.157)_0px_14px_14px_-5px,
          rgba(16,49,77,0.06)_0px_30px_30px_-6px]
"
        >
          {/* Text + blur overlay */}
          <div
            className="absolute bottom-0 w-full h-1/2 pointer-events-none
  backdrop-blur-[20px] 
    [mask-image:linear-gradient(to_top,black,transparent)]

"
          ></div>

          <div className="absolute bottom-0 w-full h-5/12  sm:h-6/12 sm:px-12 px-2 py-4 pointer-events-auto">
            <div className="inline-block bg-white/15 text-white text-[12px] px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
              Product Design
            </div>

            <h2 className="text-white text-2xl sm:text-4xl  font-light">
              NeuroScope™
            </h2>

            <p className="text-white text-sm sm:text-md  font-light mt-1">
              Exceptional craftsmanship transformed our ideas into reality
            </p>
          </div>
        </div>

        <div className=" md:col-span-8 col-span-12 bg-[#F6FBFF]   rounded-2xl">
          <div
            className="  men h-[364px]
  md:col-span-4 col-span-12 
  relative overflow-hidden
  rounded-2xl 
  shadow-[rgba(16,49,77,0.235)_0px_0.7px_0.7px_-1px,
          rgba(16,49,77,0.227)_0px_1.8px_1.8px_-2px,
          rgba(16,49,77,0.22)_0px_3.6px_3.6px_-3px,
          rgba(16,49,77,0.2)_0px_7px_7px_-4px,
          rgba(16,49,77,0.157)_0px_14px_14px_-5px,
          rgba(16,49,77,0.06)_0px_30px_30px_-6px]
"
          >
            {/* Text + blur overlay */}
            <div
              className="absolute bottom-0 w-full h-1/3 pointer-events-none
  backdrop-blur-[100px] 
    [mask-image:linear-gradient(to_top,black,transparent)]
"
            ></div>

            <div className="absolute bottom-0 w-full h-5/12  sm:h-6/12 sm:px-12 px-2 py-4 pointer-events-auto">
              <div className="inline-block bg-white/15 text-white text-[12px] px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
                Digital Branding
              </div>

              <h2 className="text-white text-2xl sm:text-4xl font-light">
                NovaWork{" "}
              </h2>

              <p className="text-white text-sm sm:text-md   font-light mt-1">
                Impeccable design and precision turned our ideas into stunning
                reality
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 max-w-[1200px] mx-auto gap-4 grid grid-cols-12">
        <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF]  rounded-2xl">
          <div
            className="  person h-[364px]
  md:col-span-4 col-span-12 
  relative overflow-hidden
  rounded-2xl 
  shadow-[rgba(16,49,77,0.235)_0px_0.7px_0.7px_-1px,
          rgba(16,49,77,0.227)_0px_1.8px_1.8px_-2px,
          rgba(16,49,77,0.22)_0px_3.6px_3.6px_-3px,
          rgba(16,49,77,0.2)_0px_7px_7px_-4px,
          rgba(16,49,77,0.157)_0px_14px_14px_-5px,
          rgba(16,49,77,0.06)_0px_30px_30px_-6px]
"
          >
            {/* Text + blur overlay */}
            <div
              className="absolute bottom-0 w-full h-1/3 pointer-events-none
  backdrop-blur-[100px] 
    [mask-image:linear-gradient(to_top,black,transparent)]
"
            ></div>

            <div className="absolute bottom-0 w-full h-5/12  sm:h-6/12 sm:px-12 px-2 py-4 pointer-events-auto">
              <div className="inline-block bg-white/15 text-white text-[12px] px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
                UI/UX Design
              </div>

              <h2 className="text-white text-2xl sm:text-4xl font-light">
                CosmoVision
              </h2>

              <p className="text-white text-sm sm:text-md  font-light mt-1">
                A perfect blend of creativity and functionality exceeded
                expectation
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12  rounded-2xl bg-[#F6FBFF]">
          <div
            className="  oldwomen h-[364px]
  md:col-span-4 col-span-12 
  relative overflow-hidden
  rounded-2xl 
  shadow-[rgba(16,49,77,0.235)_0px_0.7px_0.7px_-1px,
          rgba(16,49,77,0.227)_0px_1.8px_1.8px_-2px,
          rgba(16,49,77,0.22)_0px_3.6px_3.6px_-3px,
          rgba(16,49,77,0.2)_0px_7px_7px_-4px,
          rgba(16,49,77,0.157)_0px_14px_14px_-5px,
          rgba(16,49,77,0.06)_0px_30px_30px_-6px]
"
          >
            {/* Text + blur overlay */}
            <div
              className="   backdrop-blur-extreme select-none absolute bottom-0 w-full h-1/3 pointer-events-none
  backdrop-blur-[100px] 
    [mask-image:linear-gradient(to_top,black,transparent)]
"
            ></div>

            <div className="absolute bottom-0 w-full h-6/12 sm:px-12 px-2 py-4 pointer-events-auto">
              <div className="inline-block bg-white/15 text-white text-[12px] px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
                Interface Design
              </div>

              <h2 className="text-white text-2xl sm:text-4xl font-light">
                LumiSphere
              </h2>

              <p className="text-white text-sm sm:text-md font-light mt-1">
                Brilliant design and meticulous execution effortlessly made our
                ideas shine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
