"use client"

import { useMemo, useState } from "react"
import { PageHeader } from "components/PageHeader"
import { STORIES } from "data/stories"

const Stories = () => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number>(0)

  // Get the currently selected story
  const selectedStory = useMemo(() => {
    return STORIES.stories[selectedStoryIndex]
  }, [selectedStoryIndex])

  return (
    <div className="min-h-screen">
      <PageHeader title="Stories" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Tales from Atosia</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
            Immerse yourself in the rich lore and captivating stories that shape the world of Silver Coin: Age of Monster Hunters.
          </p>
        </div>

        {/* Story Selector */}
        <div className="mb-12">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-lg font-bold text-white">Choose Your Tale</h3>
            <p className="text-sm text-gray-300">Select a story to dive into the mysteries of Atosia</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {STORIES.stories.map((story, index) => (
              <button
                key={index}
                onClick={() => setSelectedStoryIndex(index)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedStoryIndex === index
                    ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white/10 text-gray-300 hover:scale-105 hover:bg-white/20 hover:text-white"
                }`}
              >
                {story.title}
                <span className="ml-1 text-xs opacity-75">
                  ({story.chapters.length} part{story.chapters.length !== 1 ? 's' : ''})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Story */}
        {selectedStory && (
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300">
            {/* Story Header */}
            <div className="border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 lg:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <span className="material-icons-outlined text-2xl text-blue-300">auto_stories</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white lg:text-xl">{selectedStory.title}</h3>
                  <p className="text-sm text-gray-300">
                    Story {selectedStoryIndex + 1} of {STORIES.stories.length} • {selectedStory.chapters.length} part{selectedStory.chapters.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6 lg:p-8">
              <div className="prose max-w-none">
                {selectedStory.chapters.map((chapter: string, chapterIndex: number) => (
                  <div key={chapterIndex} className="mb-6 last:mb-0">
                    {selectedStory.chapters.length > 1 && (
                      <div className="mb-3 flex items-center gap-2">
                        <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-xs font-medium text-gray-400">Part {chapterIndex + 1}</span>
                      </div>
                    )}
                    <p className="text-sm text-gray-200 leading-relaxed text-justify indent-6 first-letter:text-2xl first-letter:font-bold first-letter:text-blue-300 first-letter:float-left first-letter:mr-1 first-letter:mt-0.5">
                      {chapter}
                    </p>
                  </div>
                ))}
              </div>

              {/* Story Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="material-icons-outlined text-sm">schedule</span>
                  <span>~{Math.ceil(selectedStory.chapters.join(' ').split(' ').length / 200)} min read</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="material-icons-outlined text-sm">description</span>
                  <span>{selectedStory.chapters.join(' ').split(' ').length} words</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="border-t border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedStoryIndex(Math.max(0, selectedStoryIndex - 1))}
                  disabled={selectedStoryIndex === 0}
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-icons-outlined text-lg">chevron_left</span>
                  Previous Story
                </button>

                <span className="text-sm text-gray-400">
                  {selectedStoryIndex + 1} / {STORIES.stories.length}
                </span>

                <button
                  onClick={() => setSelectedStoryIndex(Math.min(STORIES.stories.length - 1, selectedStoryIndex + 1))}
                  disabled={selectedStoryIndex === STORIES.stories.length - 1}
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Story
                  <span className="material-icons-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-8 backdrop-blur-sm">
            <div className="mb-4">
              <span className="material-icons-outlined text-4xl text-blue-300">explore</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Discover More of Atosia</h3>
            <p className="mb-6 text-gray-300">
              These stories are just the beginning. Explore the kingdoms, meet the characters, and uncover the mysteries that await in Silver Coin: Age of Monster Hunters.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a 
                href="/lore/kingdoms" 
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                <span className="material-icons-outlined text-lg">public</span>
                Explore Kingdoms
              </a>
              <a 
                href="/lore/characters" 
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/20"
              >
                <span className="material-icons-outlined text-lg">person</span>
                Meet Characters
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories