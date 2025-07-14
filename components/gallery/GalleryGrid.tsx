import Image from "next/image"
import { useState } from "react"
import { useIntersectionObserver } from "hooks/useIntersectionObserver"

interface GalleryItem {
  name: string
  image: string
  type: 'monster' | 'character'
}

interface GalleryGridProps {
  items: GalleryItem[]
}

const GalleryItem = ({ item, delay = 0 }: { item: GalleryItem; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div 
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-2xl">
        {/* Fixed aspect ratio container */}
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
            className={`h-full w-full object-cover brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Type badge */}
          <div className="absolute left-4 top-4">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
              <span className="material-icons-outlined text-sm text-white">
                {item.type === 'monster' ? 'pets' : 'person'}
              </span>
              <span className="text-xs font-medium capitalize text-white">{item.type}</span>
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
    </div>
  )
}

export const GalleryGrid = ({ items }: GalleryGridProps) => {
  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <span className="material-icons-outlined mb-4 block text-4xl text-gray-400">search_off</span>
          <h3 className="mb-2 text-xl font-bold text-white">No artwork found</h3>
          <p className="text-gray-400">Try adjusting your search or category filters.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item, index) => (
        <GalleryItem
          key={`${item.type}-${item.name}`}
          item={item}
          delay={index * 50}
        />
      ))}
    </div>
  )
}