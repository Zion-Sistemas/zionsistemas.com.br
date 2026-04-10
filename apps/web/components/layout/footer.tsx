import Link from "next/link"
import Image from "next/image"
import { footer } from "@/lib/content"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-label="Instagram"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0d1c32] px-8 sm:px-12 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ZION" width={32} height={32} />
            <span className="font-[family-name:var(--font-display)] text-3xl font-black tracking-tighter">
              {footer.brand}
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-on-dark-secondary">
            {footer.tagline}
          </p>
          {/* Social links */}
          <div className="mt-2 flex items-center gap-3">
            <a
              href="https://www.instagram.com/zionsistemasoficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da ZION Sistemas"
              className="text-on-dark-secondary transition-colors duration-200 hover:text-white"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <p className="mb-1 text-xs font-bold tracking-[0.15em] text-on-dark-muted uppercase">
            Navegação
          </p>
          {footer.nav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-on-dark-secondary transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="mb-1 text-xs font-bold tracking-[0.15em] text-on-dark-muted uppercase">
            Contato
          </p>
          <Link
            href={footer.contact.email.href}
            className="text-sm break-all text-on-dark-secondary transition-colors duration-200 hover:text-[#2962ff]"
          >
            {footer.contact.email.label}
          </Link>
          <Link
            href={footer.contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-on-dark-secondary transition-colors duration-200 hover:text-[#2962ff]"
          >
            {footer.contact.whatsapp.label}
          </Link>
          <address className="not-italic text-sm text-on-dark-secondary">
            Franca, São Paulo &amp; Londrina, Paraná – Brasil
          </address>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-on-dark-muted">{footer.copyright}</p>
      </div>
    </footer>
  )
}
