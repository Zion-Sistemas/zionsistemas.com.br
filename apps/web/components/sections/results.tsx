"use client"

import { motion } from "framer-motion"
import { Square3Stack3DIcon, AdjustmentsHorizontalIcon, RocketLaunchIcon, ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import { results } from "@/lib/content"

const iconMap: Record<string, React.ReactNode> = {
  layers: <Square3Stack3DIcon className="size-7" />,
  sliders: <AdjustmentsHorizontalIcon className="size-7" />,
  rocket: <RocketLaunchIcon className="size-7" />,
  "refresh-cw": <ArrowPathIcon className="size-7" />,
  "trending-up": <ArrowTrendingUpIcon className="size-7" />,
}

export function ResultsSection() {
  return (
    <section id="resultados" className="py-32 px-6 bg-[#f2f4f6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-black tracking-[0.2em] text-[#0049db] mb-4 font-[family-name:var(--font-display)]">
            {results.label}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#191c1e] font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {results.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {results.items.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,73,219,0.08)] transition-all duration-300"
            >
              <div className="text-[#0049db]">{iconMap[result.icon]}</div>
              <p className="font-bold text-[#191c1e] text-sm font-[family-name:var(--font-display)]">
                {result.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
