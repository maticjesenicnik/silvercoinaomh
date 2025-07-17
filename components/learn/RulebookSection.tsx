"use client"

import { useIntersectionObserver } from "hooks/useIntersectionObserver"
import Image from "next/image"
import { useState } from "react"

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const RulebookCard = ({ title, image, subtitle, pdfUrl, delay = 0 }: { title: string; image: string; subtitle: string; pdfUrl: string; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()
  const [showPDFReader, setShowPDFReader] = useState(false)

  const handleReadOnline = () => {
    setShowPDFReader(true)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = `${title.replace(/\s+/g, "_")}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div
        ref={ref}
        className={`transition-all duration-800 ease-out ${hasIntersected ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-2xl">
          {/* Book Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              className="h-full w-full object-cover brightness-90 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
              src={image}
              alt={title}
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Read overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
                <span className="material-icons-outlined text-2xl text-white">menu_book</span>
              </div>
            </div>

            {/* PDF Badge */}
            <div className="absolute right-3 top-3">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-sm">
                <span className="material-icons-outlined text-sm text-red-400">picture_as_pdf</span>
                <span className="text-xs font-medium text-white">PDF</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h4 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-300">{title}</h4>
            <p className="mb-4 text-gray-300">{subtitle}</p>

            {/* Features */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm text-green-400">check</span>
                <span>Complete rules reference</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm text-green-400">check</span>
                <span>Illustrated examples</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm text-green-400">check</span>
                <span>Quick reference guides</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6">
              <div className="flex gap-2">
                <button
                  onClick={handleReadOnline}
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="material-icons-outlined text-lg">menu_book</span>
                    Read Online
                  </span>
                </button>
                <button
                  onClick={handleDownload}
                  className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Reader Modal */}
      {/* {showPDFReader && <PDFReader pdfUrl={pdfUrl} title={title} onClose={() => setShowPDFReader(false)} />} */}
    </>
  )
}

export const RulebookSection = () => {
  return (
    <AnimatedSection delay={400}>
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">Official Rulebooks</h3>
          <p className="text-gray-300">Download the complete rules and scenario guides</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <RulebookCard
            title="Standard Rules v1.0.9"
            image="/images/rulebook/rulebook.webp"
            subtitle="Complete game rules and mechanics"
            pdfUrl="/pdf/rulebook_v1.0.9.pdf"
            delay={600}
          />
          <RulebookCard
            title="Scenario Book v1.0.9"
            image="/images/rulebook/scenario.webp"
            subtitle="CO-OP and SOLO scenarios"
            pdfUrl="/pdf/scenariobook_v1.0.9.pdf"
            delay={700}
          />
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <div className="mx-auto max-w-2xl rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-3 flex justify-center">
              <span className="material-icons-outlined text-2xl text-yellow-400">info</span>
            </div>
            <h4 className="mb-2 text-lg font-bold text-white">Living Documents</h4>
            <p className="text-sm text-gray-300">
              These rulebooks are regularly updated based on playtesting feedback and community input. Always check for the latest version before your game
              sessions.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
