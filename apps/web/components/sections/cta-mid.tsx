"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"
import { ctaMid } from "@/lib/content"

export function CtaMidSection() {
  return (
    <section className="bg-white px-8 sm:px-12 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="space-y-8"
        >
          <h2
            className="font-[family-name:var(--font-display)] text-3xl font-black text-[#0d1c32] md:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <Balancer>
              {ctaMid.headline}
              <br />
              <span className="text-[#0049db]">{ctaMid.subheadline}</span>
            </Balancer>
          </h2>

          <Link
            href={ctaMid.cta.href}
            className="group inline-flex items-center gap-3 rounded-full bg-[#0d1c32] py-2 pr-2 pl-6 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            {ctaMid.cta.label}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0049db] text-white transition-colors duration-200 group-hover:bg-[#2962ff]">
              <ArrowRightIcon className="size-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
