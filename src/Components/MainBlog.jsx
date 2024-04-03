// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import useFetch from "./CustomHook/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Components/Loader";

export default function MainBlog() {
  // const { id } = useParams();
  // let navig = useNavigate();
  const [datum, loading] = useFetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d9f5be11c6794f7b849445cd05cf8f3f"
  );

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section className="blog">
      {/* {loading && (
        <h2 className="bg-black text-white mt-50 h-lvh p-20 text-5xl font-extrabold">
          LOADING...
        </h2>
      )} */}

      <div className="">
        <h1 className="text-white mb-10 text-center text-5xl drop-shadow-lg drop-shadow-blue font-extrabold decoration-double decoration-white">
          Tech News
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 h-32">
          {datum &&
            datum.map((user) => {
              return (
                <div className="text-white shadow-xl p-5 m-auto  text-center">
                  <img
                    src={user.urlToImage}
                    className="w-50 m-auto mb-5"
                    alt=""
                  />
                  <h2>{user.title}</h2>
                  <h5 className="text-white">{user.publishedAt}</h5>
                  <h3 className="text-white shadow-xl p-5 font-bold m-auto  text-center">
                    {user.author}
                  </h3>
                  <p>{user.content}</p>
                  <Link
                    to={user.url}
                    className=" flex justify-center items-center font-medium text-[#03AC13] dark:text-blue-500 hover:underline"
                  >
                    Read more <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <div className="border-b-4 border-white mt-5"></div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
