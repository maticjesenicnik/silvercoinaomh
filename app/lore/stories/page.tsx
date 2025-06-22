"use client"

import { PageHeader } from "components/PageHeader"
import { STORIES } from "data/stories"

const Stories = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Stories" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Tales from Atosia</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
            Immerse yourself in the rich lore and captivating stories that shape the world of Silver Coin: Age of Monster Hunters. 
            Each tale reveals the mysteries, legends, and adventures that await in the realm of Atosia.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-16">
          {STORIES.stories.map((story: any, storyIndex: number) => (
            <article 
              key={storyIndex} 
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-2xl"
            >
              {/* Story Header */}
              <div className="border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 lg:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="material-icons-outlined text-2xl text-blue-300">auto_stories</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white lg:text-3xl">{story.title}</h3>
                    <p className="text-sm text-gray-300">Chapter {storyIndex + 1} of {STORIES.stories.length}</p>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 lg:p-8">
                <div className="prose prose-lg prose-invert max-w-none">
                  {story.chapters.map((chapter: any, chapterIndex: number) => (
                    <div key={`${storyIndex}-${chapterIndex}`} className="mb-6 last:mb-0">
                      {story.chapters.length > 1 && (
                        <div className="mb-3 flex items-center gap-2">
                          <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-400">Part {chapterIndex + 1}</span>
                        </div>
                      )}
                      <p className="text-gray-200 leading-relaxed text-justify indent-8 first-letter:text-4xl first-letter:font-bold first-letter:text-blue-300 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                        {chapter}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Story Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="material-icons-outlined text-lg">schedule</span>
                    <span>~{Math.ceil(story.chapters.join(' ').split(' ').length / 200)} min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="material-icons-outlined text-lg">description</span>
                    <span>{story.chapters.join(' ').split(' ').length} words</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

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