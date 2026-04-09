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
    <section className="py-32 px-6 bg-[#0d1c32]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-12"
        >
          <p className="text-xs font-black tracking-[0.2em] text-[#0049db] mb-4 font-[family-name:var(--font-display)]">
            {faq.label}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {faq.headline}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white/5 rounded-2xl px-6 border border-white/10 data-[state=open]:border-[#0049db]/40"
              >
                <AccordionTrigger className="text-white font-semibold text-left py-5 hover:no-underline [&>svg]:text-[#0049db]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-on-dark-secondary leading-relaxed pb-5">
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
