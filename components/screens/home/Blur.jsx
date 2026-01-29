import React from "react";

export const Blur = () => {
  return (
    <div
      className="w-full fixed bottom-0 h-40 mx-auto backdrop-blur-[7px] blur-out z-10  p-5 sm:p-5
        [mask-image:linear-gradient(to_top,black,transparent)]

    "
    ></div>
  );
};
