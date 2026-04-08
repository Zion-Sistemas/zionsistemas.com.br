"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { about } from "@/lib/content"

export function AboutSection() {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-xs font-black tracking-[0.2em] text-[#0049db] mb-5 font-[family-name:var(--font-display)]">
              {about.label}
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-[#191c1e] leading-tight mb-8 font-[family-name:var(--font-display)]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {about.headline}
            </h2>
            {about.body.map((p, i) => (
              <p key={i} className="text-[#191c1e]/70 text-lg leading-relaxed mb-5">
                {p}
              </p>
            ))}

            {/* Bullets */}
            <ul className="mt-6 space-y-3">
              {about.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[#191c1e]/80">
                  <CheckCircle size={18} className="text-[#0049db] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative"
          >
            {/* Background card */}
            <div className="rounded-3xl bg-[#f2f4f6] aspect-[4/3] flex items-center justify-center p-10">
              <div className="text-center space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "100%", label: "FOCO NO CLIENTE" },
                    { value: "98%", label: "SATISFAÇÃO" },
                    { value: "PME", label: "ESPECIALISTAS" },
                    { value: "∞", label: "ESCALABILIDADE" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,73,219,0.06)]">
                      <span className="block text-3xl font-black text-[#191c1e] font-[family-name:var(--font-display)]">
                        {stat.value}
                      </span>
                      <span className="text-xs text-[#191c1e]/40 font-bold tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-[#0049db] rounded-2xl shadow-xl p-6 max-w-xs">
              <p className="text-white font-bold text-sm leading-snug">
                "A ZION estruturou nossa operação e nos deu clareza para crescer."
              </p>
              <p className="text-white/50 text-xs mt-3">— CEO, Empresa Parceira</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
