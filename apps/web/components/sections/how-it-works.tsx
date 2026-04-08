"use client"

import { motion } from "framer-motion"
import { howItWorks } from "@/lib/content"
import Balancer from "react-wrap-balancer"

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-32 px-6 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-black tracking-[0.2em] text-[#0049db] mb-4 font-[family-name:var(--font-display)]">
            {howItWorks.label}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#191c1e] font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            <Balancer>{howItWorks.headline}</Balancer>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#0049db]/30 to-transparent" />

          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step indicator */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-white shadow-[0_8px_24px_rgba(0,73,219,0.10)] flex items-center justify-center mb-6">
                <span className="text-2xl font-black text-[#0049db] font-[family-name:var(--font-display)]">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#191c1e] mb-3 font-[family-name:var(--font-display)]">
                {step.title}
              </h3>
              <p className="text-[#191c1e]/60 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
