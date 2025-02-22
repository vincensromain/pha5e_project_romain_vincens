import React from "react";
import { motion } from "framer-motion";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 1 },
};

export default function Inner({ children }) {
  return (
    <motion.div {...anim(opacity)} className="page">
      {children}
    </motion.div>
  );
}
