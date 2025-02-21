import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Image_360.scss";

import Navbar from "../Navbar/Navbar";
import White_btn from "../White_btn/White_btn";
import Yellow_btn from "../Yellow_btn/Yellow_btn";
// import Arrow from "../Arrow/Arrow"; // Décommente si nécessaire

function Image_360() {
  const containerRef = useRef(null);
  const explanationTitleRef = useRef(null);
  // Références pour accéder aux conteneurs des marqueurs dans le DOM
  const markerRefs = useRef([]);
  // State pour garder l'ordre des marqueurs cliqués (contient les index)
  const [clickedOrder, setClickedOrder] = useState([]);

  // Définition des données pour 3 marqueurs
  // Pour modifier la position d'un marqueur, modifiez ici ses valeurs theta et phi (en radians)
  // Ces valeurs sont converties en coordonnées cartésiennes dans la fonction sphericalToCartesian.
  const markerData = [
    { theta: 1.2, phi: 0.5, info: "Marqueur 1" },
    { theta: 1.0, phi: -0.7, info: "Marqueur 2" },
    { theta: 1.5, phi: 1.2, info: "Marqueur 3" },
  ];
  // markerRadius définit la distance à partir du centre de la sphère (ajustez si besoin)
  const markerRadius = 490;

  // Fonction utilitaire pour convertir des coordonnées sphériques (r, theta, phi)
  // en coordonnées cartésiennes.
  const sphericalToCartesian = (r, theta, phi) =>
    new THREE.Vector3(
      r * Math.sin(theta) * Math.cos(phi),
      r * Math.cos(theta),
      r * Math.sin(theta) * Math.sin(phi)
    );

  useEffect(() => {
    const container = containerRef.current;
    // Création du canvas et ajout dans le conteneur
    const canvas = document.createElement("canvas");
    canvas.className = "web-gl";
    container.appendChild(canvas);

    // Création de la scène 3D
    const scene = new THREE.Scene();
    const fov = 70,
      aspect = window.innerWidth / window.innerHeight,
      near = 0.1,
      far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 0.1);
    scene.add(camera);

    // Création du renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x000000, 1);

    // Création des OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.5;
    controls.target.set(0, 0, 0);

    // Chargement de l'image 360 et création de la sphère inversée
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/img_360_2.jpg");
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);

      // Pour chaque marqueur, on recalcule sa position 3D en utilisant markerData
      markerData.forEach((data, index) => {
        // Calculer la position 3D à partir de theta et phi
        const pos3D = sphericalToCartesian(markerRadius, data.theta, data.phi);
        // On projette la position dans l'espace écran
        const pos = pos3D.clone();
        pos.project(camera);
        const x = ((pos.x + 1) / 2) * window.innerWidth;
        const y = ((-pos.y + 1) / 2) * window.innerHeight;
        const markerEl = markerRefs.current[index];
        if (markerEl) {
          // Centrage de la pastille (ici 50px de largeur/hauteur, donc déduction de 25)
          markerEl.style.left = `${x - 25}px`;
          markerEl.style.top = `${y - 25}px`;
        }
      });
    };
    animate();

    // Gestion du redimensionnement
    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      cancelAnimationFrame(animationFrameId);
      container.removeChild(canvas);
    };
  }, [markerData]);

  // Met à jour la couleur des marqueurs dès qu'ils sont cliqués
  useEffect(() => {
    // Définition de l'ordre des couleurs : premier -> bleu, deuxième -> vert, troisième -> rouge
    const colors = ["blue", "green", "red"];
    clickedOrder.forEach((markerIndex, orderIndex) => {
      const markerDiv = markerRefs.current[markerIndex];
      if (markerDiv) {
        const whiteBtn = markerDiv.querySelector(".white_btn");
        if (whiteBtn) {
          const inside = whiteBtn.querySelector(".inside_btn");
          if (inside) {
            inside.style.background = colors[orderIndex];
          }
        }
      }
    });
  }, [clickedOrder]);

  // Animation initiale du titre d'explication
  useGSAP(() => {
    gsap.set(".explanation_title", { y: 50 });
    gsap.to(".explanation_title", {
      y: 0,
      duration: 1.2,
      ease: "power4.inOut",
    });
  }, []);

  // Gestion de l'animation sur clic du CTA
  const handleCTA = () => {
    gsap.to(".explanation_title", {
      y: 50,
      duration: 1.2,
      ease: "power4.inOut",
    });
    gsap.to(".cta_explanation", {
      background: "#ffd657",
    });
    gsap.to(".text", {
      color: "#1B1B1B",
    });
    gsap.set(".explanation", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    });
    gsap.to(".explanation", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 1.2,
      delay: 1,
      ease: "power3.inOut",
    });
  };

  // Gère le clic sur un marqueur.
  // Si le marqueur n'a pas déjà été cliqué, il est ajouté à l'ordre des clics.
  const handleMarkerClick = (index) => {
    if (!clickedOrder.includes(index) && clickedOrder.length < 3) {
      setClickedOrder([...clickedOrder, index]);
      console.log(`Marqueur ${index + 1}`);
    }
  };

  return (
    <>
      <Navbar />
      <section className="hero" ref={containerRef}>
        {/* Bouton présent dans la scène */}
        <Yellow_btn />
        <div className="explanation">
          <div className="explanation_info">
            <span className="drag_anim"></span>
            <span className="title_container">
              <h2 className="explanation_title" ref={explanationTitleRef}>
                Drag in 360° to navigate
              </h2>
            </span>
            <span className="cta_explanation" onClick={handleCTA}>
              <span className="text">got it !</span>
              {/* <Arrow /> */}
              <span className="arrow_dont_forget"></span>
            </span>
          </div>
        </div>

        {/*
        Rendu des marqueurs :
        Chaque marqueur est affiché à l'aide du composant White_btn.
        Le conteneur de chaque marqueur est positionné en absolu et sa position
        est mise à jour dans l'animate loop.
        Au clic sur le marqueur, handleMarkerClick() gère l'ordre et la couleur.
      */}
        {markerData.map((data, index) => (
          <div
            key={index}
            className="btn_1_container" // Style défini dans White_btn.scss
            ref={(el) => (markerRefs.current[index] = el)}
            onClick={() => handleMarkerClick(index)}
            style={{ position: "absolute" }}
          >
            <White_btn />
          </div>
        ))}
      </section>
    </>
  );
}

export default Image_360;
