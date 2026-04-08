"use client"

import { motion } from "framer-motion"
import {
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline"
import { Card, CardContent } from "@workspace/ui/components/card"
import { services } from "@/lib/content"

export function ServicesSection() {
  return (
    <section id="servicos" className="py-32 px-6 bg-[#f2f4f6]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-14"
        >
          <p className="text-xs font-black tracking-[0.2em] text-[#0049db] mb-4 font-[family-name:var(--font-display)]">
            {services.label}
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#191c1e] font-[family-name:var(--font-display)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {services.headline}
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative grid grid-cols-6 gap-3"
        >
          {/* Card 1 — Big stat: Sistemas sob medida */}
          <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 border-0 shadow-[0_4px_20px_rgba(0,73,219,0.06)] bg-white">
            <CardContent className="relative m-auto size-fit pt-6 text-center">
              <div className="relative flex h-24 w-56 items-center justify-center">
                <svg className="text-[#eceef0] absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor" />
                </svg>
                <span className="relative mx-auto block w-fit text-5xl font-black text-[#191c1e] font-[family-name:var(--font-display)]">100%</span>
              </div>
              <h3 className="mt-6 text-center text-2xl font-bold text-[#191c1e] font-[family-name:var(--font-display)]">
                Personalizado
              </h3>
              <p className="mt-2 text-sm text-[#191c1e]/60 max-w-[180px] mx-auto leading-relaxed">
                Cada sistema é construído sob medida para o seu negócio.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 — Automação de Processos */}
          <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-0 shadow-[0_4px_20px_rgba(0,73,219,0.06)] bg-white">
            <CardContent className="pt-6">
              <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#c3c5d8]/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#c3c5d8]/20">
                <svg className="m-auto h-fit w-24 text-[#0049db]" viewBox="0 0 212 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="text-[#eceef0]" d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542Z" fill="currentColor" />
                  <g clipPath="url(#clip0_services)">
                    <path d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542Z" fill="url(#paint0_services)" />
                  </g>
                  <path className="text-[#0049db]" d="M3 72H209" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_services" x1="106.385" y1="1.34375" x2="106" y2="72" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0" />
                      <stop offset="1" stopColor="#0049db" />
                    </linearGradient>
                    <clipPath id="clip0_services">
                      <rect width="129" height="72" fill="white" transform="translate(41)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="mt-6 space-y-2 text-center">
                <h3 className="text-lg font-bold text-[#191c1e] font-[family-name:var(--font-display)]">Automação de Processos</h3>
                <p className="text-sm text-[#191c1e]/60 leading-relaxed">Elimine tarefas repetitivas e reduza erros com automações inteligentes.</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 — Landing Pages de Alta Conversão */}
          <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-0 shadow-[0_4px_20px_rgba(0,73,219,0.06)] bg-white">
            <CardContent className="pt-6">
              <div className="px-4">
                <svg className="w-full text-[#0049db]" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123" fill="url(#paint0_lp)" />
                  <path d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605" stroke="currentColor" strokeWidth="3" />
                  <defs>
                    <linearGradient id="paint0_lp" x1="3" y1="60" x2="3" y2="123" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0049db" stopOpacity="0.15" />
                      <stop offset="1" stopColor="#0049db" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mt-6 space-y-2 text-center">
                <h3 className="text-lg font-bold text-[#191c1e] font-[family-name:var(--font-display)]">Landing Pages de Alta Conversão</h3>
                <p className="text-sm text-[#191c1e]/60 leading-relaxed">Páginas estratégicas focadas em gerar leads e aumentar vendas.</p>
              </div>
            </CardContent>
          </Card>

          {/* Card 4 — Sistemas sob medida (wide) */}
          <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-0 shadow-[0_4px_20px_rgba(0,73,219,0.06)] bg-white">
            <CardContent className="grid pt-6 sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12 rounded-full border border-[#c3c5d8]/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#c3c5d8]/20">
                  <CodeBracketIcon className="m-auto size-5 text-[#191c1e]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#191c1e] font-[family-name:var(--font-display)]">Sistemas sob Medida</h3>
                  <p className="text-sm text-[#191c1e]/60 leading-relaxed">Desenvolvimento de plataformas personalizadas para atender exatamente às necessidades do seu negócio.</p>
                </div>
              </div>
              <div className="rounded-tl-lg relative -mb-6 -mr-6 mt-6 h-fit border-l border-t border-[#c3c5d8]/30 p-6">
                <div className="absolute left-3 top-2 flex gap-1">
                  <span className="block size-2 rounded-full bg-[#eceef0]"></span>
                  <span className="block size-2 rounded-full bg-[#eceef0]"></span>
                  <span className="block size-2 rounded-full bg-[#0049db]/40"></span>
                </div>
                <div className="mt-4 space-y-2 font-mono text-xs text-[#191c1e]/30">
                  {[
                    { text: "function buildSystem(needs) {", color: "text-[#0049db]/70" },
                    { text: "  const solution = design(needs);", color: "" },
                    { text: "  return deploy(solution);", color: "" },
                    { text: "}", color: "text-[#0049db]/70" },
                    { text: "", color: "" },
                    { text: "// feito para você", color: "text-[#0049db]/50" },
                  ].map((line, i) => (
                    <div key={i} className={`${line.color || "text-[#191c1e]/30"}`}>{line.text || "\u00A0"}</div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 5 — Integrações (wide) */}
          <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-0 shadow-[0_4px_20px_rgba(0,73,219,0.06)] bg-white">
            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12 rounded-full border border-[#c3c5d8]/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-[#c3c5d8]/20">
                  <UserGroupIcon className="m-auto size-5 text-[#191c1e]" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#191c1e] font-[family-name:var(--font-display)]">Integrações</h3>
                  <p className="text-sm text-[#191c1e]/60 leading-relaxed">Conectamos diferentes sistemas para centralizar e otimizar sua operação.</p>
                </div>
              </div>
              <div className="before:bg-[#c3c5d8]/30 relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                  <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                    <span className="block h-fit rounded border border-[#c3c5d8]/40 bg-[#f2f4f6] px-2 py-1 text-xs text-[#191c1e]/60">CRM</span>
                    <div className="ring-white size-7 ring-4 rounded-full bg-[#0049db]/10 flex items-center justify-center">
                      <ShieldCheckIcon className="size-3.5 text-[#0049db]" />
                    </div>
                  </div>
                  <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                    <div className="ring-white size-8 ring-4 rounded-full bg-[#0049db] flex items-center justify-center">
                      <BoltIcon className="size-4 text-white" />
                    </div>
                    <span className="block h-fit rounded border border-[#c3c5d8]/40 bg-[#f2f4f6] px-2 py-1 text-xs text-[#191c1e]/60">ERP</span>
                  </div>
                  <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                    <span className="block h-fit rounded border border-[#c3c5d8]/40 bg-[#f2f4f6] px-2 py-1 text-xs text-[#191c1e]/60">API</span>
                    <div className="ring-white size-7 ring-4 rounded-full bg-[#0049db]/10 flex items-center justify-center">
                      <CodeBracketIcon className="size-3.5 text-[#0049db]" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
