"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"
import { ctaFinal } from "@/lib/content"
import { StarsBackground } from "@/components/ui/stars"

export function CtaFinalSection() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <StarsBackground
        className="py-32 px-6 bg-[#050b14]"
        starColor="#8aa3bb"
        speed={60}
        factor={0.03}
      >
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
              <Balancer>{ctaFinal.headline}</Balancer>
            </h2>
            <p className="text-on-dark-secondary text-lg max-w-xl mx-auto leading-relaxed">
              <Balancer>{ctaFinal.body}</Balancer>
            </p>
            <Link
              href={ctaFinal.cta.href}
              className="group inline-flex items-center gap-3 bg-white text-[#191c1e] pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              {ctaFinal.cta.label}
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0049db] text-white group-hover:bg-[#2962ff] transition-colors duration-200 shrink-0">
                <ArrowRightIcon className="size-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </StarsBackground>
    </section>
  )
}
