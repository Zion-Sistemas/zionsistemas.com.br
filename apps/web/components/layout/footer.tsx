import Link from "next/link"
import { footer } from "@/lib/content"

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[#0d1c32] text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span className="text-3xl font-black tracking-tighter font-[family-name:var(--font-display)]">
            {footer.brand}
          </span>
          <p className="text-white/50 text-sm leading-relaxed">
            {footer.tagline}
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold tracking-[0.15em] text-white/30 uppercase mb-1">
            Navegação
          </p>
          {footer.nav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold tracking-[0.15em] text-white/30 uppercase mb-1">
            Contato
          </p>
          <Link
            href={footer.contact.email.href}
            className="text-sm text-white/60 hover:text-[#2962ff] transition-colors duration-200 break-all"
          >
            {footer.contact.email.label}
          </Link>
          <Link
            href={footer.contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-[#2962ff] transition-colors duration-200"
          >
            {footer.contact.whatsapp.label}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center">
        <p className="text-white/30 text-xs">{footer.copyright}</p>
      </div>
    </footer>
  )
}
