"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Efficient Payroll Processes",
    description:
      "Our integrated payroll solutions automate many of the tedious tasks associated with running payroll."
  },
  {
    title: "Comprehensive payroll solutions",
    description:
      "Designed to accommodate many different payroll needs, our comprehensive solutions are customizable to meet your needs."
  },
  {
    title: "Adaptable",
    description:
      "Our system is uniquely suited for a variety of business sizes and industries, providing powerful tools for administrators when considering payroll for just a few employees or 50,000 employees."
  }
];

export default function TimeManagementSection() {
  return (
    <section className="bg-gradient-to-b from-[#fcfaf7] to-[#fdfaf6] pt-16 pb-16 font-twk w-full min-h-screen text-white px-4">
      <div className="bg-[#0a1233] max-w-[1333px] mx-auto rounded-xl overflow-hidden p-2">
        <div className="absolute inset-0" />

        <div className="container pb-12 pt-12 relative max-w-[1140px] mx-auto">
          <div className="mx-auto max-w-2xl text-center mb-8 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl font-twk"
            >
              Save time with integrated time management and reduced processing
              hours
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-base text-slate-300 font-twk font-normal sm:text-lg"
            >
              As an administrator, time is one of your most valuable resources.
              That's why we built our systems with you in mind. Our
              comprehensive software is designed to help you save time by
              integrating time management tools to reduce processing hours.
            </motion.p>
          </div>

          <div className="grid xl:grid-cols-2 gap-8 items-center px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center p-4"
            >
              <div className="absolute inset-0" />
              <img
                src="./payroll/12.png"
                alt="Person working on payroll documentation"
                className="object-cover w-full h-full rounded-lg"
                sizes="(max-width: 768px) 100vw, 100vw"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 p-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative rounded-2xl p-5 hover:bg-blue-950/50 transition-colors">
                    <h3 className="text-lg font-semibold text-blue-100 mb-2 font-twk">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 font-twk font-normal">
                      {feature.description}
                    </p>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
