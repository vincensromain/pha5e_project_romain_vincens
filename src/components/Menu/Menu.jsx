import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import "./Menu.scss";
import Navbar from "../Navbar/Navbar";

const sliderImages = [
  {
    id: 1,
    src: "/img_slider_1.png",
    alt: "slider image 1",
    name: "Le jardin",
  },
  {
    id: 2,
    src: "/img_slider_2.png",
    alt: "slider image 2",
    name: "L'usine",
  },
  {
    id: 3,
    src: "/img_slider_3.png",
    alt: "slider image 3",
    name: "La boutique",
  },
  {
    id: 4,
    src: "/img_slider_1.png",
    alt: "slider image 1",
    name: "Le jardin",
  },
  {
    id: 5,
    src: "/img_slider_2.png",
    alt: "slider image 2",
    name: "L'usine",
  },
  {
    id: 6,
    src: "/img_slider_3.png",
    alt: "slider image 3",
    name: "La boutique",
  },
];

// Dupliquer les images pour l'effet de boucle infinie
const duplicatedImages = [...sliderImages, ...sliderImages];

function Menu() {
  const containerRef = useRef(null);
  // Ref pour gérer la pause lors du hover
  const isPaused = useRef(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(Observer);
    let total = 0;
    let xTo;
    let itemValues = [];

    const content = containerRef.current;
    const cards = content.querySelectorAll(".card");
    const cardsLength = cards.length / 2;
    const half = content.clientWidth / 2;

    // Fonction wrap pour l'effet de boucle infinie
    const wrap = gsap.utils.wrap(-half, 0);

    // Fonction rapide pour animer la propriété x du conteneur
    xTo = gsap.quickTo(content, "x", {
      duration: 0.5,
      ease: "power3",
      modifiers: {
        x: gsap.utils.unitize(wrap),
      },
    });

    // Génère une valeur aléatoire par carte
    for (let i = 0; i < cardsLength; i++) {
      itemValues.push((Math.random() - 0.5) * 15);
    }

    // Timeline pour l'animation des cartes au clic/drag
    const tl = gsap.timeline({ paused: true });
    tl.to(cards, {
      rotate: (index) => itemValues[index % cardsLength],
      xPercent: (index) => itemValues[index % cardsLength],
      yPercent: (index) => itemValues[index % cardsLength],
      scale: 0.95,
      duration: 0.5,
      ease: "back.inOut(3)",
    });

    // Création de l'observer pour le drag/touch
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

    // Tick de GSAP pour l'animation automatique
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

  return (
    <>
      <Navbar />
      <section className="menu_section">
        <div className="background_menu"></div>
        <div className="slider container" ref={containerRef}>
          {duplicatedImages.map((image, index) => (
            <div
              className="card"
              key={index}
              onMouseEnter={() => (isPaused.current = true)}
              onMouseLeave={() => (isPaused.current = false)}
            >
              <img className="slider_img" src={image.src} alt={image.alt} />
              <h2 className="card_name">{image.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
