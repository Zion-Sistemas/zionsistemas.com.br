"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
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
            className="group inline-flex items-center gap-3 bg-white text-[#191c1e] pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-transform duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          >
            {ctaFinal.cta.label}
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0049db] text-white group-hover:bg-[#2962ff] transition-colors duration-200 shrink-0">
              <ArrowRightIcon className="size-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
