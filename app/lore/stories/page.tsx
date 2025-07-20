"use client";
import { useMemo, useRef, useState } from "react";

import { PageHeader } from "components/PageHeader";
import { READ_TIME_PER_WORD } from "data/constants";
import { STORIES } from "data/stories";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

const AnimatedParagraph = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`group/paragraph relative transition-all duration-1000 ease-out ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-base text-gray-200 leading-relaxed text-justify relative transition-all duration-300 hover:text-gray-100">{children}</p>
    </div>
  );
};

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

const Stories = () => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number>(0);
  const selectorRef = useRef<HTMLDivElement>(null);

  // Get the currently selected story
  const selectedStory = useMemo(() => {
    return STORIES.stories[selectedStoryIndex];
  }, [selectedStoryIndex]);

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

  // Handle story navigation with scroll
  const navigateToStory = (newIndex: number) => {
    setSelectedStoryIndex(newIndex);
    // Small delay to ensure the content has updated before scrolling
    setTimeout(scrollToSelector, 100);
  };

  return (
    <div className="min-h-screen">
      <PageHeader title="Stories" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Tales from Atosia</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Immerse yourself in the rich lore and captivating stories that shape the world of Silver Coin: Age of Monster Hunters.
            </p>
          </div>
        </AnimatedSection>

        {/* Story Selector */}
        <AnimatedSection delay={200}>
          <div ref={selectorRef} className="mb-16">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-lg font-bold text-white">Choose Your Tale</h3>
              <p className="text-sm text-gray-300">Select a story to dive into the mysteries of Atosia</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {STORIES.stories.map((story, index) => (
                <button
                  key={index}
                  onClick={() => navigateToStory(index)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedStoryIndex === index
                      ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white/10 text-gray-300 hover:scale-105 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {story.title}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Selected Story */}
        {selectedStory && (
          <article className="mx-auto max-w-4xl">
            {/* Story Header */}
            <AnimatedSection delay={400}>
              <header className="mb-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
                    <span className="material-icons-outlined text-3xl text-blue-300">auto_stories</span>
                  </div>
                </div>

                <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">{selectedStory.title}</h1>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-outlined text-sm">schedule</span>
                    <span>~{Math.ceil(selectedStory.chapters.join(" ").split(" ").length / READ_TIME_PER_WORD)} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons-outlined text-sm">description</span>
                    <span>{selectedStory.chapters.join(" ").split(" ").length} words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons-outlined text-sm">bookmark</span>
                    <span>
                      Story {selectedStoryIndex + 1} of {STORIES.stories.length}
                    </span>
                  </div>
                </div>

                {/* Decorative divider */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                  <div className="mx-4 flex h-2 w-2 items-center justify-center rounded-full bg-blue-400/50"></div>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                </div>
              </header>
            </AnimatedSection>

            {/* Story Content */}
            <div className="prose max-w-none">
              <div className="space-y-8">
                {selectedStory.chapters.map((chapter: string, chapterIndex: number) => (
                  <div key={chapterIndex}>
                    <AnimatedParagraph delay={chapterIndex * 150}>{chapter}</AnimatedParagraph>

                    {/* Elegant separator between paragraphs */}
                    {chapterIndex < selectedStory.chapters.length - 1 && (
                      <AnimatedSection delay={chapterIndex * 150 + 75}>
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

            {/* Story Navigation */}
            <AnimatedSection delay={600}>
              <nav className="mt-16 border-t border-white/10 pt-8">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => navigateToStory(Math.max(0, selectedStoryIndex - 1))}
                    disabled={selectedStoryIndex === 0}
                    className="group flex items-center gap-3 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <span className="material-icons-outlined text-lg transition-transform group-hover:-translate-x-1">chevron_left</span>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Previous</div>
                      <div>{selectedStoryIndex > 0 ? STORIES.stories[selectedStoryIndex - 1].title : "No previous story"}</div>
                    </div>
                  </button>

                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Story</div>
                    <div className="text-sm font-medium text-white">
                      {selectedStoryIndex + 1} of {STORIES.stories.length}
                    </div>
                  </div>

                  <button
                    onClick={() => navigateToStory(Math.min(STORIES.stories.length - 1, selectedStoryIndex + 1))}
                    disabled={selectedStoryIndex === STORIES.stories.length - 1}
                    className="group flex items-center gap-3 rounded-lg bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Next</div>
                      <div>{selectedStoryIndex < STORIES.stories.length - 1 ? STORIES.stories[selectedStoryIndex + 1].title : "No next story"}</div>
                    </div>
                    <span className="material-icons-outlined text-lg transition-transform group-hover:translate-x-1">chevron_right</span>
                  </button>
                </div>
              </nav>
            </AnimatedSection>
          </article>
        )}

        {/* Call to Action */}
        <AnimatedSection delay={800}>
          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <span className="material-icons-outlined text-4xl text-blue-300">explore</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Discover More of Atosia</h3>
              <p className="mb-8 text-base text-gray-300 leading-relaxed">
                These stories are just the beginning. Explore the kingdoms, meet the characters, and uncover the mysteries that await in Silver Coin: Age of
                Monster Hunters.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="/lore/kingdoms"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">public</span>
                  Explore Kingdoms
                </a>
                <a
                  href="/lore/characters"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">person</span>
                  Meet the Characters
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Stories;
