"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

import { PageHeader } from "components/PageHeader"
import { GALLERY } from "data/gallery"
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

const ImageCard = ({ item, type, delay = 0 }: { item: any; type: 'monster' | 'character'; delay?: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <AnimatedCard delay={delay}>
      <div className="group h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-2xl">
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Loading placeholder */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/5">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
            </div>
          )}

          {/* Error placeholder */}
          {imageError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 text-gray-400">
              <span className="material-icons-outlined mb-2 text-4xl">broken_image</span>
              <span className="text-sm">Image not available</span>
            </div>
          )}

          {/* Main image */}
          <Image
            className={`h-full w-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={"/" + item.image}
            alt={item.name}
            fill
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Type badge */}
          <div className="absolute left-3 top-3">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-sm">
              <span className="material-icons-outlined text-sm text-white">
                {type === 'monster' ? 'pets' : 'person'}
              </span>
              <span className="text-xs font-medium capitalize text-white">{type}</span>
            </div>
          </div>

          {/* Zoom indicator on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
              <span className="material-icons-outlined text-2xl text-white">zoom_in</span>
            </div>
          </div>

          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-blue-300">
              {item.name}
            </h3>
          </div>
        </div>
      </div>
    </AnimatedCard>
  )
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Combine all items with type information
  const allItems = useMemo(() => {
    const monsters = GALLERY.monsters.map(monster => ({ ...monster, type: 'monster' as const }))
    const characters = GALLERY.characters.map(character => ({ ...character, type: 'character' as const }))
    return [...monsters, ...characters]
  }, [])

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    let items = allItems

    // Filter by category
    if (selectedCategory !== "All") {
      items = items.filter(item => item.type === selectedCategory.toLowerCase())
    }

    // Filter by search query
    if (searchQuery.trim()) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return items
  }, [allItems, selectedCategory, searchQuery])

  // Category options
  const categories = ["All", "Monsters", "Characters"]

  // Get count for each category
  const getCategoryCount = (category: string) => {
    if (category === "All") return allItems.length
    return allItems.filter(item => item.type === category.toLowerCase()).length
  }

  return (
    <div className="min-h-screen">
      <PageHeader title="Gallery" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Art Gallery</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Explore the stunning artwork that brings the world of Silver Coin: Age of Monster Hunters to life. From fearsome monsters to legendary heroes, each piece tells a story of adventure and danger.
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filter Controls */}
        <AnimatedSection delay={200}>
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="mx-auto max-w-md">
              <div className="relative">
                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input
                  type="text"
                  placeholder="Search artwork..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-blue-400 focus:bg-white/10 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <span className="material-icons-outlined text-sm">close</span>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="text-center">
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-bold text-white">Browse by Category</h3>
                <p className="text-sm text-gray-300">Filter artwork by type</p>
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
                      ({getCategoryCount(category)})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <AnimatedSection delay={400}>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredItems.map((item, index) => (
                <ImageCard
                  key={`${item.type}-${item.name}`}
                  item={item}
                  type={item.type}
                  delay={600 + index * 50}
                />
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="py-16 text-center">
              <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="material-icons-outlined mb-4 block text-4xl text-gray-400">search_off</span>
                <h3 className="mb-2 text-xl font-bold text-white">No artwork found</h3>
                <p className="mb-4 text-gray-400">
                  {searchQuery 
                    ? `No results for "${searchQuery}" in ${selectedCategory.toLowerCase()}`
                    : `No ${selectedCategory.toLowerCase()} artwork available`
                  }
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                    >
                      Clear Search
                    </button>
                  )}
                  <button 
                    onClick={() => {
                      setSelectedCategory("All")
                      setSearchQuery("")
                    }}
                    className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Show All Artwork
                  </button>
                </div>
              </div>
            </div>
          )}
        </AnimatedSection>

        {/* Results Count */}
        {filteredItems.length > 0 && (
          <AnimatedSection delay={800}>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                Showing <span className="font-semibold text-white">{filteredItems.length}</span>
                {selectedCategory !== "All" && <span> {selectedCategory.toLowerCase()}</span>}
                {searchQuery && <span> matching "{searchQuery}"</span>}
                {filteredItems.length === 1 ? " artwork" : " artworks"}
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Statistics */}
        <AnimatedSection delay={1000}>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mb-2 flex justify-center">
                <span className="material-icons-outlined text-3xl text-red-400">pets</span>
              </div>
              <div className="text-2xl font-bold text-white">{GALLERY.monsters.length}</div>
              <div className="text-sm text-gray-300">Fearsome Monsters</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mb-2 flex justify-center">
                <span className="material-icons-outlined text-3xl text-blue-400">person</span>
              </div>
              <div className="text-2xl font-bold text-white">{GALLERY.characters.length}</div>
              <div className="text-sm text-gray-300">Legendary Heroes</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="mb-2 flex justify-center">
                <span className="material-icons-outlined text-3xl text-purple-400">palette</span>
              </div>
              <div className="text-2xl font-bold text-white">{allItems.length}</div>
              <div className="text-sm text-gray-300">Total Artworks</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={1200}>
          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <span className="material-icons-outlined text-4xl text-blue-300">brush</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Bring These Characters to Life</h3>
              <p className="mb-8 text-base text-gray-300 leading-relaxed">
                Every piece of artwork in Silver Coin: Age of Monster Hunters has been carefully crafted to immerse you in the world of Atosia. Ready to experience these characters and monsters in action?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a 
                  href="https://www.kickstarter.com/projects/bonafidegames/silver-coin-age-of-monster-hunters" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">rocket_launch</span>
                  Back on Kickstarter
                </a>
                <a 
                  href="/playtest" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">videogame_asset</span>
                  Try the Game
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Gallery