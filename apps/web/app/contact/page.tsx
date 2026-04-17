import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { ContactForm } from "@/components/contact/contact-form"
import { footer } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contato | ZION",
  description:
    "Fale com a ZION sobre sistemas sob medida, automações, integrações e estrutura digital para crescer com eficiência.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f7f9fb]">
        <section className="relative overflow-hidden bg-[#0d1c32] px-6 pt-36 pb-24 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-10 left-[-10%] h-64 w-64 rounded-full bg-[#0049db]/20 blur-[120px]" />
            <div className="absolute right-[-5%] bottom-[-5%] h-72 w-72 rounded-full bg-[#2962ff]/15 blur-[140px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-black tracking-[0.24em] text-[#8aa3bb]">
                CONTATO ZION
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.95] font-black tracking-[-0.03em] md:text-6xl">
                Estruture a próxima fase do seu negócio com a solução certa.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#8aa3bb]">
                Esta página foi desenhada para acelerar o primeiro contato.
                Compartilhe seu contexto e a ZION retorna com um caminho técnico
                objetivo.
              </p>

              <div className="mt-12 grid gap-4">
                <Link
                  href={footer.contact.email.href}
                  className="group flex items-center justify-between rounded-[1.75rem] bg-white/8 px-5 py-4 text-sm text-white transition-colors duration-200 hover:bg-white/12"
                >
                  <span className="flex items-center gap-3">
                    <EnvelopeIcon className="size-5 text-[#2962ff]" />
                    {footer.contact.email.label}
                  </span>
                  <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href={footer.contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[1.75rem] bg-white/8 px-5 py-4 text-sm text-white transition-colors duration-200 hover:bg-white/12"
                >
                  <span className="flex items-center gap-3">
                    <PhoneIcon className="size-5 text-[#2962ff]" />
                    Conversar via WhatsApp
                  </span>
                  <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="relative lg:pt-8">
              <div className="absolute top-0 -left-6 hidden h-[78%] w-[calc(100%+3rem)] rounded-[2.5rem] bg-white/6 lg:block" />
              <div className="relative lg:translate-y-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
