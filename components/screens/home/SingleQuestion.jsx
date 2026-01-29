"use client";

import React, { useState } from "react";
import clsx from "clsx";

const SingleQuestion = ({ QUESTION, ANSWER }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#F6FBFF] p-3 rounded-lg  shadow-sm">
      <div
        onClick={() => setShow(!show)}
        className="text-md font-medium cursor-pointer select-none text-black"
      >
        {QUESTION}
      </div>

      {/* Wrapper for animation */}
      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 ease-out",
          show ? "max-h-40 mt-2" : "max-h-0"
        )}
      >
        <p
          className={clsx(
            "text-sm text-gray-500 transition-all duration-700",
            show
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 -translate-y-2 blur-sm"
          )}
        >
          {ANSWER}
        </p>
      </div>
    </div>
  );
};

export default SingleQuestion;
