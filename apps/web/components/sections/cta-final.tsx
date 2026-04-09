"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"
import { ctaFinal } from "@/lib/content"

export function CtaFinalSection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#050b14] px-6 py-32"
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="space-y-6"
        >
          <h2
            className="font-[family-name:var(--font-display)] text-4xl font-black text-white md:text-6xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <Balancer>{ctaFinal.headline}</Balancer>
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-on-dark-secondary">
            <Balancer>{ctaFinal.body}</Balancer>
          </p>
          <Link
            href={ctaFinal.cta.href}
            className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-sm font-semibold text-[#191c1e] transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            {ctaFinal.cta.label}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0049db] text-white transition-colors duration-200 group-hover:bg-[#2962ff]">
              <ArrowRightIcon className="size-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
