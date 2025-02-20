import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Image_360.scss";

function Image_360() {
  const containerRef = useRef(null);
  const [modalInfo, setModalInfo] = useState({ open: false, content: "" });

  useEffect(() => {
    const container = containerRef.current;

    // Création et ajout du canvas
    const canvas = document.createElement("canvas");
    canvas.className = "web-gl";
    container.appendChild(canvas);

    // Scène
    const scene = new THREE.Scene();

    // Caméra
    const fov = 70;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 0.1);
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x000000, 1);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.rotateSpeed = 0.5;
    controls.target.set(0, 0, 0);

    // Chargement de l'image 360 et création de la sphère inversée
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/360_image.jpeg");
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // --- Création des marqueurs en HTML ---

    // On stocke les données de chaque marqueur (position en 3D, info et élément HTML)
    const markers = [];

    // Fonction utilitaire pour convertir des coordonnées sphériques (r, theta, phi)
    // en coordonnées cartésiennes.
    const sphericalToCartesian = (r, theta, phi) =>
      new THREE.Vector3(
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.cos(theta),
        r * Math.sin(theta) * Math.sin(phi)
      );

    // Définition des données pour 3 marqueurs
    const markerData = [
      { theta: 1.2, phi: 0.5, info: "Infos pour le marqueur 1" },
      { theta: 1.0, phi: -0.7, info: "Infos pour le marqueur 2" },
      { theta: 1.5, phi: 1.2, info: "Infos pour le marqueur 3" },
    ];
    const markerRadius = 490; // Pour être positionné sur la paroi intérieure de la sphère

    // Création des éléments HTML pour chaque marqueur
    markerData.forEach((data) => {
      const pos = sphericalToCartesian(markerRadius, data.theta, data.phi);

      // Création d'un élément div qui servira de pastille
      const markerEl = document.createElement("div");
      markerEl.className = "marker";
      // Ces styles de base (que tu pourras surcharger en SCSS) font une pastille rouge
      markerEl.style.position = "absolute";
      markerEl.style.width = "20px";
      markerEl.style.height = "20px";
      markerEl.style.borderRadius = "50%";
      markerEl.style.backgroundColor = "red";
      markerEl.style.cursor = "pointer";
      // Ajout de la pastille au conteneur (elle sera positionnée au-dessus du canvas)
      container.appendChild(markerEl);

      // Écouteur pour ouvrir le modal au clic sur la pastille
      markerEl.addEventListener("click", (e) => {
        e.stopPropagation();
        setModalInfo({ open: true, content: data.info });
      });

      markers.push({ position: pos, element: markerEl, info: data.info });
    });

    // --- Boucle d'animation ---
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);

      // Mise à jour de la position des marqueurs HTML
      markers.forEach((marker) => {
        // On clone la position 3D du marqueur et on la projette dans l'espace écran
        const pos = marker.position.clone();
        pos.project(camera);
        const x = ((pos.x + 1) / 2) * window.innerWidth;
        const y = ((-pos.y + 1) / 2) * window.innerHeight;
        // Centrer la pastille (en déduisant la moitié de sa largeur/hauteur)
        marker.element.style.left = `${x - 10}px`;
        marker.element.style.top = `${y - 10}px`;
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

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(canvas);
      markers.forEach((marker) => {
        container.removeChild(marker.element);
      });
    };
  }, []);

  return (
    <>
      <section className="hero" ref={containerRef}></section>
      {modalInfo.open && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="modal-close"
              onClick={() => setModalInfo({ open: false, content: "" })}
            >
              &times;
            </span>
            <p>{modalInfo.content}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Image_360;
