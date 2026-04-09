"use client"

import { motion } from "framer-motion"
import { valueProof } from "@/lib/content"

export function ValueProofSection() {
  return (
    <section className="bg-[#050b14] px-8 sm:px-12 py-20">
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          {valueProof.lines.map((line, i) => (
            <p
              key={i}
              className="font-[family-name:var(--font-display)] text-2xl leading-tight font-black text-white md:text-3xl lg:text-4xl"
              style={{ letterSpacing: "-0.01em" }}
            >
              {line}
            </p>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-on-dark-secondary"
        >
          {valueProof.body}
        </motion.p>
      </div>
    </section>
  )
}
