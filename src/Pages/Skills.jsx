import React from "react";
import SkillsHead from "../Components/header/SkillsHead";
import ExperienceHead from "../Components/header/ExperienceHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
  return (
    <div>
      <SkillsHead />

      <div className=" text-white mt-10">
        <div className="skills grid grid-cols-2 place-content-end">
          <h2 className="text-white font-bold border-b-4 border-[#03AC13] hover:border-t-4 hover:duration-500 w-40 py-5 p-5 mb-3 text-center rounded-full">
            HTML
          </h2>
          <h2 className="text-white font-bold border-b-4 border-[#03AC13] w-40 py-5 p-5 mb-3 text-center rounded-full hover:border-t-4 hover:duration-500 ">
            CSS
          </h2>
          <h2 className="text-white font-bold border-b-4 border-[#03AC13] w-40 py-5 p-5 mb-3 text-center rounded-full hover:border-t-4 hover:duration-500 ">
            JAVASCRIPT
          </h2>
          <h2 className="text-white font-bold border-b-4 border-[#03AC13] w-40 py-5 p-5 mb-3 text-center rounded-full hover:border-t-4 hover:duration-500 ">
            TAILWIND CSS
          </h2>
          <h2 className="text-white font-bold border-b-4 border-[#03AC13] w-40 py-2 mb-3 text-center rounded-full hover:border-t-4 hover:duration-500 ">
            REACT JS
          </h2>
          <h2 className="text-white font-bold border-b-4 border-[#03AC13] w-40 py-5 p-5 mb-3 text-center rounded-full hover:border-t-4 hover:duration-500 ">
            REACT NATIVE
          </h2>
        </div>
        <div className="border-line w-60 m-auto rounded-sm border-b-4 border-white my-8"></div>
        <div className="experience">
          <ExperienceHead />

          <div className="px-4 mt-10 relative mb-20 leading-10">
            <div className="flex flex-cols before:content[''] before:left-4 before:border-r-4 before:border-[#03AC13] before:rounded-sm before:relative mb-10">
              <FontAwesomeIcon
                icon={faBox}
                className="absolute text-xl border-4 border-[#03ac13] bg-[#03ac13] rounded-full text-[#ffffff] p-1 -top-4 "
              />
              <div className="ml-10">
                <h3 className="font-extrabold">
                  BSc:{" "}
                  <span className="bg-gray-900 py-1 px-4 rounded-full font-bold">
                    2021
                  </span>
                </h3>
                <h3 className="font-bold">
                  Mathematical Sciences{" "}
                  <span className="italic font-normal">
                    (Pure and Applied Mathematics).
                  </span>
                </h3>
                <p className="italic">
                  Adekunle Ajasin University, Akungba Akoko, Ondo State.
                </p>
              </div>
            </div>
            <div className="flex flex-cols before:content[''] before:left-4 before:border-r-4 before:border-[#03AC13] before:rounded-sm before:relative">
              <FontAwesomeIcon
                icon={faBox}
                className=" relative text-xl border-4 border-[#03ac13] bg-[#03ac13] rounded-full text-[#ffffff] p-1 -top-4 -left-1"
              />
              <div className="ml-4">
                <h3 className="font-extrabold">
                  Diploma:{" "}
                  <span className="bg-gray-900 py-1 px-4 rounded-full font-bold">
                    2023
                  </span>
                </h3>
                <h3 className="font-bold">Frontend Development</h3>
                <p className="italic">Sabi Programmer Techology Institute</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
