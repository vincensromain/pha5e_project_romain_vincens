import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Yellow_btn.scss";

function Yellow_btn() {
  const btnRef = useRef(null);

  useEffect(() => {
    const magnet = btnRef.current;
    if (!magnet) return;
    if (window.innerWidth <= 991) return;

    const strength =
      parseFloat(magnet.getAttribute("data-magnetic-strength")) || 50;
    const innerTarget = magnet.querySelector("[data-magnetic-inner-target]");
    const innerStrength =
      parseFloat(magnet.getAttribute("data-magnetic-strength-inner")) || 25;

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
          width: "180px",
          height: "180px",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }

    function resetInner() {
      if (innerTarget) {
        gsap.to(innerTarget, {
          width: "161.78px",
          height: "161.78px",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }

    function handleMouseLeave() {
      resetMagnet();
      resetInner();
    }

    magnet.addEventListener("mousemove", moveMagnet);
    magnet.addEventListener("mouseleave", handleMouseLeave);
    magnet.addEventListener("mousedown", enlargeInner);
    magnet.addEventListener("mouseup", resetInner);

    return () => {
      magnet.removeEventListener("mousemove", moveMagnet);
      magnet.removeEventListener("mouseleave", handleMouseLeave);
      magnet.removeEventListener("mousedown", enlargeInner);
      magnet.removeEventListener("mouseup", resetInner);
    };
  }, []);

  return (
    <div className="btn_2_container">
      <div
        className="yellow_btn"
        ref={btnRef}
        data-magnetic-strength="100"
        data-magnetic-strength-inner="50"
      >
        <div className="inside_btn" data-magnetic-inner-target>
          <span className="change_view">change de vue</span>
        </div>
      </div>
    </div>
  );
}

export default Yellow_btn;
