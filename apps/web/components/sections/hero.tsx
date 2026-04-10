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
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export function HeroSection() {
  return (
    <section id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1c32] pt-28 pb-16"
    >
      {/* Subtle ambient glow behind the Spline canvas */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-5%] h-1/2 w-1/2 rounded-full bg-[#0049db]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-1/3 w-1/3 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-5xl leading-tight font-black tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <Balancer>{hero.headline}</Balancer>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="max-w-lg text-lg leading-relaxed text-on-dark-secondary"
          >
            <Balancer>{hero.subheadline}</Balancer>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href={hero.ctaPrimary.href}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-sm font-semibold text-[#191c1e] transition-transform duration-200 hover:scale-105 active:scale-95 sm:justify-start"
            >
              {hero.ctaPrimary.label}
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0049db] text-white transition-colors duration-200 group-hover:bg-[#2962ff]">
                <ArrowRightIcon className="size-4" />
              </span>
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pr-2 pl-6 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white/10 active:scale-95 sm:justify-start"
            >
              {hero.ctaSecondary.label}
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 group-hover:bg-white/20">
                <ArrowRightIcon className="size-4" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual side — Rubik's Cube 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative hidden w-full overflow-hidden lg:block"
          style={{ height: "520px" }}
        >
          <Suspense fallback={null}>
            <RubiksCube className="h-full w-full" />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
