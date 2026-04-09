"use client"

import { motion } from "framer-motion"
import { valueProof } from "@/lib/content"

export function ValueProofSection() {
  return (
    <section className="bg-[#050b14] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {valueProof.lines.map((line, i) => (
            <p
              key={i}
              className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight font-[family-name:var(--font-display)]"
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
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-on-dark-secondary text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {valueProof.body}
        </motion.p>
      </div>
    </section>
  )
}
