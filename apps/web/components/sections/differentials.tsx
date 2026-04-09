"use client"

import { motion } from "framer-motion"
import { differentials } from "@/lib/content"
import Balancer from "react-wrap-balancer"

export function DifferentialsSection() {
  return (
    <section className="overflow-hidden bg-[#0d1c32] px-8 sm:px-12 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <p className="mb-6 font-[family-name:var(--font-display)] text-xs font-black tracking-[0.2em] text-blue-400">
              {differentials.label}
            </p>
            <h2
              className="font-[family-name:var(--font-display)] text-4xl leading-tight font-black text-white md:text-6xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              <Balancer>{differentials.headline}</Balancer>
            </h2>
          </motion.div>

          {/* Right — numbered items */}
          <div className="space-y-12">
            {differentials.items.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="flex gap-6"
              >
                <span className="w-8 shrink-0 font-[family-name:var(--font-display)] text-2xl font-black text-[#0049db]">
                  {item.number}
                </span>
                <div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-on-dark-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
