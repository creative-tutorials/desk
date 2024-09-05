"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { getGreeting } from "@/utils/greetings";
import { motion } from "framer-motion";
import { useUserInfo } from "@/utils/user-info";

export function WelcomeText({}) {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const userInfo = useUserInfo(isSignedIn, isLoaded, user);
  const greeting = getGreeting();
  const sentence = `${greeting.greeting}, ${userInfo?.username}`;
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
