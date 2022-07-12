import React, { useEffect } from "react";
import gsap from "gsap";
const Animation = () => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(".heroText1", { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .fromTo(
        ".heroText2",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.05,
        }
      )
      .fromTo(".heroText3", { opacity: 0 }, { opacity: 1 });
  }, []);
  return <div></div>;
};

export default Animation;
