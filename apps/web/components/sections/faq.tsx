"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { faq } from "@/lib/content"

export function FaqSection() {
  return (
    <section className="bg-[#0d1c32] px-8 sm:px-12 py-20 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mb-12 text-center"
        >
          <p className="mb-4 font-[family-name:var(--font-display)] text-xs font-black tracking-[0.2em] text-[#0049db]">
            {faq.label}
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-4xl font-black text-white md:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            {faq.headline}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 data-[state=open]:border-[#0049db]/40"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-white hover:no-underline [&>svg]:text-[#0049db]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-on-dark-secondary">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
