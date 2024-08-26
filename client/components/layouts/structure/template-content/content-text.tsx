"use client";

import { AnimatePresence, motion } from "framer-motion";

export function ContentText() {
  const text = "Form builder for your applcations";
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <hgroup className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex justify-center space-x-1">
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.h1
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={gradual}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-5xl font-semibold text-white"
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.h1>
          ))}
        </AnimatePresence>
      </div>
      {/* <h1 className="text-5xl font-semibold text-white">
        Form builder for your applcations
      </h1> */}
      <p className="text-lg text-muted-foreground">
        Generate your own form with the Desk form builder, and reuse it in your
        applications.
      </p>
    </hgroup>
  );
}
