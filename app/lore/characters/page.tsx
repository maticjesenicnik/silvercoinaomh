"use client"

import Image from "next/image"
import { PageHeader } from "components/PageHeader"
import { CHARACTERS } from "data/characters"
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

const AnimatedCharacter = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-16 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const AnimatedParagraph = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div 
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-base text-gray-200 leading-relaxed text-justify transition-all duration-300 hover:text-gray-100">
        {children}
      </div>
    </div>
  )
}

const Characters = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Characters" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Heroes of Atosia</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Meet the legendary monster hunters, each with their own unique abilities, tragic backstories, and burning desire to rid the world of the creatures that plague it.
            </p>
          </div>
        </AnimatedSection>

        {/* Characters List */}
        <div className="mx-auto max-w-5xl">
          {CHARACTERS.characters.map((character: any, characterIndex: number) => (
            <AnimatedCharacter key={characterIndex} delay={200 + characterIndex * 300}>
              <article className="mb-24 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:shadow-2xl">
                {/* Character Header */}
                <div className="relative">
                  {/* Character Image */}
                  <div className="relative aspect-[16/9] overflow-hidden lg:aspect-[21/9]">
                    <Image 
                      className="h-full w-full object-cover brightness-75 transition-all duration-500 hover:scale-105 hover:brightness-90" 
                      width={1200} 
                      height={600} 
                      src={"/" + character.image} 
                      alt={character.name}
                      priority={characterIndex < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Character Name and Logo Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <div className="flex items-end gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-sm lg:h-20 lg:w-20">
                            <Image 
                              className="h-10 w-10 object-contain brightness-90 lg:h-12 lg:w-12" 
                              src={"/" + character.logo} 
                              alt={character.name + "'s logo"} 
                              width={48} 
                              height={48} 
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h1 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
                            {character.name}
                          </h1>
                          <div className="mt-2 flex items-center gap-2 text-sm text-gray-300">
                            <span className="material-icons-outlined text-sm">person</span>
                            <span>Monster Hunter</span>
                            <span className="mx-2">•</span>
                            <span className="material-icons-outlined text-sm">auto_stories</span>
                            <span>{character.description.length} chapters</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Character Story */}
                <div className="p-6 lg:p-8">
                  <div className="space-y-6">
                    {character.description.map((description: string, descriptionIndex: number) => (
                      <AnimatedParagraph 
                        key={characterIndex + "-" + descriptionIndex} 
                        delay={400 + characterIndex * 300 + descriptionIndex * 100}
                      >
                        {description}
                      </AnimatedParagraph>
                    ))}
                  </div>

                  {/* Character Stats/Info */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="material-icons-outlined text-sm">schedule</span>
                        <span>~{Math.ceil(character.description.join(' ').split(' ').length / 200)} min read</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-icons-outlined text-sm">description</span>
                        <span>{character.description.join(' ').split(' ').length} words</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-icons-outlined text-sm">bookmark</span>
                        <span>Character {characterIndex + 1} of {CHARACTERS.characters.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedCharacter>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={600}>
          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <span className="material-icons-outlined text-4xl text-blue-300">groups</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Choose Your Hunter</h3>
              <p className="mb-8 text-base text-gray-300 leading-relaxed">
                Each character brings unique abilities and playstyles to your monster hunting adventures. Will you master the arcane arts, rely on brute strength, or find your own path through the world of Atosia?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a 
                  href="/playtest" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">videogame_asset</span>
                  Try the Game
                </a>
                <a 
                  href="/lore/kingdoms" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">public</span>
                  Explore Kingdoms
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Characters