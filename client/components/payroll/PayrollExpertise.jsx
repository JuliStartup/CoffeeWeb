"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Dedicated support representative",
  "Reliable, weekly available support staff",
  "Experienced payroll experts to handle extraordinary human resource management requirements"
];

export default function PayrollExpertise() {
  return (
    <section className="relative bg-gradient-to-b pt-24 pb-24 from-[#faf9f9] to-[#fbfaf9] w-full min-h-screen overflow-hidden flex items-center justify-center">
      <div className="grid max-w-7xl gap-8 xl:grid-cols-2 xl:gap-16 items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="./payroll/9.png"
            alt="Customer service representative with headset"
            className="rounded-2xl object-cover w-full h-auto"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative flex flex-col gap-6">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-twk text-neutral-700 text-3xl leading-snug tracking-tight font-semibold max-w-xl md:max-w-[5xl]"
              >
                Payroll expertise to help you manage your company's most
                important resource
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base text-muted-foreground font-twk font-normal sm:text-lg"
              >
                Enjoy a streamlined payroll management system with the benefit
                of our dedicated support personnel who will assist you in
                managing your company's most valuable asset - your people.
              </motion.p>
            </div>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-[--purple] flex-shrink-0" />
                  <span className="text-muted-foreground font-twk font-normal">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                size="lg"
                className="bg-[--primaryColor] text-white px-6 py-3 rounded-lg transition duration-300 font-twk font-semibold text-lg hover:bg-black/90 w-full sm:w-auto"
              >
                Book a Demo
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
