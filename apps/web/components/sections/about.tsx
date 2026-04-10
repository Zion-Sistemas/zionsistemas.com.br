"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"
import { about } from "@/lib/content"
import mountainImage from "@/assets/mountain.png"

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="overflow-hidden bg-[#f7f9fb] px-8 py-20 sm:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-20">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <p className="mb-5 font-[family-name:var(--font-display)] text-xs font-black tracking-[0.2em] text-[#0049db]">
              {about.label}
            </p>
            <h2
              className="mb-8 font-[family-name:var(--font-display)] text-4xl leading-tight font-black text-[#191c1e] md:text-5xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              <Balancer>{about.headline}</Balancer>
            </h2>
            {about.body.map((p, i) => (
              <p
                key={i}
                className="mb-5 text-lg leading-relaxed text-[#191c1e]/70"
              >
                {p}
              </p>
            ))}

            {/* Bullets */}
            <ul className="mt-6 space-y-3">
              {about.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[#191c1e]/80"
                >
                  <CheckCircleIcon className="size-5 shrink-0 text-[#0049db]" />
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
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="relative lg:mt-0"
          >
            {/* Electric backlight — sits outside overflow-hidden so it halos freely */}
            <div
              className="pointer-events-none absolute inset-x-[5%] bottom-[5%] h-[65%] rounded-full bg-[#0049db]/25 blur-[90px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-[20%] bottom-[15%] h-[45%] rounded-full bg-[#2962ff]/20 blur-[65px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 bottom-[25%] h-[30%] w-[35%] -translate-x-1/2 rounded-full bg-[#93c5fd]/15 blur-[45px]"
              aria-hidden
            />

            {/* Background card */}
            <div className="relative h-64 overflow-hidden rounded-3xl sm:h-80 lg:aspect-[4/3] lg:h-auto">
              <div className="absolute inset-x-[-3%] top-0 bottom-0">
                <Image
                  src={mountainImage}
                  alt="Montanha abstrata azul representando a solidez e a evolução da ZION"
                  fill
                  className="object-contain object-bottom"
                  priority={false}
                />
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 left-0 w-64 rounded-2xl bg-[#0049db] p-5 sm:-left-6 sm:w-72 sm:p-6">
              <p className="text-sm leading-snug font-bold text-white">
                "A ZION estruturou nossa operação e nos deu clareza para
                crescer."
              </p>
              <p className="mt-3 text-xs text-on-dark-secondary">
                — CEO, Empresa Parceira
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
