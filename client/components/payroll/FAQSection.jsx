"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "How does CoffeeStore make it easier to manage accounting processes?",
    answer:
      "CoffeeStore automates user-friendly financial reporting, journal entries, and report generation. By reducing manual processes, it speeds up workflows, minimizes errors, and allows your team to focus on strategic finance activities."
  },
  {
    question: "Does CoffeeStore offer comprehensive accounting features?",
    answer:
      "Yes, CoffeeStore provides a full-service accounting platform that integrates with financial reporting, budgeting, and payroll. We offer in-depth reports and insights to streamline accounting and financial planning processes."
  },
  {
    question: "How can CoffeeStore save my business time and resources?",
    answer:
      "Absolutely! CoffeeStore is designed to be scalable, supporting businesses from small teams to large organizations. We offer solutions that meet your accounting and financial reporting needs."
  },
  {
    question: "Is CoffeeStore suitable for businesses of all sizes?",
    answer:
      "Yes, CoffeeStore is designed to scale with your business. Whether you're a small startup or a large enterprise, our platform adapts to your needs while maintaining the same level of efficiency and reliability."
  },
  {
    question: "How does CoffeeStore enhance financial reporting and accuracy?",
    answer:
      "CoffeeStore provides automated report generation and controls to ensure that your financial data is accurate, timely, and fully aligned with reporting requirements."
  },
  {
    question: "How does CoffeeStore simplify financial reporting and analysis?",
    answer:
      "CoffeeStore includes integrated reporting features that allow users to track financial performance against budgets and generate insights quickly. This reduces manual oversight and enhances accuracy in financial statements."
  },
  {
    question: "How does CoffeeStore support budgeting and financial planning?",
    answer:
      "CoffeeStore enables seamless integration with budgeting tools, allowing you to align accounting data with future projections, providing valuable insights to guide budgeting and strategic planning in an intuitive, user-friendly platform."
  }
];

export default function FAQSection() {
  return (
    <section className="relative bg-gradient-to-b pt-16 pb-16 from-[#fefbf5] to-[#fffbf5] w-full min-h-screen overflow-hidden flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block font-twk text-neutral-700 mb-6 text-3xl leading-snug tracking-tight font-semibold max-w-xl md:max-w-[5xl]"
          >
            Frequently Asked Questions
          </motion.h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-slate-200"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline font-twk px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-twk font-normal text-left text-base px-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
