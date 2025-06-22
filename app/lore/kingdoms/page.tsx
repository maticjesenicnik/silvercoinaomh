"use client"

import Image from "next/image"
import { useMemo, useState, useRef } from "react"
import { PageHeader } from "components/PageHeader"
import { KINGDOMS } from "data/kingdoms"
import { useIntersectionObserver } from "hooks/useIntersectionObserver"

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const AnimatedParagraph = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div 
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-base text-gray-200 leading-relaxed text-justify transition-all duration-300 hover:text-gray-100">
        {children}
      </div>
    </div>
  )
}

const Kingdoms = () => {
  const [selectedKingdomIndex, setSelectedKingdomIndex] = useState<number | null>(null)
  const selectorRef = useRef<HTMLDivElement>(null)

  // Get the currently selected kingdom
  const selectedKingdom = useMemo(() => {
    return selectedKingdomIndex !== null ? KINGDOMS.kingdoms[selectedKingdomIndex] : null
  }, [selectedKingdomIndex])

  // Function to scroll to selector section with proper offset for header
  const scrollToSelector = () => {
    if (selectorRef.current) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = selectorRef.current.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle kingdom navigation with scroll
  const navigateToKingdom = (newIndex: number) => {
    setSelectedKingdomIndex(newIndex)
    // Small delay to ensure the content has updated before scrolling
    setTimeout(scrollToSelector, 100)
  }

  // Show all kingdoms overview
  const showOverview = () => {
    setSelectedKingdomIndex(null)
    setTimeout(scrollToSelector, 100)
  }

  return (
    <div className="min-h-screen">
      <PageHeader title="Kingdoms" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Realms of Atosia</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Explore the diverse kingdoms that make up the world of Atosia, each with their own unique culture, history, and challenges that shape the monster hunting landscape.
            </p>
          </div>
        </AnimatedSection>

        {/* World Map */}
        <AnimatedSection delay={200}>
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">The World of Atosia</h3>
              <p className="text-sm text-gray-300">A continent divided into six mighty kingdoms</p>
            </div>
            
            <div className="mx-auto max-w-2xl">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <Image 
                    className="h-full w-full object-cover object-center brightness-75 transition-all duration-500 group-hover:scale-105 group-hover:brightness-90" 
                    width={600} 
                    height={1067} 
                    src={"/" + KINGDOMS.world.image} 
                    alt={KINGDOMS.world.name}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Map Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-lg border border-white/20 bg-black/60 p-4 backdrop-blur-sm">
                      <h4 className="text-lg font-bold text-white">{KINGDOMS.world.name}</h4>
                      <p className="text-sm text-gray-300">Six kingdoms, countless adventures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Kingdom Selector */}
        <AnimatedSection delay={400}>
          <div ref={selectorRef} className="mb-16">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Choose Your Realm</h3>
              <p className="text-sm text-gray-300">Select a kingdom to learn about its history and culture</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={showOverview}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedKingdomIndex === null
                    ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white/10 text-gray-300 hover:scale-105 hover:bg-white/20 hover:text-white"
                }`}
              >
                All Kingdoms
              </button>
              {KINGDOMS.kingdoms.map((kingdom, index) => (
                <button
                  key={index}
                  onClick={() => navigateToKingdom(index)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedKingdomIndex === index
                      ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white/10 text-gray-300 hover:scale-105 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {kingdom.name}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Content Area */}
        {selectedKingdom ? (
          /* Single Kingdom View */
          <article className="mx-auto max-w-6xl">
            {/* Kingdom Header */}
            <AnimatedSection delay={600}>
              <header className="mb-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Kingdom Image */}
                  <div className="order-2 lg:order-1">
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      {/* Fixed aspect ratio container that works for any image dimensions */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image 
                          className="h-full w-full object-cover object-center brightness-75 transition-all duration-500 group-hover:scale-105 group-hover:brightness-90" 
                          width={800} 
                          height={600} 
                          src={"/" + selectedKingdom.image} 
                          alt={selectedKingdom.name}
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Kingdom Info */}
                  <div className="order-1 lg:order-2 flex flex-col justify-center">
                    <div className="mb-6">
                      <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                        {selectedKingdom.name}
                      </h1>
                      
                      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">public</span>
                          <span>Kingdom of Atosia</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">auto_stories</span>
                          <span>{selectedKingdom.description.length} paragraphs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">schedule</span>
                          <span>~{Math.ceil(selectedKingdom.description.join(' ').split(' ').length / 200)} min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">bookmark</span>
                          <span>Kingdom {selectedKingdomIndex! + 1} of {KINGDOMS.kingdoms.length}</span>
                        </div>
                      </div>

                      {/* Kingdom Introduction */}
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Discover the rich history and unique culture of {selectedKingdom.name}, one of the six great kingdoms that shape the political and social landscape of Atosia.
                      </p>
                    </div>

                    {/* Decorative divider */}
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/50 to-blue-400/50"></div>
                      <div className="mx-4 flex h-2 w-2 items-center justify-center rounded-full bg-blue-400/50"></div>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-400/50 to-blue-400/50"></div>
                    </div>
                  </div>
                </div>
              </header>
            </AnimatedSection>

            {/* Kingdom Description */}
            <AnimatedSection delay={800}>
              <div className="prose max-w-none">
                <div className="space-y-8">
                  {selectedKingdom.description.map((description: string, descriptionIndex: number) => (
                    <div key={descriptionIndex}>
                      <AnimatedParagraph delay={descriptionIndex * 150}>
                        {description}
                      </AnimatedParagraph>
                      
                      {/* Elegant separator between paragraphs */}
                      {descriptionIndex < selectedKingdom.description.length - 1 && (
                        <AnimatedSection delay={descriptionIndex * 150 + 75}>
                          <div className="mt-8 flex justify-center">
                            <div className="flex items-center gap-3">
                              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-600"></div>
                              <div className="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
                              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
                              <div className="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
                              <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-600"></div>
                            </div>
                          </div>
                        </AnimatedSection>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Kingdom Navigation */}
            <AnimatedSection delay={1000}>
              <nav className="mt-16 border-t border-white/10 pt-8">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigateToKingdom(Math.max(0, selectedKingdomIndex! - 1))}
                    disabled={selectedKingdomIndex === 0}
                    className="group flex items-center gap-3 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <span className="material-icons-outlined text-lg transition-transform group-hover:-translate-x-1">chevron_left</span>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Previous</div>
                      <div>
                        {selectedKingdomIndex! > 0 ? KINGDOMS.kingdoms[selectedKingdomIndex! - 1].name : 'No previous kingdom'}
                      </div>
                    </div>
                  </button>

                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Kingdom</div>
                    <div className="text-sm font-medium text-white">
                      {selectedKingdomIndex! + 1} of {KINGDOMS.kingdoms.length}
                    </div>
                  </div>

                  <button
                    onClick={() => navigateToKingdom(Math.min(KINGDOMS.kingdoms.length - 1, selectedKingdomIndex! + 1))}
                    disabled={selectedKingdomIndex === KINGDOMS.kingdoms.length - 1}
                    className="group flex items-center gap-3 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Next</div>
                      <div>
                        {selectedKingdomIndex! < KINGDOMS.kingdoms.length - 1 ? KINGDOMS.kingdoms[selectedKingdomIndex! + 1].name : 'No next kingdom'}
                      </div>
                    </div>
                    <span className="material-icons-outlined text-lg transition-transform group-hover:translate-x-1">chevron_right</span>
                  </button>
                </div>
              </nav>
            </AnimatedSection>
          </article>
        ) : (
          /* All Kingdoms Overview */
          <div className="space-y-16">
            {KINGDOMS.kingdoms.map((kingdom, kingdomIndex) => (
              <AnimatedSection key={kingdomIndex} delay={600 + kingdomIndex * 200}>
                <article className="group cursor-pointer" onClick={() => navigateToKingdom(kingdomIndex)}>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                      {/* Kingdom Image - Fixed aspect ratio for consistency */}
                      <div className={`relative overflow-hidden ${kingdomIndex % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        {/* Consistent aspect ratio container */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image 
                            className="h-full w-full object-cover object-center brightness-75 transition-all duration-500 group-hover:scale-105 group-hover:brightness-90" 
                            width={800} 
                            height={600} 
                            src={"/" + kingdom.image} 
                            alt={kingdom.name}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />
                          
                          {/* Click indicator */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
                              <span className="material-icons-outlined text-2xl text-white">visibility</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Kingdom Content */}
                      <div className={`flex flex-col justify-center p-8 lg:p-12 ${kingdomIndex % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="mb-4">
                          <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-blue-300 lg:text-3xl">
                            {kingdom.name}
                          </h3>
                          
                          <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
                            <span className="material-icons-outlined text-sm">public</span>
                            <span>Kingdom {kingdomIndex + 1} of {KINGDOMS.kingdoms.length}</span>
                            <span>•</span>
                            <span>~{Math.ceil(kingdom.description.join(' ').split(' ').length / 200)} min read</span>
                          </div>
                        </div>

                        {/* First paragraph as preview */}
                        <p className="mb-6 text-base text-gray-300 leading-relaxed line-clamp-4">
                          {kingdom.description[0]}
                        </p>

                        {/* Read more indicator */}
                        <div className="flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors group-hover:text-blue-200">
                          <span>Learn more about {kingdom.name}</span>
                          <span className="material-icons-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <AnimatedSection delay={1200}>
          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <span className="material-icons-outlined text-4xl text-blue-300">explore</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Explore the World</h3>
              <p className="mb-8 text-base text-gray-300 leading-relaxed">
                Each kingdom offers unique challenges, contracts, and monsters to hunt. Discover the political intrigue, ancient mysteries, and diverse cultures that make Atosia a rich and immersive world.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a 
                  href="/lore/characters" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">person</span>
                  Meet the Characters
                </a>
                <a 
                  href="/lore/stories" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">auto_stories</span>
                  Read the Stories
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Kingdoms