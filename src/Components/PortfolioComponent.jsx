import zill from "../assets/zill.png";
import { Link } from "react-router-dom";

function PortfolioComponent() {
  return (
    <div className="relative mb-4">
      <div className="w-full h-[250px]">
        <img
          src={zill}
          alt="portfolio-pics"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="portOverlay absolute top-0 left-0 w-full h-full text-center flex justify-center items-center">
        <Link
          to="https://bolajisegun.github.io/zillionaire-website/Html/"
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

export default PortfolioComponent;
