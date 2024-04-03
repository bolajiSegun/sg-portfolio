import odschc from "../assets/odschc.png";
import { Link } from "react-router-dom";

function ThirdWorkComponent() {
  return (
    <div className="relative mb-4">
      <div className="w-full h-[250px]">
        <img
          src={odschc}
          alt="portfolio-pics"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="portOverlay absolute top-0 left-0 w-full h-full text-center flex justify-center items-center">
        <Link
          to="https://bolajisegun.github.io/odschc/"
          target="_blank"
          className="mt-20"
        >
          <span className="opacity-100 bg-gradient-to-r from-white to-black px-4 py-2 rounded-full font-bold transition duration-0  hover:bg-gradient-to-l hover:duration-1000">
            Visit Website
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ThirdWorkComponent;
