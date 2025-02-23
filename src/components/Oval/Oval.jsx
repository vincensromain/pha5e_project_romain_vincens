import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Oval.scss";

function Oval() {
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        visibility: "hidden",
      });
      const tl = gsap.timeline();

      tl.to(path, {
        visibility: "visible",
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.8,
      })
        .to(path, {
          strokeDashoffset: length,
          duration: 0.6,
          ease: "power2.in",
          delay: 0.8,
        })
        .set(path, {
          visibility: "hidden",
        });
    }
  }, []);

  return (
    <svg
      className="oval"
      width="460"
      height="200"
      viewBox="0 0 280 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M99.193 18.5603C139.693 7.89367 228.893 -7.93966 261.693 14.0603C302.693 41.5603 267.693 82.5605 109.193 111.561C-49.307 140.561 3.19302 50.5608 53.193 34.5605"
        stroke="#FFD657"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Oval;
