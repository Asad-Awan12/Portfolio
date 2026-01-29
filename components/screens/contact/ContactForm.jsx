"use client";
import React, { useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full bg-[#F6FBFF]  px-5 sm:px-15  py-5 shadow-md shadow-gray-300 rounded-2xl">
      <div>
        <div className="mt-5 text-2xl font-medium text-black  gap-2">
          <svg
            className="w-10 mx-auto fill-black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
              ></path>
            </g>
          </svg>

          <div className="text-center text-2xl mt-3  font-medium text-gray-800">
            {" "}
            I'd love to help! Let me know how{" "}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-6">
            <label className="block text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Muhammad Asad"
              className="mt-1 py-2 px-3 w-full border text-gray-400 border-gray-300 outline-none bg-[#F0F9FF] rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-gray-400">Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="asadsikindar@gmail.com"
              className="mt-1 py-2 px-3 w-full border text-gray-400 border-gray-300 outline-none bg-[#F0F9FF] rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            {" "}
            <label className="block text-sm text-gray-400">
              Subject Of Interest
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Regarding Project"
              className="mt-1 py-2 px-3 w-full border text-gray-400 border-gray-300 outline-none bg-[#F0F9FF] rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-gray-400">
              How may we assist you?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Give us More info"
              className="mt-1 py-2 px-3 w-full border text-gray-400 border-gray-300 outline-none bg-[#F0F9FF] rounded-md"
              required
            ></textarea>
            <div className="btn-dark text-center mt-5 text-sm sm:text-[14px] ">
              Send Your Message
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
