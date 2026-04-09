"use client"

import { motion } from "framer-motion"
import { howItWorks } from "@/lib/content"
import Balancer from "react-wrap-balancer"

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-[#f7f9fb] px-8 sm:px-12 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-[family-name:var(--font-display)] text-xs font-black tracking-[0.2em] text-[#0049db]">
            {howItWorks.label}
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-4xl font-black text-[#191c1e] md:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <Balancer>{howItWorks.headline}</Balancer>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute top-10 right-[12.5%] left-[12.5%] hidden h-px bg-[#0049db]/20 lg:block" />

          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step indicator */}
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <span className="font-[family-name:var(--font-display)] text-2xl font-black text-[#0049db]">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold text-[#191c1e]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#191c1e]/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
