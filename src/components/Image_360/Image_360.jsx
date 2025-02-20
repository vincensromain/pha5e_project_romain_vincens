import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Image_360.scss";

import Arrow from "../Arrow/Arrow";
import White_btn from "../White_btn/White_btn";
import Yellow_btn from "../Yellow_btn/Yellow_btn";

function Image_360() {
  const containerRef = useRef(null);
  const explanationTitleRef = useRef(null);

  // Création et gestion de la scène 3D
  useEffect(() => {
    const container = containerRef.current;
    const canvas = document.createElement("canvas");
    canvas.className = "web-gl";
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    const fov = 70,
      aspect = window.innerWidth / window.innerHeight,
      near = 0.1,
      far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 0.1);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x000000, 1);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.5;
    controls.target.set(0, 0, 0);

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
    };
    animate();

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
  }, []);

  // Animation initiale de explanation_title (slide de bas en haut)
  useGSAP(() => {
    gsap.set(".explanation_title", { y: 50 });
    gsap.to(".explanation_title", {
      y: 0,
      duration: 1.2,
      ease: "power4.inOut",
    });
  }, []);
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

  return (
    <section className="hero" ref={containerRef}>
      <White_btn />
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
    </section>
  );
}

export default Image_360;
