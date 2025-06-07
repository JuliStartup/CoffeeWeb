"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PlatformSection() {
  return (
    <section className="bg-gradient-to-b from-[#fbfaf8] to-[#fcfaf7] relative pt-2 pb-2 w-full min-h-screen overflow-hidden flex items-center justify-center px-4">
      <div className="grid xl:grid-cols-2 max-w-7xl gap-24 lg:gap-16 xl:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="mb-4 block text-sm font-medium tracking-wider text-[--purple] uppercase">
            Integrated Management Platform
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-twk text-neutral-700 text-3xl leading-snug tracking-tight font-semibold max-w-2xl md:max-w-[5xl]"
          >
            One platform to manage your teams and tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-muted-foreground md:text-lg"
          >
            It helps to fight hard and be selected for streamlining processes to
            achieve. That's why we believe in removing the barriers between you
            and your goals. Our platform is built so it's powered in checking,
            the believe you deserve only the best in managing your team. That's
            all there is.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <a
              size="lg"
              className="bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90 w-full sm:w-auto"
            >
              Get Started Now
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative aspect-square max-w-lg overflow-hidden rounded-2xl flex items-center justify-center">
            <img
              src="./payroll/10.png"
              alt="Team collaborating on platform"
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
