import React, { useEffect, useRef } from "react";
import "./Article_5.scss"; // Fichier de style pour Article_5
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import transition from "../Transition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Oval_article from "../Oval_article/Oval_article";

const splitText = (text, prefix = "") => {
  if (prefix.startsWith("para")) {
    return text.split("").map((char, index) => {
      const displayChar = char === " " ? "\u00a0" : char;
      return (
        <span
          key={`${prefix}-${index}`}
          className="char-container"
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <span
            className="char"
            style={{ display: "inline-block", position: "relative" }}
          >
            {displayChar}
          </span>
        </span>
      );
    });
  } else {
    return text.split("").map((char, index) => {
      const displayChar = char === " " ? "\u00a0" : char;
      return (
        <span
          key={`${prefix}-${index}`}
          className="char"
          style={{ display: "inline-block", position: "relative" }}
        >
          {displayChar}
        </span>
      );
    });
  }
};

function Article_5() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: "-500px",
    });
    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      xPercent += 0.01 * direction;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    gsap.set(".title_article .char", { y: 250 });
    gsap.to(".title_article .char", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.02,
    });
    gsap.set(".about_paragraph .char", { y: 50, opacity: 0 });
    gsap.to(".about_paragraph .char", {
      scrollTrigger: {
        trigger: ".about_paragraph",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.002,
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="article">
        <div className="background_article">
          <div className="img_bg"></div>
          <div className="colored_bg"></div>
        </div>
        <div className="front_article">
          <Link to="/Le_jardin_vue_3" className="closed_btn">
            <div className="closed_container">
              <span className="closed_line line_1"></span>
              <span className="closed_line line_2"></span>
            </div>
          </Link>
          <div className="article_img"></div>
          <div className="slider_article">
            <div ref={slider} className="title_article">
              <h2 ref={firstText}>
                {splitText(
                  "La lavande La lavande La lavande La lavande La lavande La lavande La lavande La lavande",
                  "firstText"
                )}
              </h2>
              <h2 ref={secondText}>
                {splitText(
                  "La lavande La lavande La lavande La lavande La lavande La lavande La lavande La lavande",
                  "secondText"
                )}
              </h2>
            </div>
          </div>
          <div className="about_article">
            <div className="about_title">
              <h3>Les propriétés de la Lavande</h3>
              <span className="oval_icon">
                <Oval_article />
              </span>
            </div>
            <p className="about_paragraph">
              {splitText(
                "Nous utilisons la lavande fine particulièrement pour ses propriétés apaisantes et son parfum délicat. ",
                "para1"
              )}
              <span className="strong">
                {splitText(
                  "Cet ingrédient est au cœur de notre gamme « Soin Corps »",
                  "paraStrong"
                )}
              </span>
              {splitText(
                ", par exemple dans la composition de notre eau de Cologne et bain moussant. Faisant partie d’un complexe de différentes huiles essentielles, la lavande se trouve également dans certains de nos produits d’aromachologie.",
                "para2"
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default transition(Article_5);
