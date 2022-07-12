import React, { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import HeroImg from "../../assets/images/19362653-removebg-preview-min.png";
gsap.registerPlugin(TextPlugin);
const HeaderSection = () => {
  const name = [
    "A",
    " ",
    "F",
    "r",
    "o",
    "n",
    "t",
    "e",
    "n",
    "d",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <header id="Header_Section" className="HeaderSection section">
      <div className="HeaderSection__content">
        <h1 className="HeaderSection__title heroText1">
          Hey,I'm Adejori Eniola
        </h1>
        <h2 className="HeaderSection__subtitle">
          {name.map((char) => (
            <span
              key={char + Math.random()}
              className="text-animate-hover heroText2"
              id={char}>
              {char}
            </span>
          ))}
        </h2>
        <p className="HeaderSection__info heroText3">
          I'm from lagos, Nigeria, enjoy playing games a lot 😁😁 and working on
          side projects. Finding fun in taking part in challenging tasks, I find
          communication is critical in our daily life. and don't forget to
          contact me, let's connect👌👌
        </p>
        <a href="#ContactSection">
          <button className="HeroSection__btn heroText4 btn">Contact me</button>
        </a>
      </div>
      <div className="HeaderSection__Img">
        <img src={HeroImg} alt="" />
      </div>
    </header>
  );
};

export default HeaderSection;
