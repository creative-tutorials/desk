"use client";

import { getGreeting } from "@/utils/greetings";
import { motion } from "framer-motion";

export function WelcomeText({}) {
  const greeting = getGreeting();
  const sentence = `${greeting.greeting}, Desk`;
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };
  const words = sentence.split(" ");
  return (
    <hgroup>
      {/* <h1 className="font-serif text-2xl font-medium text-white">
        {greeting.greeting}, Desk
      </h1> */}
      <motion.h1
        initial="hidden"
        animate="visible"
        className="font-serif text-2xl font-medium text-white"
      >
        {words.map((word, i) => (
          <motion.span key={word} variants={wordVariants} custom={i}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.h1>
    </hgroup>
  );
}
