"use client"

import Image from "next/image"
import { useEffect } from "react"
import { useImageViewer } from "../../context/ImageViewerContext"

export const ImageViewer = () => {
  const {
    isOpen,
    currentImageIndex,
    images,
    closeImageViewer,
    goToNextImage,
    goToPreviousImage,
    goToImage,
  } = useImageViewer()

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          closeImageViewer()
          break
        case 'ArrowLeft':
          goToPreviousImage()
          break
        case 'ArrowRight':
          goToNextImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeImageViewer, goToNextImage, goToPreviousImage])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || images.length === 0) return null

  const currentImage = images[currentImageIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={closeImageViewer}
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70 hover:scale-110"
        aria-label="Close image viewer"
      >
        <span className="material-icons-outlined text-2xl">close</span>
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={goToPreviousImage}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70 hover:scale-110"
          aria-label="Previous image"
        >
          <span className="material-icons-outlined text-2xl">chevron_left</span>
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70 hover:scale-110"
          aria-label="Next image"
        >
          <span className="material-icons-outlined text-2xl">chevron_right</span>
        </button>
      )}

      {/* Main image */}
      <div className="relative h-full w-full max-h-[80vh] max-w-[80vw] flex items-center justify-center">
        <div className="relative h-full w-full">
          <Image
            src={currentImage.image}
            alt={currentImage.name}
            fill
            className="object-contain"
            sizes="80vw"
            priority
          />
        </div>
      </div>

      {/* Image info overlay */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 rounded-lg bg-black/70 px-6 py-3 backdrop-blur-sm">
        <div className="text-center">
          <h3 className="text-lg font-bold text-white">{currentImage.name}</h3>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <span className="material-icons-outlined text-sm">
              {currentImage.type === 'monster' ? 'pets' : 'person'}
            </span>
            <span className="capitalize">{currentImage.type}</span>
            <span>•</span>
            <span>{currentImageIndex + 1} of {images.length}</span>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[90vw]">
          <div className="flex gap-2 overflow-x-auto rounded-lg bg-black/50 p-2 backdrop-blur-sm">
            {images.map((image, index) => (
              <button
                key={`${image.type}-${image.name}`}
                onClick={() => goToImage(index)}
                className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg transition-all hover:scale-110 ${
                  index === currentImageIndex
                    ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-black/50'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.image}
                  alt={image.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={closeImageViewer}
        aria-label="Close image viewer"
      />
    </div>
  )
}