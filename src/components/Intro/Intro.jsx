import React from "react";
import "./Intro.scss";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import Logo from "../Logo/Logo";
import Oval from "../Oval/Oval";
import transition from "../Transition";
import Arrow from "../Arrow/Arrow";

const splitText = (text) => {
  return text.split("").map((char, index) => {
    const displayChar = char === " " ? "\u00a0" : char;
    return (
      <div
        key={index}
        className="char"
        style={{ position: "relative", display: "inline-block" }}
      >
        <div>{displayChar}</div>
      </div>
    );
  });
};

function Intro() {
  useGSAP(() => {
    gsap.set(".heading .title_1 .char", { y: 165 });
    gsap.set(".heading .title_2 .char", { y: 155 });

    const Heading_tl = gsap.timeline();

    Heading_tl.to(
      ".heading .title_1 .char",
      {
        y: 20,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.02,
      },
      0
    );
    Heading_tl.to(
      ".heading .title_2 .char",
      {
        y: 15,
        duration: 1,
        ease: "power3.inOut",
        stagger: { each: 0.02, from: "end" },
      },
      0
    );

    Heading_tl.to(
      ".heading .title_1 .char",
      {
        y: -165,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.02,
      },
      "+=1"
    );
    Heading_tl.to(
      ".heading .title_2 .char",
      {
        y: -160,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: { each: 0.02, from: "end" },
      },
      "<"
    );

    Heading_tl.call(() => {
      const heading = document.querySelector(".heading");
      if (heading) {
        heading.remove();
      }
      NewHeading_tl.play();
    });

    const NewHeading_tl = gsap.timeline({ paused: true });
    gsap.set(".new_heading", { display: "none" });
    gsap.set(".start_experience", { y: 165 });
    gsap.set(".new_heading .title_1 .char", { y: 165 });
    gsap.set(".new_heading .title_2 .char", { y: 165 });
    gsap.set(".new_heading .title_3 .char", { y: 165 });
    gsap.set(".new_heading .title_4 .char", { y: 165 });

    NewHeading_tl.to(".new_heading", {
      display: "flex",
      duration: 0.5,
      ease: "power3.inOut",
    });

    NewHeading_tl.to(".start_experience", {
      y: 0,
      duration: 1.3,
      ease: "power3.inOut",
    });

    NewHeading_tl.to(
      ".new_heading .title_1 .char",
      {
        y: 15,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.008,
      },
      "<"
    );

    NewHeading_tl.to(
      ".new_heading .title_2 .char",
      {
        y: 15,
        duration: 1,
        ease: "power3.inOut",
        stagger: { each: 0.008, from: "end" },
      },
      "<"
    );

    NewHeading_tl.to(
      ".new_heading .title_3 .char",
      {
        y: 15,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.008,
      },
      "<"
    );

    NewHeading_tl.to(
      ".new_heading .title_4 .char",
      {
        y: 15,
        duration: 1,
        ease: "power3.inOut",
        stagger: { each: 0.008, from: "end" },
      },
      "<"
    );
  }, []);

  return (
    <>
      <div className="inner">
        <section className="intro_section">
          <div className="background_intro"></div>
          <nav className="intro_nav inside">
            <a href="/">
              <Logo />
            </a>
          </nav>

          <div className="heading">
            <Oval />
            <div className="title_container">
              <span className="title_1_container">
                <h1 className="title_1">{splitText("L’Occitane")}</h1>
              </span>
              <span className="title_2_container">
                <h1 className="title_2">
                  {splitText("vous invite à Manosque")}
                </h1>
              </span>
            </div>
          </div>

          <div className="new_heading">
            <div className="title_container">
              <span className="title_1_container">
                <h1 className="title_1">
                  {splitText("Entrez au cœur de notre")}
                </h1>
              </span>
              <span className="title_2_container">
                <h1 className="title_2">
                  {splitText("univers en visitant à 360°")}
                </h1>
              </span>
              <span className="title_3_container">
                <h1 className="title_3">
                  {splitText("le jardin, l’usine et")}
                </h1>
              </span>
              <span className="title_4_container">
                <h1 className="title_4">{splitText("la boutique musée.")}</h1>
              </span>
            </div>

            <div className="cta_container">
              <Link to="/Menu" className="start_experience">
                <span className="cta_text">Entrer dans l’expérience</span>
                <span className="arrow">
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default transition(Intro);
