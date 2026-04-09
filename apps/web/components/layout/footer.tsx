import Link from "next/link"
import Image from "next/image"
import { footer } from "@/lib/content"

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0d1c32] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link href="#hero" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ZION" width={32} height={32} />
            <span className="font-[family-name:var(--font-display)] text-3xl font-black tracking-tighter">
              {footer.brand}
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-on-dark-secondary">
            {footer.tagline}
          </p>
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
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-on-dark-muted">{footer.copyright}</p>
      </div>
    </footer>
  )
}
