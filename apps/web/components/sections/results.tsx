"use client"

import { motion } from "framer-motion"
import {
  Square3Stack3DIcon,
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline"
import { results } from "@/lib/content"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Square3Stack3DIcon,
  sliders: AdjustmentsHorizontalIcon,
  rocket: RocketLaunchIcon,
  "refresh-cw": ArrowPathIcon,
  "trending-up": ArrowTrendingUpIcon,
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function ResultsSection() {
  return (
    <section
      id="resultados"
      className="overflow-hidden bg-[#0d1c32] px-8 sm:px-12 py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="mb-5 font-[family-name:var(--font-display)] text-xs font-black tracking-[0.22em] text-[#0049db]">
              {results.label}
            </p>
            <h2
              className="max-w-xl font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-black text-white md:text-5xl lg:text-6xl"
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
            className="hidden items-end gap-2 pb-1 lg:flex"
            aria-hidden
          >
            <span
              className="font-[family-name:var(--font-display)] leading-none font-black text-on-dark-ghost select-none"
              style={{
                fontSize: "clamp(80px, 10vw, 140px)",
                letterSpacing: "-0.04em",
              }}
            >
              {results.items.length}
            </span>
            <span className="mb-4 font-[family-name:var(--font-display)] text-sm font-black tracking-[0.15em] text-on-dark-muted">
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
                className="group relative flex cursor-default items-center gap-5 overflow-hidden border-b border-white/10 py-7 select-none md:gap-8 md:py-8"
              >
                {/* Blue left-edge reveal on hover */}
                <span
                  className="absolute top-0 left-0 h-full w-[3px] origin-bottom scale-y-0 bg-[#0049db] transition-transform duration-300 group-hover:scale-y-100"
                  aria-hidden
                />

                {/* Ordinal */}
                <span className="w-7 shrink-0 pl-3 font-[family-name:var(--font-display)] text-xs font-black text-[#0049db]/60 tabular-nums transition-colors duration-300 group-hover:text-[#0049db]">
                  0{i + 1}
                </span>

                {/* Separator */}
                <span
                  className="hidden h-6 w-px shrink-0 bg-white/10 sm:block"
                  aria-hidden
                />

                {/* Icon */}
                {Icon && (
                  <span className="shrink-0 text-on-dark-muted transition-colors duration-300 group-hover:text-[#0049db]">
                    <Icon className="size-5 md:size-6" />
                  </span>
                )}

                {/* Label */}
                <span
                  className="flex-1 font-[family-name:var(--font-display)] leading-none font-black text-on-dark-secondary transition-colors duration-300 group-hover:text-white"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2.5rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {result.label}
                </span>

                {/* Arrow — appears on hover */}
                <span className="shrink-0 -translate-x-2 pr-2 text-[#0049db] opacity-0 transition-opacity transition-transform duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
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
