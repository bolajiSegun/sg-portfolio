// import { Link } from "react-router-dom";
import SG from "../assets/SG.jpg";

export default function Home() {
  return (
    <div className="home-page overflow-hidden ">
      <div className="grid grid-cols-3">
        <aside className="homeFirstBg w-auto h-lvh bg-white relative"></aside>
        <div className="w-60 lg:w-96 m-auto relative -left-14">
          <img
            src={SG}
            alt="home-pic"
            className="h-40 w-40 lg:h-80  lg:w-80 rounded-full m-auto object-fill"
          />
          <div className="">
            <h1 className="text-[#03AC13] lg:text-5xl text-2xl font-bold w-auto text-center">
              Bolaji Oluwasegun
            </h1>
            <h3 className="text-white text-3xl lg:text-4xl text-center mt-3">
              Web Developer
            </h3>
            <p className="text-white text-sm lg:text-lg text-center mt-3">
              I'm a Professional and talented Front-end developer focused on
              crafting clean & user-friendly web apps, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
          </div>
        </div>
        <aside className="homeSecondBg w-auto h-lvh  bg-[#03AC13] relative"></aside>
      </div>
      <div className="homeText">{/* <Link to={}>DonwLoad CV</Link> */}</div>
    </div>
  );
}
