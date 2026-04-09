"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"
import { ctaMid } from "@/lib/content"

export function CtaMidSection() {
  return (
    <section className="py-32 px-6 bg-[#0049db]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="space-y-8"
        >
          <h2
            className="text-3xl md:text-5xl font-black text-white font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            <Balancer>
              {ctaMid.headline}
              <br />
              <span className="text-white/70">{ctaMid.subheadline}</span>
            </Balancer>
          </h2>

          <Link
            href={ctaMid.cta.href}
            className="group inline-flex items-center gap-3 bg-white text-[#0d1c32] pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            {ctaMid.cta.label}
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0d1c32] text-white group-hover:bg-[#050b14] transition-colors duration-200 shrink-0">
              <ArrowRightIcon className="size-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
