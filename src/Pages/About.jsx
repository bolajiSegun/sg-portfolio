import React from "react";
import AboutUs from "../Components/header/AboutUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faHouse,
  faUser,
  faCode,
  faSchool,
  faW,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="">
      <AboutUs />
      <div className="grid grid-cols-1 m-auto mt-10 lg:grid lg:px-20 mb-20">
        <div className="text-white leading-8">
          <h2 className="font-bold text-2xl mb-10 text-center">
            PERSONAL INFOS
          </h2>
          <div className="">
            <h5>
              First Name: <span className="font-extrabold">Oluwasegun</span>
            </h5>
            <h5>
              Last Name: <span className="font-extrabold">Bolaji</span>
            </h5>
            <h5>
              Email:{" "}
              <span className="font-extrabold">bolajisegun2015@gmail.com</span>
            </h5>
            <h5>
              Hobbies: <span className="font-extrabold">Coding and Music</span>
            </h5>
            <h5>
              FaceBook:{" "}
              <span className="font-extrabold">Bolaji Oluwasegun SG</span>
            </h5>
            <h5>
              Linkedln:{" "}
              <span className=" font-extrabold">
                https://www.linkedin.com/in/bolaji-oluwasegun-4b4583236
              </span>
            </h5>
          </div>
          <div className="mt-10 mb-10 rounded-full bg-white w-40 grid grid-cols-2 place-content-center hover:bg-[#03AC13] text-center hover:duration-1000 hover:text-white">
            <a href="./" className="grid grid-cols-2 place-content-center">
              <FontAwesomeIcon
                className="bg-[#03AC13] p-3 rounded-full"
                icon={faDownload}
              />
              <h3 className="text-white text-sm w-full font-bold leading-3 pt-2">
                Download Resume
              </h3>{" "}
            </a>
          </div>
        </div>
        <div className="w-auto text-center">
          <h2 className="text-white font-bold text-2xl mb-10 text-center">
            MY SERVICES
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 leading-8 text-center lg:place-content-center">
            <div className="text-white border-b-4 border-gray-900 pb-10 w-80 m-auto lg:w-80">
              <FontAwesomeIcon
                className="text-[#03AC13] bg-gray-900 p-5 rounded-full text-3xl"
                icon={faCode}
              />
              <h3 className="font-bold text-2xl mb-3">Frontend</h3>
              <p className="">
                Developing user interface with HTML, CSS, Tailwind, Javascript,
                Typescript, React js, React native and other frameworks.
              </p>
            </div>
            <div className="text-white border-b-4 border-gray-900 py-10 w-80 m-auto lg:w-80">
              <FontAwesomeIcon
                icon={faW}
                className="text-[#03AC13] bg-gray-900 p-5 rounded-full text-3xl"
              />
              <h3 className="font-bold text-2xl mb-3">
                Web Design / Wordpress
              </h3>
              <p className="">
                Smooth, modern, and mobile-friendly web UI designs to improve
                your business using wordpress. WordPress site that’s integrated
                with other services like email marketing systems, shipping, and
                accounting platforms for e-commerce.
              </p>
            </div>
            <div className="text-white border-b-4 border-gray-900 py-10 w-80 m-auto lg:w-80">
              <FontAwesomeIcon
                className="text-[#03AC13] bg-gray-900 p-5 rounded-full text-3xl"
                icon={faSchool}
              />
              <h3 className="font-bold text-2xl mb-3">Frontend Instructor</h3>
              <p className="">
                Over 2 years teaching students the best practices of frontend
                development training web development enthusiast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
