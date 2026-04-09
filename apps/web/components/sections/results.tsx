"use client"

import { motion } from "framer-motion"
import { Square3Stack3DIcon, AdjustmentsHorizontalIcon, RocketLaunchIcon, ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import { results } from "@/lib/content"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers:       Square3Stack3DIcon,
  sliders:      AdjustmentsHorizontalIcon,
  rocket:       RocketLaunchIcon,
  "refresh-cw": ArrowPathIcon,
  "trending-up":ArrowTrendingUpIcon,
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function ResultsSection() {
  return (
    <section id="resultados" className="py-32 px-6 bg-[#0d1c32] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-black tracking-[0.22em] text-[#0049db] mb-5 font-[family-name:var(--font-display)]">
              {results.label}
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-[family-name:var(--font-display)] leading-[1.05] max-w-xl"
              style={{ letterSpacing: "-0.025em" }}
            >
              {results.headline}
            </h2>
          </motion.div>

          {/* Decorative counter badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="hidden lg:flex items-end gap-2 pb-1"
            aria-hidden
          >
            <span
              className="font-black text-on-dark-ghost font-[family-name:var(--font-display)] leading-none select-none"
              style={{ fontSize: "clamp(80px, 10vw, 140px)", letterSpacing: "-0.04em" }}
            >
              {results.items.length}
            </span>
            <span className="text-sm font-black tracking-[0.15em] text-on-dark-muted mb-4 font-[family-name:var(--font-display)]">
              IMPACTOS
            </span>
          </motion.div>
        </div>

        {/* ── Manifesto rows ──────────────────────────────────────────── */}
        <div className="border-t border-white/10">
          {results.items.map((result, i) => {
            const Icon = iconMap[result.icon]
            return (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.09, ease }}
                className="group relative flex items-center gap-5 md:gap-8 py-7 md:py-8 border-b border-white/10 cursor-default select-none overflow-hidden"
              >
                {/* Blue left-edge reveal on hover */}
                <span
                  className="absolute left-0 top-0 h-full w-[3px] bg-[#0049db] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                  aria-hidden
                />

                {/* Ordinal */}
                <span className="text-xs font-black text-[#0049db]/60 group-hover:text-[#0049db] transition-colors duration-300 font-[family-name:var(--font-display)] tabular-nums w-7 shrink-0 pl-3">
                  0{i + 1}
                </span>

                {/* Separator */}
                <span className="hidden sm:block w-px h-6 bg-white/10 shrink-0" aria-hidden />

                {/* Icon */}
                {Icon && (
                  <span className="shrink-0 text-on-dark-muted group-hover:text-[#0049db] transition-colors duration-300">
                    <Icon className="size-5 md:size-6" />
                  </span>
                )}

                {/* Label */}
                <span
                  className="flex-1 font-black text-on-dark-secondary group-hover:text-white transition-colors duration-300 font-[family-name:var(--font-display)] leading-none"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2.5rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {result.label}
                </span>

                {/* Arrow — appears on hover */}
                <span className="shrink-0 pr-2 text-[#0049db] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
