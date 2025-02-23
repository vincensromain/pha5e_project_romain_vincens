import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./White_btn.scss";

function White_btn() {
  const btnRef = useRef(null);

  useEffect(() => {
    const magnet = btnRef.current;
    if (!magnet) return;
    if (window.innerWidth <= 991) return;

    const strength =
      parseFloat(magnet.getAttribute("data-magnetic-strength")) || 25;
    const innerTarget = magnet.querySelector("[data-magnetic-inner-target]");
    const innerStrength =
      parseFloat(magnet.getAttribute("data-magnetic-strength-inner")) ||
      strength;

    function moveMagnet(event) {
      gsap.killTweensOf(magnet);
      if (innerTarget) gsap.killTweensOf(innerTarget);

      const bounding = magnet.getBoundingClientRect();
      const offsetX =
        ((event.clientX - bounding.left) / magnet.offsetWidth - 0.5) *
        (strength / 16);
      const offsetY =
        ((event.clientY - bounding.top) / magnet.offsetHeight - 0.5) *
        (strength / 16);

      gsap.to(magnet, {
        x: offsetX + "em",
        y: offsetY + "em",
        rotate: "0.001deg",
        ease: "power4.out",
        duration: 1.6,
      });

      if (innerTarget) {
        const innerOffsetX =
          ((event.clientX - bounding.left) / magnet.offsetWidth - 0.5) *
          (innerStrength / 16);
        const innerOffsetY =
          ((event.clientY - bounding.top) / magnet.offsetHeight - 0.5) *
          (innerStrength / 16);
        gsap.to(innerTarget, {
          x: innerOffsetX + "em",
          y: innerOffsetY + "em",
          rotate: "0.001deg",
          ease: "power4.out",
          duration: 2,
        });
      }
    }

    function resetMagnet() {
      gsap.killTweensOf(magnet);
      if (innerTarget) gsap.killTweensOf(innerTarget);

      gsap.to(magnet, {
        x: "0em",
        y: "0em",
        ease: "elastic.out(1, 0.3)",
        duration: 1.6,
        onComplete: () => gsap.set(magnet, { clearProps: "transform" }),
      });

      if (innerTarget) {
        gsap.to(innerTarget, {
          x: "0em",
          y: "0em",
          ease: "elastic.out(1, 0.3)",
          duration: 2,
          onComplete: () => gsap.set(innerTarget, { clearProps: "transform" }),
        });
      }
    }

    function enlargeInner() {
      if (innerTarget) {
        gsap.to(innerTarget, {
          width: "45px",
          height: "45px",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }

    function resetInner() {
      if (innerTarget) {
        gsap.to(innerTarget, {
          width: "38.89px",
          height: "38.89px",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }
    magnet.addEventListener("mousemove", moveMagnet);
    magnet.addEventListener("mouseleave", resetMagnet);
    magnet.addEventListener("mousedown", enlargeInner);
    magnet.addEventListener("mouseup", resetInner);
    magnet.addEventListener("mouseleave", resetInner);

    return () => {
      magnet.removeEventListener("mousemove", moveMagnet);
      magnet.removeEventListener("mouseleave", resetMagnet);
      magnet.removeEventListener("mousedown", enlargeInner);
      magnet.removeEventListener("mouseup", resetInner);
      magnet.removeEventListener("mouseleave", resetInner);
    };
  }, []);

  return (
    <div className="btn_1_container">
      <div
        className="white_btn"
        ref={btnRef}
        data-magnetic-strength="60"
        data-magnetic-strength-inner="35"
      >
        <div className="inside_btn" data-magnetic-inner-target></div>
      </div>
    </div>
  );
}

export default White_btn;
