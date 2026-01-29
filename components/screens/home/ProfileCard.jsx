import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import Line from "./Line";
import { Minitag } from "@/libs/utils";
import Link from "next/link";

export const ProfileCard = () => {
  return (
    <div className="mt-20 max-w-[1200px] mx-auto gap-3 grid grid-cols-12 px-3">
      <div className="xl:col-span-3 md:col-span-4 flex flex-col items-center justify-start px-3 bg-white rounded-2xl p-2   col-span-12 ">
        <div className="relative w-full md:w-[272px] h-[282px]">
          <Image
            alt="My pic"
            src={images.personProfile}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="text-sm text-gray my-2 flex items-center justify-center gap-2">
          <div>
            <Image
              width={30}
              height={30}
              alt="online status icon"
              src={images.online}
              className="mix-blend-multiply"
            />
          </div>
          <div> Avialable For Work</div>
        </div>
        <div className="text-4xl text-center">Muhammad Asad</div>
        <div className="text-sm mt-2 w-11/12 text-center">
          Full Stack Developer Based in Pakistan
        </div>
        <div className="flex justify-center gap-4 my-6 items-center">
          <div>
            <div className="w-10 p-2 rounded-full  shadow-sm shadow-gray-400">
              <svg
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#bababa"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect
                    width="132"
                    height="132"
                    x="30"
                    y="30"
                    stroke="#cccccc"
                    strokeWidth="12"
                    rx="16"
                  ></rect>
                  <path
                    stroke="#cccccc"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                    d="M66 86v44"
                  ></path>
                  <circle cx="66" cy="64" r="8" fill="#cccccc"></circle>
                  <path
                    stroke="#cccccc"
                    strokeLinecap="round"
                    strokeWidth="12"
                    d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div>
            <div className="w-10 p-2 rounded-full  shadow-sm shadow-gray-400">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g fill="none" fillRule="evenodd">
                    {" "}
                    <path d="m0 0h32v32h-32z"></path>{" "}
                    <path
                      d="m7.12879292.51417785c1.11274139.23426134 2.47362429.82048782 4.11150568 1.85174647l.1402084.08827939.1615653-.03671938c2.9884399-.67919088 6.1124421-.67919088 8.961135-.00093066l.1674659.03987284.144082-.09420748c1.5716721-1.02763176 2.9182496-1.61310022 4.0524237-1.84775693.759192-.15707421 1.3120134-.14192842 1.7266168-.03827759.2666462.090124.4499633.27344118.5486711.56956426.6704248 1.74425402.8026962 3.4637821.4052819 5.18591101l-.0441449.19129423.1243184.15194469c1.1968139 1.46277248 1.8488866 3.31603184 1.8488866 5.2875725 0 6.3485866-2.8063027 9.1853925-7.7312723 10.4166349l-.419054.1047635.1365949.4097846c.2531851.7595554.3950384 1.6816016.3950384 2.5054211v5.2638242c0 .6102163-.3750007.9852169-.9852169.9852169-.6102163 0-.9852169-.3750006-.9852169-.9852169v-5.4023459c.1418506-1.1099017-.2422784-2.0702241-1.0868091-2.9147549-.3044473-.3044473-.3790379-.6525363-.227066-.8804941l.0552369-.1248658c.0757101-.3028408.3814371-.532136.8466076-.6871928 5.3120827-.5399498 8.0307236-2.8327794 8.0307236-8.6907748 0-1.6564285-.6131873-3.26604496-1.7632966-4.55991791-.2672232-.26819938-.3184945-.62709819-.1965338-.99298027.421569-1.12340343.4584237-2.30275287.1471054-3.54802595l-.0925045-.3700178-.3739989.07479979c-.9478211.18956418-2.1473179.75403325-3.7508016 1.86413736-.1857796.1766551-.4230883.19822862-.7539984.08792526-2.8475111-.81394761-5.9339607-.85464499-8.7911309-.12649584l-.4491585.12135959c-.3628223.12054277-.6384702.09757211-.9149267-.08673225-1.42751816-1.0714084-2.69253421-1.64970145-3.74499762-1.86019412l-.373999-.0747998-.09250445.37001782c-.31131829 1.24527311-.27446362 2.42462255.15204701 3.5619842.10109463.41385961.07644663.71100916-.06562638.86216475l-.13584907.11685726c-1.15010933 1.29387299-1.76329656 2.90348951-1.76329656 4.55991791 0 5.8579954 2.71864082 8.150825 8.11605497 8.7091782.3774067.0021233.658493.2576563.7612762.6687894.1010375.4041497.0114892.8220417-.1718291 1.0053599-.7436348.7436349-1.0868091 1.6587662-1.0868091 2.7762332v5.4023459c0 .6102163-.3750006.9852169-.9852169.9852169-.6102162 0-.9852169-.3750006-.9852169-.9852169v-2.8270529l-.46575959.0776266c-2.54724.42454-4.24481989-.2444101-5.77209467-1.8206127l-.17550688-.1858852c-.2604301-.2828668-.33970082-.3776481-.88018386-1.0382385l-.36159501-.4498172c-.20278887-.2491665-.28041984-.3335268-.4270144-.4801213-.31004981-.3100499-.60764766-.5050278-.94769786-.5900403-.50153879-.1007695-.86640495-.6978232-.69527541-1.1256471.10960673-.5162087.63701397-.8684616 1.05468442-.7739997l.08762892.0271823c1.09149998.3291047 1.69332587.8449555 2.89233084 2.2437946 1.52216405 2.0951415 2.69032089 2.7199695 5.36532835 2.2104443l.32515515-.0619343v-.4695228c0-.8356368.1444822-1.7386502.3869558-2.3448342l.1761248-.4403121-.4637039-.0993651c-4.85568756-1.0405045-7.71806969-4.1305761-7.71806969-10.2750493 0-1.9715406.65207273-3.82479999 1.84888659-5.28757249l.13251746-.16196578-.0574908-.20121779c-.52680966-1.84383388-.39831649-3.54636846.39413925-5.26335592.11499725-.33725524.29831442-.52057241.59443749-.61928009.38670854-.09546266.89997964-.11002355 1.64383232.04657702z"
                      fill="#cfcfcf"
                      fillRule="nonzero"
                      transform="translate(1)"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div>
            <div className="w-10 p-2 rounded-full  shadow-sm shadow-gray-400">
              <svg
                viewBox="0 0 24 24"
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                    fill="#c2c2c2"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="btn-dark mt-3 mb-6 flex w-full justify-center items-center gap-2">
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
        <div className="btn-light flex w-full justify-center items-center gap-2">
          <div className="sm:w-6 w-4">
            <svg
              className="rotate-45 hover:rotate-0  transform ease-in duration-200 "
              viewBox="0 0 24 24"
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
                  d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L13.5 11.5607L17.4697 15.5303C17.6842 15.7448 18.0068 15.809 18.287 15.6929C18.5673 15.5768 18.75 15.3033 18.75 15V6C18.75 5.58579 18.4142 5.25 18 5.25L9 5.25C8.69665 5.25 8.42318 5.43273 8.30709 5.71299C8.19101 5.99324 8.25517 6.31583 8.46967 6.53033L12.4393 10.5L5.46967 17.4697Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <Link href={"/projects"}>
            <div className="text-sm text-nowrap">See Project</div>
          </Link>{" "}
        </div>
      </div>
      <div className="xl:col-span-9 md:col-span-8 col-span-12 max-sm:px-3">
        <div className="p-2">
          <div className="text-gray-700 ">
            I'm Muhammad Asad, a passionate Web Designer & Mern Stack Developer
            based in the dynamic city of Pakistan, Lahore. I blend creative
            design with precise technical execution to deliver outstanding
            digital experiences.
            <Line />
          </div>
        </div>
        <div className="pb-3 pt-2  ">
          <div className="flex justify-start items-center flex-wrap">
            {Minitag.map((item, index) => (
              <div
                key={index}
                className=" py-2.5 px-3 m-2 bg-[#D8DFE5] rounded-lg text-gray-600"
              >
                {item}
              </div>
            ))}
          </div>
          <Line />
        </div>
        <div className=" py-4 px-3 m-2 my-2 bg-[#D8DFE5] rounded-lg  max-sm:text-[15px] text-gray-700 flex md:flex-row flex-col  items-start  justify-start  md:justify-between md:items-center">
          <div className="font-bold"> Mern Stack Developer </div>
          <div> Avisa Dev</div>
          <div>May 2025 -  Nov 2025</div>
        </div>
        <div className=" py-4 px-3 m-2 my-2 bg-[#D8DFE5] rounded-lg  max-sm:text-[15px] text-gray-700 ">
          {" "}
          Built and launched real-time chat, event streams, and audio/video
          calling for WorldTone, MyLink, and Yimpy, using Socket.io + WebRTC to
          handle active users. Developed scalable random and speed-dating match
          flows, reducing wait time and increasing user engagement across
          multiple platforms. Implemented event-driven backend architecture
          (Node.js, Redis, MongoDB) to deliver low-latency, reliable real-time
          interactions in production.
        </div>
        <div className=" py-4 px-3 m-2 my-2 bg-[#D8DFE5] max-sm:text-[15px] rounded-lg text-gray-700 flex md:flex-row flex-col  items-start  justify-start  md:justify-between md:items-center">
          <div className=" font-bold"> Mern Stack Internship </div>
          <div> Enigmatix Work</div>
          <div>June 2024 - Dec 2024 </div>
        </div>
        <div className=" py-4 px-3 m-2 my-2 bg-[#D8DFE5] rounded-lg  max-sm:text-[15px] text-gray-700 ">
          {" "}
          Gained hands-on experience with basic full-stack development skills,
          including React, Node.js, and MongoDB. Assisted in developing and
          maintaining features for Wisemarket.com.pk, learning practical
          e-commerce workflows like product listing and checkout. Collaborated
          with the team on small projects, improving coding practices,
          debugging, and version control understanding
        </div>
      </div>
    </div>
  );
};
