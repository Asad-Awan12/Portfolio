import Tag from "./Tag";
import Line from "./Line";
import { TagSlider } from "./TagSlider";
import Link from "next/link";

const Basic = () => {
  return (
    <div className="pt-30 pb-20 mt-20 px-5 rounded-[50px] md:rounded-[100px] bg-[#D8DFE5]">
      <Tag text={"Process"} />
      <div className="text-center text-4xl md:text-6xl font-light text-gray-800">
        Precision vs Basic
      </div>
      <div className="text-center  mt-5 text-md font-light text-gray-800">
        Precision-driven design and animations, surpassing static and unengaging
        layouts.
      </div>
      <div className="mt-8 max-w-[700px] mx-auto gap-4 grid grid-cols-12 ">
        <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF] p-5  rounded-2xl">
          <div className="mt-6">
            <div className="mt-5 text-4xl text-black text-center">Me</div>
            <Line />
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Custom, high-performance websites</div>
            </div>
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Pixel-perfect UI/UX design</div>
            </div>
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Built with Framer & Figma expertise</div>
            </div>{" "}
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Seamless animations & interactions</div>
            </div>{" "}
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div> Scalable & future-proof solutions</div>
            </div>{" "}
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Optimized for speed & conversions</div>
            </div>{" "}
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Advanced SEO tactics for enhanced visibility</div>
            </div>{" "}
          </div>{" "}
          <div className="btn-dark mt-10 flex w-full justify-center items-center gap-2">
            <div className="sm:w-6 w-4">
              <svg
                className="-rotate-45  hover:rotate-0  transform ease-in duration-200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H13.25V12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    d="M13.25 12.75V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25V12.75Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <Link href={"/contact"}>
              {" "}
              <div className="text-sm text-nowrap"> Contact Me</div>
            </Link>{" "}
          </div>
        </div>
        <div className=" md:col-span-6 col-span-12 bg-[#F6FBFF] p-5 max-h-[340px]  rounded-2xl">
          <div className="mt-6">
            <div className="mt-5 text-4xl text-black text-center">Other</div>
            <Line />
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Generic templates</div>
            </div>
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Basic design skills</div>
            </div>
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Limited customization</div>
            </div>{" "}
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Slow performance</div>
            </div>{" "}
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div> Lacks scalability</div>
            </div>{" "}
            <div className="mt-3 text-sm text-gray-500 flex gap-2 ">
              <div>
                <svg
                  className="w-5 "
                  viewBox="0 -0.5 25 25"
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
                    <path
                      d="M5.5 12.5L10.167 17L19.5 8"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div> Static & unengaging layouts</div>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <TagSlider />
      </div>{" "}
    </div>
  );
};

export default Basic;
