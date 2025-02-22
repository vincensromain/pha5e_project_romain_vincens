import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Le_jardin_vue_2.scss";
import Navbar from "../Navbar/Navbar";
import YellowBtn from "../Yellow_btn/Yellow_btn";

function Le_jardin_vue_2() {
  const containerRef = useRef(null);
  const markerRef = useRef(null);
  const marker2Ref = useRef(null);

  const createMarker = (markerClass = "", innerClass = "inner_marker") => {
    const marker = document.createElement("div");
    marker.className = `marker ${markerClass}`;
    Object.assign(marker.style, {
      position: "absolute",
      height: "50px",
      width: "50px",
      borderRadius: "50%",
      border: "2px solid white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    });
    marker.setAttribute("data-magnetic-strength", "60");
    marker.setAttribute("data-magnetic-strength-inner", "35");
    const innerMarker = document.createElement("div");
    innerMarker.className = innerClass;
    Object.assign(innerMarker.style, {
      height: "38.89px",
      width: "38.89px",
      borderRadius: "50%",
      background: "white",
    });
    marker.appendChild(innerMarker);
    return { marker, innerMarker };
  };

  const addMagneticEffects = (el, innerEl) => {
    const strength =
      parseFloat(el.getAttribute("data-magnetic-strength")) || 25;
    const innerStrength =
      parseFloat(el.getAttribute("data-magnetic-strength-inner")) || strength;
    const moveMagnet = (event) => {
      gsap.killTweensOf(el);
      gsap.killTweensOf(innerEl);
      const { left, top, width, height } = el.getBoundingClientRect();
      const offsetX = ((event.clientX - left) / width - 0.5) * (strength / 16);
      const offsetY = ((event.clientY - top) / height - 0.5) * (strength / 16);
      gsap.to(el, {
        x: `${offsetX}em`,
        y: `${offsetY}em`,
        rotate: "0.001deg",
        ease: "power4.out",
        duration: 1.6,
      });
      const innerOffsetX =
        ((event.clientX - left) / width - 0.5) * (innerStrength / 16);
      const innerOffsetY =
        ((event.clientY - top) / height - 0.5) * (innerStrength / 16);
      gsap.to(innerEl, {
        x: `${innerOffsetX}em`,
        y: `${innerOffsetY}em`,
        rotate: "0.001deg",
        ease: "power4.out",
        duration: 2,
      });
    };
    const resetMagnet = () => {
      gsap.killTweensOf(el);
      gsap.killTweensOf(innerEl);
      gsap.to(el, {
        x: "0em",
        y: "0em",
        ease: "elastic.out(1, 0.3)",
        duration: 1.6,
        onComplete: () => gsap.set(el, { clearProps: "transform" }),
      });
      gsap.to(innerEl, {
        x: "0em",
        y: "0em",
        ease: "elastic.out(1, 0.3)",
        duration: 2,
        onComplete: () => gsap.set(innerEl, { clearProps: "transform" }),
      });
    };
    const enlargeInner = () => {
      gsap.to(innerEl, {
        width: "45px",
        height: "45px",
        duration: 0.2,
        ease: "power2.out",
      });
    };
    const resetInner = () => {
      gsap.to(innerEl, {
        width: "38.89px",
        height: "38.89px",
        duration: 0.2,
        ease: "power2.out",
      });
    };
    el.addEventListener("mousemove", moveMagnet);
    el.addEventListener("mouseleave", () => {
      resetMagnet();
      resetInner();
    });
    el.addEventListener("mousedown", enlargeInner);
    el.addEventListener("mouseup", resetInner);
  };

  const updateMarkerPosition = (marker, position, camera) => {
    const pos = position.clone().project(camera);
    const x = ((pos.x + 1) / 2) * window.innerWidth;
    const y = ((-pos.y + 1) / 2) * window.innerHeight;
    marker.style.left = `${x - 25}px`;
    marker.style.top = `${y - 25}px`;
    marker.style.display = pos.z > 1 ? "none" : "block";
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = document.createElement("canvas");
    canvas.className = "web-gl";
    container.appendChild(canvas);
    const { marker: marker1, innerMarker: innerMarker1 } = createMarker();
    const { marker: marker2, innerMarker: innerMarker2 } = createMarker(
      "marker2",
      "inner_marker2"
    );
    container.appendChild(marker1);
    container.appendChild(marker2);
    markerRef.current = marker1;
    marker2Ref.current = marker2;
    addMagneticEffects(marker1, innerMarker1);
    addMagneticEffects(marker2, innerMarker2);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0.1);
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x000000, 1);
    const controls = new OrbitControls(camera, renderer.domElement);
    Object.assign(controls, {
      enableZoom: true,
      enablePan: false,
      enableDamping: true,
      dampingFactor: 0.08,
      rotateSpeed: 0.5,
    });
    controls.target.set(0, 0, 0);
    const texture = new THREE.TextureLoader().load("/img_360_1.jpg");
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const sphere = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ map: texture })
    );
    scene.add(sphere);
    const markerPosition1 = new THREE.Vector3(-190, -40, -100);
    const markerPosition2 = new THREE.Vector3(70, 20, -100);
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      updateMarkerPosition(marker1, markerPosition1, camera);
      updateMarkerPosition(marker2, markerPosition2, camera);
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
      container.removeChild(marker1);
      container.removeChild(marker2);
    };
  }, []);

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
    gsap.to(".cta_explanation", { background: "#ffd657" });
    gsap.to(".text", { color: "#1B1B1B" });
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
    <>
      <Navbar />
      <section className="hero" ref={containerRef}>
        <Link to="/Le_jardin_vue_3">
          <YellowBtn />
        </Link>
        <div className="explanation">
          <div className="explanation_info">
            <span className="drag_anim" />
            <span className="title_container">
              <h2 className="explanation_title">Drag in 360° to navigate</h2>
            </span>
            <span className="cta_explanation" onClick={handleCTA}>
              <span className="text">got it !</span>
              <span className="arrow_dont_forget" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Le_jardin_vue_2;
