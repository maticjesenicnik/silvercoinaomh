"use client"

import { useMemo } from "react"

import { GalleryCallToAction } from "components/gallery/GalleryCallToAction"
import { GalleryGrid } from "components/gallery/GalleryGrid"
import { GalleryStats } from "components/gallery/GalleryStats"
import { ImageViewer } from "components/gallery/ImageViewer"
import { PageHeader } from "components/PageHeader"
import { useImageViewer } from "context/ImageViewerContext"
import { GALLERY } from "data/gallery"
import { useIntersectionObserver } from "hooks/useIntersectionObserver"
import React from "react"

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

const Gallery = () => {
  const { setImages } = useImageViewer()

  // Combine all items with type information
  const allItems = useMemo(() => {
    const monsters = GALLERY.monsters.map((monster) => ({
      name: monster.name,
      image: monster.image,
      type: "monster" as const,
    }))
    const characters = GALLERY.characters.map((character) => ({
      name: character.name,
      image: character.image,
      type: "character" as const,
    }))
    return [...monsters, ...characters]
  }, [])

  // Update images in context when filtered items change
  React.useEffect(() => {
    setImages(allItems)
  }, [allItems, setImages])

  return (
    <div className="min-h-screen">
      <PageHeader title="Gallery" />
      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Art Gallery</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Explore the stunning artwork that brings the world of Silver Coin: Age of Monster Hunters to life. From fearsome monsters to legendary heroes,
              each piece tells a story of adventure and danger.
            </p>
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <AnimatedSection delay={600}>
          <GalleryGrid items={allItems} />
        </AnimatedSection>

        {/* Results Count */}

        <AnimatedSection delay={800}>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Showing <span className="font-semibold text-white">{allItems.length}</span>
              {allItems.length === 1 ? " artwork" : " artworks"}
            </p>
          </div>
        </AnimatedSection>

        {/* Statistics */}
        <GalleryStats monstersCount={GALLERY.monsters.length} charactersCount={GALLERY.characters.length} totalCount={allItems.length} />

        {/* Call to Action */}
        <GalleryCallToAction />

        {/* Image Viewer Modal */}
        <ImageViewer />
      </div>
    </div>
  )
}

export default Gallery
