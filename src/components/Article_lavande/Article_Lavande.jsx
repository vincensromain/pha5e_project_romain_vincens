import React, { useEffect, useRef } from "react";
import "./Article_lavande.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Article_lavande() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation liée au scroll
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          // On inverse la direction en fonction du scroll
          direction = e.direction * -1;
        },
      },
      x: "-500px",
    });

    // Boucle d'animation pour le slider infini
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

  return (
    <>
      <Navbar />
      <section className="article">
        <div className="background_article">
          <div className="img_bg"></div>
          <div className="colored_bg"></div>
        </div>
        <div className="front_article">
          <span className="arrow_close">
            <span className="arrow_line line_1"></span>
            <span className="arrow_line line_2"></span>
          </span>
          <div className="article_img"></div>
          <div className="slider_article">
            <div ref={slider} className="title_article">
              <h2 ref={firstText}>
                La lavande La lavande La lavande La lavande La lavande La
                lavande La lavande La lavande &nbsp;
              </h2>
              <h2 ref={secondText}>
                La lavande La lavande La lavande La lavande La lavande La
                lavande La lavande La lavande &nbsp;
              </h2>
            </div>
          </div>
          <div className="about_article">
            <div className="about_title">
              <h3>Les propriétés de la Lavande</h3>
              <span className="oval"></span>
            </div>
            <p className="about_paragraph">
              Nous utilisons la lavande fine particulièrement pour ses
              propriétés apaisantes et son parfum délicat.
              <span>
                {" "}
                Cet ingrédient est au cœur de notre gamme « Soin Corps »
              </span>
              , par exemple dans la composition de notre eau de Cologne et bain
              moussant. Faisant partie d’un complexe de différentes huiles
              essentielles, la lavande se trouve également dans certains de nos
              produits d’aromachologie.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Article_lavande;
