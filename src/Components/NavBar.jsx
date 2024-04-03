import "../App.css";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faHouse,
  faUser,
  faFile,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="App">
      <header className="App-head">
        <nav className="navBar">
          <ul className="flex flex-auto justify-between m-auto text-white font-bold p-5 shadow-xl shadow-black">
            <li>
              <Link
                to="/"
                className="text-3xl bg-[#03AC13] rounded-lg hover:bg-green-800 hover:duration-500"
              >
                <FontAwesomeIcon
                  className="w-20 visible text-3xl rounded-lg"
                  icon={faHouse}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-3xl hover:bg-[#03AC13] hover:rounded-lg px-1 hover:duration-500"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="hidden">Contact</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Skills"
                className="text-3xl hover:bg-[#03AC13] hover:rounded-lg px-3 hover:duration-500"
              >
                <FontAwesomeIcon icon={faFolderOpen} />
                <span className="hidden">Skills</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio"
                className="text-3xl hover:bg-[#03AC13] hover:rounded-lg px-3 hover:duration-500"
              >
                <FontAwesomeIcon icon={faFile} />
                <span className="hidden">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Blog"
                className="text-3xl hover:bg-[#03AC13] hover:rounded-lg px-1 hover:duration-500"
              >
                <FontAwesomeIcon icon={faBlog} />
                <span className="Blogs"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default NavBar;
