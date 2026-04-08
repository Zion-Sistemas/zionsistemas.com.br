"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { hero } from "@/lib/content"

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#0d1c32]"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-1/2 h-1/2 bg-[#0049db]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-1/3 h-1/3 bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg text-white/60 max-w-lg leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            {/* Primary — pill with blue circle-arrow */}
            <Link
              href={hero.ctaPrimary.href}
              className="group inline-flex items-center gap-3 bg-white text-[#191c1e] pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-transform duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
            >
              {hero.ctaPrimary.label}
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0049db] text-white group-hover:bg-[#2962ff] transition-colors duration-200 shrink-0">
                <ArrowRightIcon className="size-4" />
              </span>
            </Link>
            {/* Secondary — ghost pill with circle-arrow */}
            <Link
              href={hero.ctaSecondary.href}
              className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white pl-6 pr-2 py-2 rounded-full font-semibold text-sm border border-white/15 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {hero.ctaSecondary.label}
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white group-hover:bg-white/20 transition-colors duration-200 shrink-0">
                <ArrowRightIcon className="size-4" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative group hidden lg:block"
        >
          <div className="absolute -inset-8 bg-[#0049db]/15 blur-3xl opacity-60 group-hover:opacity-80 transition duration-1000 rounded-full" />
          <div className="relative rounded-3xl overflow-hidden bg-[#0d1c32] border border-white/10 p-10 flex items-center justify-center min-h-[420px]">
            <div className="w-full space-y-3 font-mono text-xs text-white/20">
              {[
                "const scale = (business) => {",
                "  const system = build(business.needs);",
                "  return automate(system);",
                "};",
                "",
                "// ZION — estrutura que cresce com você",
                'scale({ name: "seu negócio" });',
              ].map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-white/10 w-4 text-right">{i + 1}</span>
                  <span className={line.startsWith("//") ? "text-[#0049db]/60" : ""}>{line}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
