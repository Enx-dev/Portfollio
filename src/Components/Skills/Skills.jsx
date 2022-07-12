import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { CSSRulePlugin } from "gsap/all";
import reactLogo from "../../assets/images/React-removebg-preview.png";
import typescriptLogo from "../../assets/images/ts-removebg-preview.png";
import firebaseLogo from "../../assets/images/Firebase-removebg-preview.png";
import javascriptLogo from "../../assets/images/javascript-removebg-preview.png";
import gsapLogo from "../../assets/images/download-removebg-preview.png";
import restapiLogo from "../../assets/images/rest-removebg-preview.png";
import SkillsIcon from "../../assets/images/smellar-removebg-preview.png";
import { Element } from "react-scroll";

const Skills = () => {
  gsap.registerPlugin(CSSRulePlugin);
  useEffect(() => {
    gsap.timeline().to(".glow__span", {
      scrollTrigger: {
        trigger: ".Skills",
        start: "top center",
      },
      textShadow: "0 0 0.5em #d406a8, 1px 1px 0px white",
      ease: "power1.in",
    });

    gsap
      .timeline({
        defaults: { duration: 4 },
        repeat: -1,
        repeatDelay: 3,
        delay: 3,
      })
      .to(".pane", { rotateX: -90 })
      .to(".pane", { rotateY: 90 })
      .to(".pane", { rotateY: 180 })
      .to(".pane", { rotateX: 0 })
      .to(".pane", { rotateY: 270 })
      .to(".pane", { rotateY: 360 });
  }, []);
  const Skills = [
    { name: "S", id: 0 },
    { name: "K", id: 1 },
    { name: "I", id: 2 },
    { name: "L", id: 3 },
    { name: "L", id: 4 },
    { name: "S", id: 5 },
  ];
  return (
    <Element name="Skills">
      <section id="SkillsSection" className="Skills section">
        {/* <div className="Skills__overlay">
        {/* <div className="shadow"></div> */}
        {/* </div>  */}
        <h1 className="Skills__title">
          {Skills.map((char) => (
            <div className="glow__span" key={char.id}>
              {char.name}
            </div>
          ))}
        </h1>
        <div className="Skills__main">
          <img src={SkillsIcon} alt="" />
          <section className="pane">
            <div className="pane1">
              <img src={reactLogo} alt="react logo" />
              <p>React JS</p>
            </div>
            <div className="pane2">
              <img src={firebaseLogo} alt="firebaseLogo" />
              <p>Firebase</p>
            </div>
            <div className="pane3">
              <img src={typescriptLogo} alt="typescript logo" />
              <p>TypeScript</p>
            </div>
            <div className="pane4">
              <img src={javascriptLogo} alt="javascript logo" />
              <p>Javascript</p>
            </div>
            <div className="pane5">
              <img src={gsapLogo} alt="gsap logo" />
              <p>Animation</p>
            </div>
            <div className="pane6">
              <img src={restapiLogo} alt="" />
              <p>Api's</p>
            </div>
          </section>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
