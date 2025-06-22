"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"

import { PageHeader } from "components/PageHeader"
import { NEWSLETTERS } from "data/newsletters"
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

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div 
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const Newsletters = () => {
  const [selectedYear, setSelectedYear] = useState<string>("All")

  // Extract unique years from newsletters
  const years = useMemo(() => {
    const allYears = NEWSLETTERS.newsletters.map((newsletter: any) => {
      const year = new Date(newsletter.date).getFullYear().toString()
      return year
    })
    const uniqueYears = Array.from(new Set(allYears)).sort((a, b) => parseInt(b) - parseInt(a))
    return ["All", ...uniqueYears]
  }, [])

  // Filter newsletters based on selected year
  const filteredNewsletters = useMemo(() => {
    if (selectedYear === "All") {
      return NEWSLETTERS.newsletters
    }
    return NEWSLETTERS.newsletters.filter((newsletter: any) => {
      const year = new Date(newsletter.date).getFullYear().toString()
      return year === selectedYear
    })
  }, [selectedYear])

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Get newsletter number from title
  const getNewsletterNumber = (title: string) => {
    const match = title.match(/#(\d+)/)
    return match ? match[1] : null
  }

  return (
    <div className="min-h-screen">
      <PageHeader title="Newsletters" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Development Chronicles</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Follow our journey from concept to creation through detailed newsletters that chronicle the development of Silver Coin: Age of Monster Hunters. Get insights into our design process, behind-the-scenes updates, and exclusive content.
            </p>
          </div>
        </AnimatedSection>

        {/* Year Filter */}
        <AnimatedSection delay={200}>
          <div className="mb-12">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Browse by Year</h3>
              <p className="text-sm text-gray-300">Filter newsletters to explore our development timeline</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedYear === year
                      ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white/10 text-gray-300 hover:scale-105 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {year}
                  <span className="ml-1 text-xs opacity-75">
                    ({year === "All" ? NEWSLETTERS.newsletters.length : NEWSLETTERS.newsletters.filter((n: any) => new Date(n.date).getFullYear().toString() === year).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Newsletter Stats */}
        <AnimatedSection delay={400}>
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mb-2">
                <span className="material-icons-outlined text-3xl text-blue-300">rss_feed</span>
              </div>
              <div className="text-2xl font-bold text-white">{NEWSLETTERS.newsletters.length}</div>
              <div className="text-sm text-gray-400">Total Newsletters</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mb-2">
                <span className="material-icons-outlined text-3xl text-green-300">timeline</span>
              </div>
              <div className="text-2xl font-bold text-white">7</div>
              <div className="text-sm text-gray-400">Years of Development</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mb-2">
                <span className="material-icons-outlined text-3xl text-purple-300">update</span>
              </div>
              <div className="text-2xl font-bold text-white">As Needed</div>
              <div className="text-sm text-gray-400">Update Schedule</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Newsletters Grid */}
        <AnimatedSection delay={600}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNewsletters.map((newsletter: any, index: number) => (
              <AnimatedCard key={index} delay={800 + index * 100}>
                <article className="group h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-2xl">
                  <Link href={newsletter.url} target="_blank" className="flex h-full flex-col">
                    {/* Newsletter Preview Image */}
                    <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                      <Image
                        className="h-full w-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
                        src={"/" + newsletter.image}
                        alt={newsletter.title}
                        width={400}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Newsletter Badge */}
                      <div className="absolute left-3 top-3">
                        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-sm">
                          <span className="material-icons-outlined text-sm text-white">article</span>
                          <span className="text-xs font-medium text-white">
                            {getNewsletterNumber(newsletter.title) ? `#${getNewsletterNumber(newsletter.title)}` : 'Newsletter'}
                          </span>
                        </div>
                      </div>

                      {/* Read Article Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
                          <span className="material-icons-outlined text-2xl text-white">open_in_new</span>
                        </div>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute bottom-3 right-3">
                        <div className="rounded-lg border border-white/20 bg-black/60 px-2 py-1 backdrop-blur-sm">
                          <span className="text-xs font-medium text-white">{new Date(newsletter.date).getFullYear()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Newsletter Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Title */}
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-blue-300">
                        {newsletter.title}
                      </h3>

                      {/* Date and Meta Info */}
                      <div className="mb-4 flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <span className="material-icons-outlined text-sm">schedule</span>
                          <span>{formatDate(newsletter.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-icons-outlined text-sm">visibility</span>
                          <span>Dev Update</span>
                        </div>
                      </div>

                      {/* Newsletter Description/Preview */}
                      <div className="mb-4 flex-1">
                        <p className="line-clamp-3 text-sm text-gray-300 leading-relaxed">
                          Get the latest updates on Silver Coin: Age of Monster Hunters development, including new artwork, gameplay mechanics, team insights, and behind-the-scenes content from our passionate development team.
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <span className="material-icons-outlined text-sm">mail</span>
                          Newsletter
                        </span>
                        <span className="flex items-center gap-1 font-medium text-blue-300 transition-colors group-hover:text-blue-200">
                          Read Article
                          <span className="material-icons-outlined text-sm">arrow_outward</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Results Count */}
        <AnimatedSection delay={1000}>
          <div className="mt-8 text-right">
            <p className="text-sm text-gray-400">
              Showing <span className="font-semibold text-white">{filteredNewsletters.length}</span>
              {selectedYear !== "All" && <span> from {selectedYear}</span>} newsletter{filteredNewsletters.length !== 1 ? "s" : ""}
            </p>
          </div>
        </AnimatedSection>

        {/* No Results */}
        {filteredNewsletters.length === 0 && (
          <AnimatedSection delay={800}>
            <div className="py-16 text-center">
              <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="material-icons-outlined mb-4 block text-4xl text-gray-400">rss_feed</span>
                <h3 className="mb-2 text-xl font-bold text-white">No newsletters found</h3>
                <p className="mb-4 text-gray-400">No newsletters found for the year "{selectedYear}".</p>
                <button onClick={() => setSelectedYear("All")} className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                  Show All Newsletters
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Newsletter Timeline */}
        <AnimatedSection delay={1200}>
          <div className="mt-24">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-xl font-bold text-white">Development Timeline</h3>
              <p className="text-sm text-gray-300">Our 7-year journey from concept to creation</p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 transform -translate-x-1/2"></div>
              
              <div className="space-y-8">
                {years.slice(1).map((year, index) => {
                  const yearNewsletters = NEWSLETTERS.newsletters.filter(n => new Date(n.date).getFullYear().toString() === year)
                  return (
                    <div key={year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                          <h4 className="text-lg font-bold text-white">{year}</h4>
                          <p className="text-sm text-gray-300">{yearNewsletters.length} development update{yearNewsletters.length !== 1 ? 's' : ''}</p>
                          <button 
                            onClick={() => setSelectedYear(year)}
                            className="mt-2 text-xs text-blue-300 hover:text-blue-200 transition-colors"
                          >
                            View {year} updates →
                          </button>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 border-2 border-white/20">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={1400}>
          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <span className="material-icons-outlined text-4xl text-blue-300">mail</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Stay in the Loop</h3>
              <p className="mb-8 text-base text-gray-300 leading-relaxed">
                Don't miss out on the latest development updates! Subscribe to our newsletter to get exclusive insights, behind-the-scenes content, and be the first to know about major announcements when we have news to share.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a 
                  href="/#newsletter-signup" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">mail</span>
                  Subscribe to Newsletter
                </a>
                <a 
                  href="/videos" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">smart_display</span>
                  Watch Videos
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Newsletters