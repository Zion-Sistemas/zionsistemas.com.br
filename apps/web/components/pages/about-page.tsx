"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Balancer from "react-wrap-balancer"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, delay },
  }),
}

export function AboutPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d1c32] px-6 pt-40 pb-28 sm:px-12 lg:pt-48 lg:pb-36">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 right-[-8%] h-[55%] w-[40%] rounded-full bg-[#0049db]/12 blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[-5%] h-[40%] w-[35%] rounded-full bg-[#2962ff]/8 blur-[110px]" />
        </div>

        {/* Giant ZION watermark */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
          aria-hidden
        >
          <span
            className="select-none font-[family-name:var(--font-display)] text-[22vw] font-black tracking-[-0.04em] text-white/[0.025] lg:text-[18vw]"
            style={{ lineHeight: 1 }}
          >
            ZION
          </span>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-7 font-[family-name:var(--font-display)] text-xs font-black tracking-[0.28em] text-[#0049db]"
          >
            NOSSA HISTÓRIA
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="font-[family-name:var(--font-display)] text-5xl font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
          >
            <Balancer>
              A ZION nasceu
              <br />
              <span className="text-[#0049db]">de um incômodo.</span>
            </Balancer>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.22}
            className="mt-10 max-w-2xl text-lg leading-relaxed text-[#8aa3bb] sm:text-xl"
          >
            Um grupo de desenvolvedores viu empreendedores que precisavam de
            ferramentas simples, feitas para o jeito que eles trabalham — mas só
            encontravam sistemas caros, genéricos, que no fim não resolviam
            nada.
          </motion.p>
        </div>
      </section>

      {/* ─── Origin ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f7f9fb] px-6 py-24 sm:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            {/* Left: decorative number + vertical rule */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
              className="flex flex-col justify-start gap-6 lg:pt-3"
            >
              <div className="flex items-start gap-5">
                <div className="mt-1 h-16 w-px bg-[#0049db]" aria-hidden />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-xs font-black tracking-[0.22em] text-[#0049db]">
                    ORIGEM
                  </p>
                  <p
                    className="font-[family-name:var(--font-display)] text-8xl font-black leading-none tracking-[-0.04em] text-[#191c1e]/8 lg:text-9xl"
                    aria-hidden
                  >
                    01
                  </p>
                </div>
              </div>

              {/* Pull quote */}
              <blockquote className="rounded-3xl bg-[#0049db] p-8 lg:p-10">
                <p className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-white lg:text-2xl">
                  "Entender antes de entregar."
                </p>
                <footer className="mt-4 text-sm text-white/60">
                  — O jeito ZION de trabalhar
                </footer>
              </blockquote>
            </motion.div>

            {/* Right: narrative */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              className="flex flex-col justify-center gap-8"
            >
              <p className="text-xl leading-relaxed text-[#191c1e]/75 lg:text-2xl">
                Daí surgiu a ZION: uma empresa de software que faz o óbvio que
                as outras não fazem —{" "}
                <strong className="font-semibold text-[#191c1e]">
                  entender o seu negócio antes de entregar qualquer coisa.
                </strong>
              </p>

              <div className="h-px w-16 bg-[#0049db]/30" aria-hidden />

              <p className="text-lg leading-relaxed text-[#191c1e]/65">
                Não chegamos com um sistema pronto. Chegamos com perguntas.
                Queremos saber como você trabalha, o que te trava, onde estão os
                buracos que custam tempo e dinheiro todo mês.
              </p>

              <p className="text-lg leading-relaxed text-[#191c1e]/65">
                Só depois disso a gente constrói.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Purpose ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d1c32] px-6 py-24 sm:px-12 lg:py-36">
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[60%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0049db]/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
            {/* Left: text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
              className="flex flex-col justify-center gap-8"
            >
              <p className="font-[family-name:var(--font-display)] text-xs font-black tracking-[0.22em] text-[#0049db]">
                PROPÓSITO
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-4xl font-black leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
                <Balancer>Fazer parte da sua história.</Balancer>
              </h2>

              <p className="max-w-xl text-lg leading-relaxed text-[#8aa3bb]">
                Não queremos aparecer depois que está tudo resolvido. Queremos
                entrar junto, desde o início — quando ainda está bagunçado — e
                ajudar a organizar o caminho.
              </p>

              <p className="max-w-xl text-lg leading-relaxed text-[#8aa3bb]">
                Uma jornada mais organizada, construída do jeito que faz sentido
                para você.
              </p>
            </motion.div>

            {/* Right: decorative */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.15}
              className="flex flex-col justify-center gap-6"
            >
              <div className="flex items-start gap-5">
                <div className="mt-1 h-16 w-px bg-[#0049db]/40" aria-hidden />
                <p
                  className="font-[family-name:var(--font-display)] text-xs font-black tracking-[0.22em] text-[#8aa3bb]/60"
                  aria-hidden
                >
                  PROPÓSITO
                </p>
              </div>
              <p
                className="font-[family-name:var(--font-display)] text-8xl font-black leading-none tracking-[-0.04em] text-white/5 lg:text-9xl"
                aria-hidden
              >
                02
              </p>

              {/* Values chips */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Escuta ativa",
                  "Soluções sob medida",
                  "Crescimento junto",
                  "Clareza no processo",
                ].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#8aa3bb]"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Weight + CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f7f9fb] px-6 py-24 sm:px-12 lg:py-36">
        {/* Subtle pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0049db 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
          >
            <p className="mb-8 font-[family-name:var(--font-display)] text-xs font-black tracking-[0.28em] text-[#0049db]">
              CONVITE
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-5xl font-black leading-[0.95] tracking-[-0.03em] text-[#191c1e] sm:text-6xl lg:text-7xl">
              <Balancer>
                Todo começo
                <br />
                <span className="text-[#0049db]">tem peso.</span>
              </Balancer>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.12}
            className="mx-auto mt-10 max-w-xl text-xl leading-relaxed text-[#191c1e]/65"
          >
            Queremos dividir esse peso com você.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.22}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0049db] py-2 pr-2 pl-7 text-sm font-bold tracking-wide text-white transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Nos dê essa chance
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0049db] transition-colors duration-200 group-hover:bg-[#e8f0ff]">
                <ArrowRightIcon className="size-4" />
              </span>
            </Link>

            <Link
              href="/"
              className="text-sm font-semibold text-[#191c1e]/50 underline-offset-4 transition-colors duration-200 hover:text-[#0049db] hover:underline"
            >
              Voltar para o início
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
