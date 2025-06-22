"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"

import { PageHeader } from "components/PageHeader"
import { VIDEOS } from "data/videos"
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

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Extract unique categories from all videos
  const categories = useMemo(() => {
    const allCategories = VIDEOS.videos.flatMap((video: any) => video.category)
    const uniqueCategories = Array.from(new Set(allCategories))
    return ["All", ...uniqueCategories.sort()]
  }, [])

  // Filter videos based on selected category
  const filteredVideos = useMemo(() => {
    if (selectedCategory === "All") {
      return VIDEOS.videos
    }
    return VIDEOS.videos.filter((video: any) => video.category.includes(selectedCategory))
  }, [selectedCategory])

  return (
    <div className="min-h-screen">
      <PageHeader title="Videos & Podcasts" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Explore Our Content</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Discover gameplay videos, development insights, and behind-the-scenes content that brings the world of Silver Coin: Age of Monster Hunters to life.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={200}>
          <div className="mb-12">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Browse by Category</h3>
              <p className="text-sm text-gray-300">Filter content to find exactly what you're looking for</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white/10 text-gray-300 hover:scale-105 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                  <span className="ml-1 text-xs opacity-75">
                    ({category === "All" ? VIDEOS.videos.length : VIDEOS.videos.filter((v: any) => v.category.includes(category)).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Videos Grid */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredVideos.map((video: any, index: number) => (
              <AnimatedCard key={index} delay={600 + index * 100}>
                <div className="group h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-2xl">
                  <Link href={video.url} target="_blank" className="flex h-full flex-col">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden flex-shrink-0">
                      <Image
                        className="h-full w-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
                        src={"/" + video.image}
                        alt={video.title}
                        width={640}
                        height={360}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Play Button Overlay - Circular */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
                          <span className="material-icons-outlined text-2xl text-white">play_arrow</span>
                        </div>
                      </div>

                      {/* Category Tags */}
                      <div className="absolute left-3 top-3 flex flex-wrap gap-1">
                        {video.category.slice(0, 2).map((cat: string, catIndex: number) => (
                          <span
                            key={catIndex}
                            className="rounded-full border border-white/20 bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
                          >
                            {cat}
                          </span>
                        ))}
                        {video.category.length > 2 && (
                          <span className="rounded-full border border-white/20 bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            +{video.category.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Video Info - Fixed Height Container */}
                    <div className="flex flex-1 flex-col p-4">
                      {/* Title - Fixed height with line clamping */}
                      <h3 className="mb-2 line-clamp-2 h-12 font-bold text-white transition-colors group-hover:text-blue-300">
                        {video.title}
                      </h3>

                      {/* Description - Fixed height with line clamping */}
                      <div className="mb-3 flex-1">
                        {video.description ? (
                          <p className="line-clamp-3 h-16 text-sm text-gray-400">{video.description}</p>
                        ) : (
                          <div className="h-16"></div>
                        )}
                      </div>

                      {/* Footer - Always at bottom */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                        <span>{video.date}</span>
                        <span className="material-icons-outlined text-sm">open_in_new</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Results Count */}
        <AnimatedSection delay={800}>
          <div className="mt-8 text-right">
            <p className="text-sm text-gray-400">
              Showing <span className="font-semibold text-white">{filteredVideos.length}</span>
              {selectedCategory !== "All" && <span> {selectedCategory.toLowerCase()}</span>} video{filteredVideos.length !== 1 ? "s" : ""}
            </p>
          </div>
        </AnimatedSection>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <AnimatedSection delay={600}>
            <div className="py-16 text-center">
              <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="material-icons-outlined mb-4 block text-4xl text-gray-400">video_library</span>
                <h3 className="mb-2 text-xl font-bold text-white">No videos found</h3>
                <p className="mb-4 text-gray-400">No videos match the selected category "{selectedCategory}".</p>
                <button onClick={() => setSelectedCategory("All")} className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                  Show All Videos
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Call to Action */}
        <AnimatedSection delay={1000}>
          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <span className="material-icons-outlined text-4xl text-blue-300">smart_display</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Stay Updated</h3>
              <p className="mb-8 text-base text-gray-300 leading-relaxed">
                Don't miss out on new content! Subscribe to our YouTube channel and follow us on social media for the latest videos, development updates, and behind-the-scenes content.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a 
                  href="https://www.youtube.com/channel/UCJubiQxl7DSBweyIGmaK6-A" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-red-700 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">play_circle</span>
                  Subscribe on YouTube
                </a>
                <a 
                  href="/newsletters" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">rss_feed</span>
                  Read Newsletters
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Videos