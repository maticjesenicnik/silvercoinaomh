"use client";
import { useMemo, useRef, useState } from "react";

import { PageHeader } from "components/PageHeader";
import { CHARACTERS } from "data/characters";
import { READ_TIME_PER_WORD } from "data/constants";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import Image from "next/image";

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AnimatedParagraph = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-base text-gray-200 leading-relaxed text-justify transition-all duration-300 hover:text-gray-100">{children}</div>
    </div>
  );
};

const Characters = () => {
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState<number>(0);
  const selectorRef = useRef<HTMLDivElement>(null);

  // Get the currently selected character
  const selectedCharacter = useMemo(() => {
    return CHARACTERS.characters[selectedCharacterIndex];
  }, [selectedCharacterIndex]);

  // Function to scroll to selector section with proper offset for header
  const scrollToSelector = () => {
    if (selectorRef.current) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = selectorRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle character navigation with scroll
  const navigateToCharacter = (newIndex: number) => {
    setSelectedCharacterIndex(newIndex);
    // Small delay to ensure the content has updated before scrolling
    setTimeout(scrollToSelector, 100);
  };

  return (
    <div className="min-h-screen">
      <PageHeader title="Characters" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Heroes of Atosia</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Meet the legendary monster hunters, each with their own unique abilities, tragic backstories, and burning desire to rid the world of the creatures
              that plague it.
            </p>
          </div>
        </AnimatedSection>

        {/* Character Selector */}
        <AnimatedSection delay={200}>
          <div ref={selectorRef} className="mb-16">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Choose Your Hunter</h3>
              <p className="text-sm text-gray-300">Select a character to learn their story and abilities</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {CHARACTERS.characters.map((character, index) => (
                <button
                  key={index}
                  onClick={() => navigateToCharacter(index)}
                  className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCharacterIndex === index
                      ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white/10 text-gray-300 hover:scale-105 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/" + character.logo}
                      alt={character.name}
                      width={16}
                      height={16}
                      className="object-contain brightness-90 group-hover:brightness-100"
                    />
                    <span>{character.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Selected Character */}
        {selectedCharacter && (
          <article className="mx-auto max-w-6xl">
            {/* Character Header */}
            <AnimatedSection delay={400}>
              <header className="mb-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Character Portrait */}
                  <div className="lg:col-span-1">
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          className="h-full w-full object-cover brightness-75 transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                          width={600}
                          height={800}
                          src={"/" + selectedCharacter.image}
                          alt={selectedCharacter.name}
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Character Logo Overlay - Bottom Right */}
                        <div className="absolute bottom-4 right-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white/50">
                            <Image
                              className="h-8 w-8 object-contain brightness-90 transition-all group-hover:brightness-100"
                              src={"/" + selectedCharacter.logo}
                              alt={selectedCharacter.name + "'s logo"}
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <div className="mb-6">
                      <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">{selectedCharacter.name}</h1>

                      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">person</span>
                          <span>Monster Hunter</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">auto_stories</span>
                          <span>{selectedCharacter.description.length} chapters</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">schedule</span>
                          <span>~{Math.ceil(selectedCharacter.description.join(" ").split(" ").length / READ_TIME_PER_WORD)} min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-icons-outlined text-sm">bookmark</span>
                          <span>
                            Character {selectedCharacterIndex + 1} of {CHARACTERS.characters.length}
                          </span>
                        </div>
                      </div>

                      {/* Character Introduction */}
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Discover the story of {selectedCharacter.name}, one of the legendary monster hunters of Atosia. Each character brings their own unique
                        background, abilities, and motivations to the world of Silver Coin: Age of Monster Hunters.
                      </p>
                    </div>

                    {/* Decorative divider */}
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/50 to-blue-400/50"></div>
                      <div className="mx-4 flex h-2 w-2 items-center justify-center rounded-full bg-blue-400/50"></div>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-400/50 to-blue-400/50"></div>
                    </div>
                  </div>
                </div>
              </header>
            </AnimatedSection>

            {/* Character Story */}
            <AnimatedSection delay={600}>
              <div className="prose max-w-none">
                <div className="space-y-8">
                  {selectedCharacter.description.map((description: string, descriptionIndex: number) => (
                    <div key={descriptionIndex}>
                      <AnimatedParagraph delay={descriptionIndex * 150}>{description}</AnimatedParagraph>

                      {/* Elegant separator between paragraphs */}
                      {descriptionIndex < selectedCharacter.description.length - 1 && (
                        <AnimatedSection delay={descriptionIndex * 150 + 75}>
                          <div className="mt-8 flex justify-center">
                            <div className="flex items-center gap-3">
                              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-600"></div>
                              <div className="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
                              <div className="h-1 w-1 rounded-full bg-gray-600"></div>
                              <div className="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
                              <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-600"></div>
                            </div>
                          </div>
                        </AnimatedSection>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Character Navigation */}
            <AnimatedSection delay={800}>
              <nav className="mt-16 border-t border-white/10 pt-8">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigateToCharacter(Math.max(0, selectedCharacterIndex - 1))}
                    disabled={selectedCharacterIndex === 0}
                    className="group flex items-center gap-3 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <span className="material-icons-outlined text-lg transition-transform group-hover:-translate-x-1">chevron_left</span>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Previous</div>
                      <div className="flex items-center gap-2">
                        {selectedCharacterIndex > 0 && (
                          <Image
                            src={"/" + CHARACTERS.characters[selectedCharacterIndex - 1].logo}
                            alt={CHARACTERS.characters[selectedCharacterIndex - 1].name}
                            width={16}
                            height={16}
                            className="object-contain brightness-75"
                          />
                        )}
                        <span>{selectedCharacterIndex > 0 ? CHARACTERS.characters[selectedCharacterIndex - 1].name : "No previous character"}</span>
                      </div>
                    </div>
                  </button>

                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Character</div>
                    <div className="text-sm font-medium text-white">
                      {selectedCharacterIndex + 1} of {CHARACTERS.characters.length}
                    </div>
                  </div>

                  <button
                    onClick={() => navigateToCharacter(Math.min(CHARACTERS.characters.length - 1, selectedCharacterIndex + 1))}
                    disabled={selectedCharacterIndex === CHARACTERS.characters.length - 1}
                    className="group flex items-center gap-3 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Next</div>
                      <div className="flex items-center gap-2">
                        <span>
                          {selectedCharacterIndex < CHARACTERS.characters.length - 1
                            ? CHARACTERS.characters[selectedCharacterIndex + 1].name
                            : "No next character"}
                        </span>
                        {selectedCharacterIndex < CHARACTERS.characters.length - 1 && (
                          <Image
                            src={"/" + CHARACTERS.characters[selectedCharacterIndex + 1].logo}
                            alt={CHARACTERS.characters[selectedCharacterIndex + 1].name}
                            width={16}
                            height={16}
                            className="object-contain brightness-75"
                          />
                        )}
                      </div>
                    </div>
                    <span className="material-icons-outlined text-lg transition-transform group-hover:translate-x-1">chevron_right</span>
                  </button>
                </div>
              </nav>
            </AnimatedSection>
          </article>
        )}

        {/* Call to Action */}
        <AnimatedSection delay={1000}>
          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <span className="material-icons-outlined text-4xl text-blue-300">groups</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Choose Your Path</h3>
              <p className="mb-8 text-base text-gray-300 leading-relaxed">
                Each character brings unique abilities and playstyles to your monster hunting adventures. Will you master the arcane arts, rely on brute
                strength, or find your own path through the world of Atosia?
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
  );
};

export default Characters;
