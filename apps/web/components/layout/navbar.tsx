"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { cn } from "@workspace/ui/lib/utils"
import { footer } from "@/lib/content"

const navLinks = [
  { label: "SOLUÇÕES", href: "#servicos" },
  { label: "SOBRE", href: "#sobre" },
  { label: "PROCESSO", href: "#como-funciona" },
  { label: "RESULTADOS", href: "#resultados" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl",
          "rounded-full px-6 py-3 grid grid-cols-[1fr_auto_1fr] items-center",
          "transition-all duration-500",
          scrolled
            ? "bg-[#f7f9fb]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,73,219,0.10)] ring-1 ring-[#c3c5d8]/40"
            : "bg-transparent backdrop-blur-none shadow-none ring-0"
        )}
      >
        {/* Logo — left column */}
        <Link
          href="#hero"
          className={cn(
            "text-2xl font-black tracking-tighter font-[family-name:var(--font-display)] transition-colors duration-500 justify-self-start",
            scrolled ? "text-[#191c1e]" : "text-white"
          )}
        >
          ZION
        </Link>

        {/* Desktop nav — center column, truly centered */}
        <nav className="hidden md:flex gap-8 items-center justify-self-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-[family-name:var(--font-display)] tracking-[0.1em] text-[0.75rem] font-semibold transition-colors duration-500",
                scrolled ? "text-[#191c1e]/60 hover:text-[#191c1e]" : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — right column */}
        <div className="justify-self-end flex items-center">
          <Link
            href="#contato"
            className={cn(
              "group hidden md:inline-flex items-center gap-2.5 pl-5 pr-1.5 py-1.5 rounded-full font-semibold text-xs transition-all duration-200 hover:scale-105 active:scale-95",
              scrolled
                ? "bg-white text-[#191c1e] shadow-[0_2px_12px_rgba(0,0,0,0.10)]"
                : "bg-white text-[#191c1e] shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            )}
          >
            <span className="tracking-widest font-bold">SOLICITAR ORÇAMENTO</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0049db] text-white group-hover:bg-[#2962ff] transition-colors duration-200 shrink-0">
              <ArrowRightIcon className="size-3.5" />
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "md:hidden p-1 transition-colors duration-500",
              scrolled ? "text-[#191c1e]" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-[#f7f9fb]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,73,219,0.12)] p-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-display)] tracking-[0.1em] text-sm font-semibold text-[#191c1e]/70 hover:text-[#0049db] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center bg-[#0049db] text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-[#2962ff] transition-colors"
            >
              SOLICITAR ORÇAMENTO
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
