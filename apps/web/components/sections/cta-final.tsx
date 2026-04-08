"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ctaFinal } from "@/lib/content"

export function CtaFinalSection() {
  return (
    <section className="py-32 px-6 bg-[#050b14] relative overflow-hidden">
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#0049db]/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="space-y-6"
        >
          <h2
            className="text-4xl md:text-6xl font-black text-white font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {ctaFinal.headline}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            {ctaFinal.body}
          </p>
          <Link
            href={ctaFinal.cta.href}
            className="inline-flex items-center bg-gradient-to-br from-[#0049db] to-[#2962ff] text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide shadow-[0_20px_50px_rgba(0,73,219,0.4)] hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            {ctaFinal.cta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
