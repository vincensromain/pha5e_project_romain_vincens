import React from "react";
import "./Intro.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../Logo/Logo";
import Oval from "../Oval/Oval";
function Intro() {
  useGSAP(() => {
    gsap.set(".title_span", { y: 150 });
    gsap.to(".title_span", {
      y: 0,
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.2,
    });
  }, []);
  return (
    <>
      <section className="intro_section">
        <div className="background_intro"></div>
        <nav className="intro_nav">
          <a href="/">
            <Logo />
          </a>
        </nav>

        <div className="heading">
          <h1 className="title">
            <span className="title_span">L’Occitane</span>
            <span className="title_span">vous invite à Manosque</span>
          </h1>
          <Oval />
        </div>
      </section>
    </>
  );
}

export default Intro;
