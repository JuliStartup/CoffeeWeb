"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ExperienceSection() {
  return (
    <section className="bg-gradient-to-b from-[#fefbf6] to-[#fefbf5] font-twk w-full text-white px-4">
      <div className="bg-[#0a1233] max-w-[1333px] mx-auto rounded-xl p-2 overflow-hidden">
        {/* Top curve */}
        <div className="absolute inset-x-0 top-0 h-32" />
        <div className="container relative max-w-7xl mx-auto">
          <div className="flex min-h-[40vh] flex-col items-center justify-center py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl font-twk"
              >
                Experience Simplified Accounting Management
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base text-slate-300 font-twk font-normal sm:text-lg"
              >
                Built to deliver highly personalized tools and learn how
                CoffeeStore can simplify impact and bring improved processes for
                your team.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className="bg-white text-black border px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg "
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
