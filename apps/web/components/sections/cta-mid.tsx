"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ctaMid } from "@/lib/content"

export function CtaMidSection() {
  return (
    <section className="py-32 px-6 bg-[#0d1c32] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#0049db]/10 blur-[120px] rounded-full" />
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
            className="text-3xl md:text-5xl font-black text-white font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {ctaMid.headline}
            <br />
            <span className="text-[#2962ff]">{ctaMid.subheadline}</span>
          </h2>

          <Link
            href={ctaMid.cta.href}
            className="inline-flex items-center bg-gradient-to-br from-[#0049db] to-[#2962ff] text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide shadow-[0_20px_40px_rgba(0,73,219,0.35)] hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            {ctaMid.cta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
