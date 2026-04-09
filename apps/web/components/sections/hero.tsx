"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const RubiksCube = dynamic(
  () => import("@/components/ui/rubiks-cube").then((m) => m.RubiksCube),
  { ssr: false }
)
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
      {/* Subtle ambient glow behind the Spline canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-1/2 h-1/2 bg-[#0049db]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-1/3 h-1/3 bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            <Balancer>{hero.headline}</Balancer>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg text-on-dark-secondary max-w-lg leading-relaxed"
          >
            <Balancer>{hero.subheadline}</Balancer>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <Link
              href={hero.ctaPrimary.href}
              className="group inline-flex items-center gap-3 bg-white text-[#191c1e] pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              {hero.ctaPrimary.label}
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0049db] text-white group-hover:bg-[#2962ff] transition-colors duration-200 shrink-0">
                <ArrowRightIcon className="size-4" />
              </span>
            </Link>
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

        {/* Visual side — Rubik's Cube 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative hidden lg:block w-full overflow-hidden"
          style={{ height: "520px" }}
        >
          <Suspense fallback={null}>
            <RubiksCube className="w-full h-full" />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}

