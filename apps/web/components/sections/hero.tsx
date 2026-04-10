"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"
import { hero } from "@/lib/content"
import mockupImage from "@/assets/mockup.png"

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
    <section
      id="hero"
      className="relative flex min-h-screen items-start overflow-hidden bg-[#0d1c32] pt-28 pb-16 lg:items-center"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-5%] h-1/2 w-1/2 rounded-full bg-[#0049db]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-1/3 w-1/3 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-10 lg:grid-cols-2 lg:gap-28 lg:px-16">
        {/* ── Left: text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-5xl leading-tight font-black tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <Balancer>{hero.headline}</Balancer>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-lg text-lg leading-relaxed text-on-dark-secondary"
          >
            <Balancer>{hero.subheadline}</Balancer>
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4"
          >
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

        {/* ── Right: app mockup ── */}
        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative hidden perspective-midrange lg:block lg:translate-x-8 lg:scale-110 xl:translate-x-14 xl:scale-[1.18]"
        >
          {/* Blue ambient glow behind mockup */}
          <div
            className="pointer-events-none absolute -inset-6 rounded-[48px] bg-[#0049db]/25 blur-[70px]"
            aria-hidden
          />

          {/* Browser chrome + screenshot */}
          <div className="relative origin-center rotate-x-[12deg] rotate-y-[6deg] rotate-z-[2deg] overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.65),0_0_0_1px_rgba(0,73,219,0.15)] will-change-transform">
            {/* Browser top bar */}
            <div className="flex items-center gap-1.5 border-b border-white/8 bg-[#0f1d2e] px-4 py-[10px]">
              <span className="size-[10px] rounded-full bg-[#ff5f57]" />
              <span className="size-[10px] rounded-full bg-[#febc2e]" />
              <span className="size-[10px] rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 rounded-full bg-white/5 px-3 py-[3px] font-mono text-[10px] tracking-wide text-white/25">
                app.zionsistemas.com.br
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative">
              <Image
                src={mockupImage}
                alt="Painel de controle Zion Sistemas — visão geral com análises e relatórios"
                className="block w-full"
                priority={false}
                quality={90}
              />
              {/* Fade bottom edge into hero background */}
              {/* <div className="absolute right-0 bottom-0 left-0 h-28 bg-gradient-to-t from-[#0d1c32] to-transparent" /> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
