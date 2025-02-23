import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import "./Menu.scss";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import transition from "../Transition";
import DragYellow from "../Drag_Yellow/Drag_Yellow";

const splitText = (text) =>
  text.split("").map((char, index) => {
    const displayChar = char === " " ? "\u00a0" : char;
    return (
      <span
        key={index}
        className="char"
        style={{ display: "inline-block", position: "relative" }}
      >
        {displayChar}
      </span>
    );
  });

const sliderImages = [
  {
    id: 1,
    src: "/img_slider_1.png",
    alt: "slider image 1",
    name: "Le jardin",
    infinit: "Le jardin • Le jardin • Le jardin • Le jardin • ",
    link: "/Le_jardin_vue_1",
  },
  {
    id: 2,
    src: "/img_slider_2.png",
    alt: "slider image 2",
    name: "L'usine",
    infinit: "'usine • L'usine • L'usine • L'usine • L",
    link: "/Le_jardin_vue_1",
  },
  {
    id: 3,
    src: "/img_slider_3.png",
    alt: "slider image 3",
    name: "La boutique",
    infinit: "a boutique • La boutique • La boutique • La boutique • L",
    link: "/Le_jardin_vue_1",
  },
  {
    id: 4,
    src: "/img_slider_1.png",
    alt: "slider image 1",
    name: "Le jardin",
    infinit: "e jardin • Le jardin • Le jardin • Le jardin • L",
    link: "/Le_jardin_vue_1",
  },
  {
    id: 5,
    src: "/img_slider_2.png",
    alt: "slider image 2",
    name: "L'usine",
    infinit: "'usine • L'usine • L'usine • L'usine • L",
    link: "/Le_jardin_vue_1",
  },
  {
    id: 6,
    src: "/img_slider_3.png",
    alt: "slider image 3",
    name: "La boutique",
    infinit: "a boutique • La boutique • La boutique • La boutique • L",
    link: "/Le_jardin_vue_1",
  },
];

const duplicatedImages = [...sliderImages, ...sliderImages];

function Menu() {
  const containerRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(Observer);
    let total = 0;
    const content = containerRef.current;
    if (!content) return;
    const cards = content.querySelectorAll(".card");
    const cardsLength = cards.length / 2;
    const half = content.clientWidth / 2;
    const wrap = gsap.utils.wrap(-half, 0);
    const xTo = gsap.quickTo(content, "x", {
      duration: 0.5,
      ease: "power3",
      modifiers: { x: gsap.utils.unitize(wrap) },
    });

    let itemValues = [];
    for (let i = 0; i < cardsLength; i++) {
      itemValues.push((Math.random() - 0.5) * 15);
    }

    const tl = gsap.timeline({ paused: true });
    tl.to(cards, {
      rotate: (index) => itemValues[index % cardsLength],
      xPercent: (index) => itemValues[index % cardsLength],
      yPercent: (index) => itemValues[index % cardsLength],
      scale: 0.95,
      duration: 0.5,
      ease: "back.inOut(3)",
    });

    const observer = Observer.create({
      target: content,
      type: "pointer,touch",
      onPress: () => tl.play(),
      onDrag: (self) => {
        total += self.deltaX;
        xTo(total);
      },
      onRelease: () => tl.reverse(),
      onStop: () => tl.reverse(),
    });

    function tick(time, deltaTime) {
      if (isPaused.current) return;
      total -= deltaTime / 10;
      xTo(total);
    }
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      observer.kill();
    };
  }, []);

  useGSAP(() => {
    const content = containerRef.current;
    if (!content) return;
    const cards = content.querySelectorAll(".card");

    gsap.set(".card_name .char", { y: 165 });
    gsap.set(".infinit_name_slider", { display: "none" });
    gsap.set(".infinit_name_slider .char", { y: 165 });
    gsap.to(".card_name .char", {
      y: 0,
      duration: 0.6,
      ease: "power3.inOut",
      stagger: 0.01,
    });

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.hoverTimeout = setTimeout(() => {
          const tlEnter = gsap.timeline();
          tlEnter.to(card.querySelectorAll(".card_name .char"), {
            y: -165,
            duration: 0.3,
            ease: "power3.inOut",
            stagger: 0.01,
          });
          tlEnter.to(card.querySelectorAll(".card_name .char"), {
            y: 165,
            duration: 0,
          });
          tlEnter.to(card.querySelectorAll(".card_name"), {
            display: "none",
            duration: 0,
          });
          tlEnter.to(card.querySelectorAll(".infinit_name_slider"), {
            display: "block",
            duration: 0,
          });
          tlEnter.to(card.querySelectorAll(".infinit_name_slider .char"), {
            y: 0,
            duration: 0.3,
            ease: "power3.inOut",
            stagger: 0.01,
          });

          const sliderInner = card.querySelector(".slider-inner");
          gsap.set(sliderInner, { xPercent: 0 });
          const infiniteAnim = gsap.to(sliderInner, {
            xPercent: -100,
            duration: 25,
            ease: "linear",
            repeat: -1,
            modifiers: {
              xPercent: gsap.utils.wrap(-100, 0),
            },
          });
          card.infiniteAnim = infiniteAnim;
          card.hoverTimeout = null;
        }, 10);
      });

      card.addEventListener("mouseleave", () => {
        if (card.hoverTimeout) {
          clearTimeout(card.hoverTimeout);
          card.hoverTimeout = null;
        }
        if (card.infiniteAnim) {
          card.infiniteAnim.kill();
          card.infiniteAnim = null;
        }
        const tlLeave = gsap.timeline();
        tlLeave.to(card.querySelectorAll(".infinit_name_slider .char"), {
          y: -165,
          duration: 0.3,
          ease: "power3.inOut",
          stagger: 0.01,
        });
        tlLeave.to(card.querySelectorAll(".infinit_name_slider .char"), {
          y: 165,
          duration: 0,
        });
        tlLeave.to(card.querySelectorAll(".infinit_name_slider"), {
          display: "none",
          duration: 0,
        });
        tlLeave.to(card.querySelectorAll(".card_name"), {
          display: "block",
          duration: 0,
        });
        tlLeave.to(card.querySelectorAll(".card_name .char"), {
          y: 0,
          duration: 0.3,
          ease: "power3.inOut",
          stagger: 0.01,
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="slide"></div>
      <section className="menu_section">
        <div className="background_menu"></div>
        <div className="slider container" ref={containerRef}>
          {duplicatedImages.map((image, index) => (
            <Link
              to={image.link}
              className="card"
              key={index}
              onMouseEnter={() => {
                isPaused.current = true;
              }}
              onMouseLeave={() => {
                isPaused.current = false;
              }}
            >
              <img className="slider_img" src={image.src} alt={image.alt} />
              <span className="card_name_container">
                <h2 className="card_name">{splitText(image.name)}</h2>
              </span>
              <span className="infinit_name_slider_container">
                <h2 className="infinit_name_slider">
                  <div className="slider-inner">
                    <p className="text-copy">{splitText(image.infinit)}</p>
                    <p className="text-copy">{splitText(image.infinit)}</p>
                  </div>
                </h2>
              </span>
            </Link>
          ))}
        </div>

        <div className="drag_to_use">
          <span className="drag_tuto">
            <DragYellow />
          </span>
          <span className="text">Drag to navigate</span>
        </div>
      </section>
    </>
  );
}

export default transition(Menu);
