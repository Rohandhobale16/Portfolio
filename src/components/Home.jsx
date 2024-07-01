import React from "react";

import pic from "../../public/Rohan Photo.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  const email = "rohansandipdhobale@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            I am actively seeking the role of IT Engineer where I can leverage my theoretical skills, strong sense of responsibility, and efficiency to contribute to the growth of the organization and make a positive impact on our society and country.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/rohan.dhobale.35/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rohan-dhobale/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href={gmailComposeUrl} target="_blank">
                      <BiLogoGmail className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/rohandhobale16/" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] shadow-lg"
              alt="Rohan"
              style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))" }}
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;