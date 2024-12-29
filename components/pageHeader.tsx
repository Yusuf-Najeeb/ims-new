"use client";

import { motion } from "framer-motion";

interface HeroProps {
  image: string;
  title?: string;
  description?: string;
}

export default function Hero({
  image,
  title = "Welcome",
  description = "Qualitative service Assured...",
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative py-8 px-4 sm:px-8 text-[#F5F5F5] sm:min-h-[60vh] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[#F0A500]/10"
      />

      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold mb-4 relative"
      >
        {title}
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-center text-xl leading-normal w-2/3 relative"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="absolute inset-0 border-2 border-[#F0A500]/20 m-4 sm:m-8 rounded-lg pointer-events-none"
      />
    </motion.section>
  );
}
