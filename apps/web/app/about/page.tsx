import type { Metadata } from "next"
import { AboutPage } from "@/components/pages/about-page"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Sobre a ZION | Nossa História",
  description:
    "A ZION nasceu de um incômodo. Conheça a história por trás da empresa que quer fazer parte da sua.",
}

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  )
}
