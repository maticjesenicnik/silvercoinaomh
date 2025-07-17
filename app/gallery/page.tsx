"use client"

import { useMemo, useState } from "react"

import { GalleryCallToAction } from "components/gallery/GalleryCallToAction"
import { GalleryGrid } from "components/gallery/GalleryGrid"
import { GallerySearch } from "components/gallery/GallerySearch"
import { GalleryStats } from "components/gallery/GalleryStats"
import { GalleryTabs } from "components/gallery/GalleryTabs"
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

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Combine all items with type information
  const allItems = useMemo(() => {
    const monsters = GALLERY.monsters.map(monster => ({ 
      name: monster.name, 
      image: monster.image, 
      type: 'monster' as const 
    }))
    const characters = GALLERY.characters.map(character => ({ 
      name: character.name, 
      image: character.image, 
      type: 'character' as const 
    }))
    return [...monsters, ...characters]
  }, [])

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    let items = allItems

    // Filter by category
    if (selectedCategory === "Monsters") {
      items = items.filter(item => item.type === 'monster')
    } else if (selectedCategory === "Characters") {
      items = items.filter(item => item.type === 'character')
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
    if (category === "Monsters") return allItems.filter(item => item.type === 'monster').length
    if (category === "Characters") return allItems.filter(item => item.type === 'character').length
    return 0
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

        {/* Search Bar */}
        <AnimatedSection delay={200}>
          <GallerySearch 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={400}>
          <GalleryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            getCategoryCount={getCategoryCount}
          />
        </AnimatedSection>

        {/* Gallery Grid */}
        <AnimatedSection delay={600}>
          <GalleryGrid items={filteredItems} />
        </AnimatedSection>

        {/* Results Count */}
        {filteredItems.length > 0 && (
          <AnimatedSection delay={800}>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                Showing <span className="font-semibold text-white">{filteredItems.length}</span>
                {selectedCategory !== "All" && <span> {selectedCategory.toLowerCase()}</span>}
                {searchQuery && <span> matching &qout;{searchQuery}&qout;</span>}
                {filteredItems.length === 1 ? " artwork" : " artworks"}
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Statistics */}
        <GalleryStats 
          monstersCount={GALLERY.monsters.length}
          charactersCount={GALLERY.characters.length}
          totalCount={allItems.length}
        />

        {/* Call to Action */}
        <GalleryCallToAction />
      </div>
    </div>
  )
}

export default Gallery