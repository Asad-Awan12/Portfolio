import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-30 pb-40 mt-20 px-5 rounded-[50px] md:rounded-[100px] bg-[#D8DFE5]">
      <div className="  animate-bounce p-1 transition duration-900 ease-linear h-18 w-18 mx-auto rounded-full bg-[#323d68]">
        <svg
          className="fill-white "
          viewBox="0 0 256 256"
          id="Flat"
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
            <path d="M247.77734,109.07471,223.18457,61.97852a12.05548,12.05548,0,0,0-16.00391-5.1792l-24.125,12.062H164.86377L131.08008,53.5752a12.0181,12.0181,0,0,0-8.30469-.58741L72.59766,67.61615,48.81934,55.72754a12.05752,12.05752,0,0,0-16.00391,5.17871L8.22266,108.00342a12.00088,12.00088,0,0,0,5.2705,16.28711L37.853,136.47046l54.34424,42.49438a11.91724,11.91724,0,0,0,4.48144,2.18946l57.957,14.48925a11.91,11.91,0,0,0,2.88281.35352,12.06751,12.06751,0,0,0,8.5127-3.50977l36.79688-36.79736c.07421-.07373.14453-.15039.21289-.22949l15.47363-18.10211,23.99219-11.996a12.00124,12.00124,0,0,0,5.2705-16.28759Zm-48.415,38.37689-41.00976-29.82514a4.00119,4.00119,0,0,0-4.75293.03467l-12.79981,9.6001a28.14358,28.14358,0,0,1-33.5996,0l-5.4209-4.06543a3.99978,3.99978,0,0,1-.42871-6.02783L140.48535,78.0332a4.02842,4.02842,0,0,1,2.82813-1.17187h20.67529l.00928.001.01367-.001h17.56445l29.627,56.73761ZM15.05469,114.78906a3.96941,3.96941,0,0,1,.25976-3.083L39.90723,64.60889a4.01768,4.01768,0,0,1,3.56152-2.144,3.95148,3.95148,0,0,1,1.77246.418l21.3291,10.66407L38.27344,127.73633,17.07129,117.13525A3.96911,3.96911,0,0,1,15.05469,114.78906Zm145.32031,72.041a4.01527,4.01527,0,0,1-3.7998,1.05176l-57.957-14.48926a3.96913,3.96913,0,0,1-1.49316-.72949l-52.03809-40.691L74.65332,75.35l50.36035-14.68152a4.00066,4.00066,0,0,1,2.76856.19531l17.67431,7.99756h-2.14306A11.91947,11.91947,0,0,0,134.8291,72.376L95.69434,111.51074a11.99951,11.99951,0,0,0,1.28418,18.08545l5.42089,4.06543a36.18887,36.18887,0,0,0,43.20118,0l10.43554-7.82764,37.82569,27.509Zm80.57031-70.96924a3.96914,3.96914,0,0,1-2.0166,2.34619l-21.20215,10.60108L189.42969,74.61865l21.3291-10.66406a4.01661,4.01661,0,0,1,5.334,1.72656l24.59278,47.09619A3.97079,3.97079,0,0,1,240.94531,115.86084ZM115.88086,213.83105a3.99648,3.99648,0,0,1-4.85059,2.91114L80.89063,209.208a12.065,12.065,0,0,1-4.9629-2.58594L53.376,187.01855a3.99964,3.99964,0,1,1,5.248-6.0371L81.17676,200.585a4.03759,4.03759,0,0,0,1.65625.86231l30.13672,7.5332A4.00094,4.00094,0,0,1,115.88086,213.83105Z"></path>{" "}
          </g>
        </svg>
      </div>
      <div className="text-center text-4xl md:text-6xl font-light max-w-[800px] mx-auto text-gray-800">
        Tell Me About Your Next Creative Project
      </div>
      <div className="text-center  mt-5 text-md font-light text-gray-800">
        Let’s create captivating digital experiences that engage audiences and
        drive meaningful brand interactions across diverse platforms
      </div>
      <div className="mt-20 flex gap-3 sm:gap-10 items-center justify-center">
        <div className="btn-dark flex justify-center items-center gap-2">
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

        <div className="btn-light flex justify-center items-center gap-2">
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
      <div className="mt-20 flex gap-3 max-w-[1200px] mx-auto sm:gap-10 items-center justify-between">
        <div className="text-gray-500 text-sm">© 2026 M Asad Portfolio</div>
        <div className="text-gray-500 text-sm">
          Made by{" "}
          <span className="text-cyan-800 font-bold">
            {" "}
            <Link href={"https://www.linkedin.com/in/muhammad-asad-48a74b31b/"}>
              {" "}
              Muhammad Asad
            </Link>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
