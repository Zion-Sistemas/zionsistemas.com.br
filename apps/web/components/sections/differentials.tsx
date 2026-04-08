"use client"

import { motion } from "framer-motion"
import { differentials } from "@/lib/content"
import Balancer from "react-wrap-balancer"

export function DifferentialsSection() {
  return (
    <section className="py-32 px-6 bg-[#0d1c32] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-xs font-black tracking-[0.2em] text-blue-400 mb-6 font-[family-name:var(--font-display)]">
              {differentials.label}
            </p>
            <h2
              className="text-4xl md:text-6xl font-black text-white leading-tight font-[family-name:var(--font-display)]"
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
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="flex gap-6"
              >
                <span className="text-[#0049db] font-black text-2xl font-[family-name:var(--font-display)] shrink-0 w-8">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
