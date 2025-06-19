'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from 'components/PageHeader'

const Videos = (): JSX.Element => {
  const videos = require('/json/videos.json')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Extract unique categories from all videos
  const categories = useMemo(() => {
    const allCategories = videos.videos.flatMap((video: any) => video.category)
    const uniqueCategories = Array.from(new Set(allCategories))
    return ['All', ...uniqueCategories.sort()]
  }, [videos.videos])

  // Filter videos based on selected category
  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All') {
      return videos.videos
    }
    return videos.videos.filter((video: any) => 
      video.category.includes(selectedCategory)
    )
  }, [videos.videos, selectedCategory])

  return (
    <div className="min-h-screen">
      <PageHeader title="Videos & Podcasts" />

      <div className="container mx-auto px-4 lg:px-6 pb-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">
              Explore Our Content
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover gameplay videos, development insights, and behind-the-scenes content
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white hover:scale-105'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'All' 
                    ? videos.videos.length 
                    : videos.videos.filter((v: any) => v.category.includes(category)).length
                  })
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredVideos.length}</span> 
            {selectedCategory !== 'All' && (
              <span> {selectedCategory.toLowerCase()}</span>
            )} video{filteredVideos.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video: any, index: number) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link href={video.url} target="_blank">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                    src={'/' + video.image}
                    alt={video.title}
                    width={640}
                    height={360}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                      <span className="material-icons-outlined text-white text-3xl">play_arrow</span>
                    </div>
                  </div>

                  {/* Category Tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {video.category.slice(0, 2).map((cat: string, catIndex: number) => (
                      <span
                        key={catIndex}
                        className="px-2 py-1 bg-black/60 backdrop-blur-sm text-xs font-medium text-white rounded-full border border-white/20"
                      >
                        {cat}
                      </span>
                    ))}
                    {video.category.length > 2 && (
                      <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-xs font-medium text-white rounded-full border border-white/20">
                        +{video.category.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {video.title}
                  </h3>
                  
                  {video.description && (
                    <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                      {video.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{video.date}</span>
                    <span className="material-icons-outlined text-sm">open_in_new</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-md mx-auto">
              <span className="material-icons-outlined text-gray-400 text-4xl mb-4 block">video_library</span>
              <h3 className="text-xl font-bold text-white mb-2">No videos found</h3>
              <p className="text-gray-400 mb-4">
                No videos match the selected category "{selectedCategory}".
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show All Videos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Videos