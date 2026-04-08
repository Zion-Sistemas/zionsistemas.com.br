"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl",
          "rounded-full px-6 py-3 flex justify-between items-center",
          "transition-all duration-300",
          scrolled
            ? "bg-[#f7f9fb]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,73,219,0.08)]"
            : "bg-[#f7f9fb]/60 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,73,219,0.04)]"
        )}
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="text-2xl font-black tracking-tighter text-[#191c1e] font-[family-name:var(--font-display)]"
        >
          ZION
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-display)] tracking-[0.1em] text-[0.75rem] font-semibold text-[#191c1e]/60 hover:text-[#191c1e] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contato"
          className="hidden md:inline-flex items-center bg-[#0049db] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-[#2962ff] transition-colors duration-200 shadow-[0_4px_20px_rgba(0,73,219,0.25)]"
        >
          SOLICITAR ORÇAMENTO
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#191c1e] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.header>

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
