"use client"

import { motion } from "framer-motion"
import { Code, TrendingUp, Zap, Link2 } from "lucide-react"
import { services } from "@/lib/content"

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={24} />,
  "trending-up": <TrendingUp size={24} />,
  zap: <Zap size={24} />,
  link: <Link2 size={24} />,
}

export function ServicesSection() {
  return (
    <section id="servicos" className="py-32 px-6 bg-[#f2f4f6]">
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
            {services.label}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#191c1e] font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {services.headline}
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="group bg-white rounded-2xl p-8 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,73,219,0.1)] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#0049db]/5 rounded-full flex items-center justify-center mb-6 text-[#0049db] group-hover:bg-[#0049db] group-hover:text-white transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-lg font-bold text-[#191c1e] mb-3 font-[family-name:var(--font-display)]">
                {service.title}
              </h3>
              <p className="text-[#191c1e]/60 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
