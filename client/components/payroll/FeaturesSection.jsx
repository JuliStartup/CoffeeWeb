"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView
} from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Compliance",
    description:
      "Ensure all regulatory requirements are met with our automated compliance solutions.",
    image: "./payroll/14.png",
    color: "from-blue-500/20 via-transparent to-transparent"
  },
  {
    title: "Payroll Administration",
    description:
      "Gain full insight of your data, handle calculations, and automate your pay updates accurately.",
    image: "./payroll/16.png",
    color: "from-purple-500/20 via-transparent to-transparent"
  },
  {
    title: "Time Management",
    description:
      "Easy-to-use time tracking with all your scheduling needs, real-time updates and reporting exactly when you need.",
    image: "./payroll/15.png",
    color: "from-emerald-500/20 via-transparent to-transparent"
  }
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            feature.color
          )}
        />
        <img
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative mt-6">
        <h3 className="text-xl font-semibold tracking-tight font-twk">
          {feature.title}
        </h3>
        <p className="mt-3 text-muted-foreground font-twk font-normal">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  const smoothY = useSpring(y, { damping: 15 });
  const smoothOpacity = useSpring(opacity, { damping: 15 });
  const smoothScale = useSpring(scale, { damping: 15 });

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-4 h-4 bg-primary rounded-full pointer-events-none mix-blend-difference z-50 transition-transform duration-200 ease-out";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${
        e.clientY - 8
      }px)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#faf9fa] to-[#fbf9f9] flex flex-col md:flex-row items-center justify-center pt-24 pb-24">
      <div className="absolute inset-0" />

      <motion.div
        ref={containerRef}
        style={{
          y: smoothY,
          opacity: smoothOpacity,
          scale: smoothScale
        }}
        className="container relative max-w-7xl mx-auto px-4"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-twk text-neutral-700 text-center text-4xl md:text-5xl xl:text-6xl leading-tight tracking-tight font-semibold max-w-xl md:max-w-2xl"
          >
            Stay on top of all Payroll Requirements
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
