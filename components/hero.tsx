"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResume = () => {
    document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingDots = useMemo(
    () =>
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              left: dot.left,
              top: dot.top,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <img
                src="/profilePic.png"
                alt="Vinay Kumar Porandla"
                className="w-44 h-44 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vinay
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            A passionate{" "}
            <span className="text-purple-400 font-semibold">
              MERN Stack Developer
            </span>{" "}
            building scalable full-stack web applications with modern
            technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>

            <Button
              onClick={scrollToResume}
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-gray-400 cursor-pointer"
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
