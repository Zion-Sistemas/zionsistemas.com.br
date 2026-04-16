"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"
import { cn } from "@workspace/ui/lib/utils"
import { footer } from "@/lib/content"

const navLinks = [
  { label: "SOLUÇÕES", href: "/#servicos" },
  { label: "SOBRE", href: "/about" },
  { label: "PROCESSO", href: "/#como-funciona" },
  { label: "RESULTADOS", href: "/#resultados" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isContactPage = pathname === "/contact"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2",
          "flex items-center justify-between rounded-full px-6 py-3",
          "md:grid md:grid-cols-[1fr_auto_1fr]",
          "transition-all duration-500",
          scrolled
            ? "bg-[#f7f9fb]/85 ring-1 ring-[#c3c5d8]/40 backdrop-blur-xl"
            : "bg-transparent ring-0 backdrop-blur-none"
        )}
      >
        {/* Logo — left */}
        <Link href="/" className="flex items-center gap-2 md:justify-self-start">
          <Image
            src="/logo.png"
            alt="ZION"
            width={36}
            height={36}
            className="transition-all duration-500"
            priority
          />
          <span
            className={cn(
              "font-[family-name:var(--font-display)] text-2xl font-black tracking-tighter transition-colors duration-500",
              scrolled ? "text-[#191c1e]" : "text-white"
            )}
          >
            ZION
          </span>
        </Link>

        {/* Desktop nav — center column, truly centered */}
        <nav className="hidden items-center gap-8 md:flex md:justify-self-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-[family-name:var(--font-display)] text-[0.75rem] font-semibold tracking-[0.1em] transition-colors duration-500",
                scrolled
                  ? "text-[#191c1e]/60 hover:text-[#191c1e]"
                  : "text-on-dark-secondary hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Mobile hamburger — right */}
        <div className="flex items-center md:justify-self-end">
          {!isContactPage ? (
            <Link
              href="/contact"
              className={cn(
                "group hidden items-center gap-2.5 rounded-full py-1.5 pr-1.5 pl-5 text-xs font-semibold transition-all duration-300 hover:scale-105 active:scale-95 md:inline-flex",
                scrolled ? "bg-[#0049db] text-white" : "bg-white text-[#191c1e]"
              )}
            >
              <span className="font-bold tracking-widest">
                FALAR COM UM CONSULTOR
              </span>
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  scrolled
                    ? "bg-white text-[#0049db] group-hover:bg-[#e8f0ff]"
                    : "bg-[#0049db] text-white group-hover:bg-[#2962ff]"
                )}
              >
                <ArrowRightIcon className="size-3.5" />
              </span>
            </Link>
          ) : null}

          {/* Mobile hamburger */}
          <button
            className={cn(
              "p-1 transition-colors duration-500 md:hidden",
              scrolled ? "text-[#191c1e]" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="size-6" />
            ) : (
              <Bars3Icon className="size-6" />
            )}
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
            className="fixed top-20 right-4 left-4 z-40 flex flex-col gap-5 rounded-2xl bg-[#f7f9fb]/95 p-6 backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.1em] text-[#191c1e]/70 transition-colors hover:text-[#0049db]"
              >
                {link.label}
              </Link>
            ))}
            {!isContactPage ? (
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-[#0049db] px-6 py-3 text-center text-xs font-bold tracking-widest text-white transition-colors hover:bg-[#2962ff]"
              >
              FALAR COM UM CONSULTOR
              </Link>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
