import { useIntersectionObserver } from "hooks/useIntersectionObserver"

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

export const LearnIntro = () => {
  return (
    <AnimatedSection>
      <div className="mb-16 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
            <span className="material-icons-outlined text-4xl text-blue-300">school</span>
          </div>
        </div>

        <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">Master the Hunt</h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
          Learn everything you need to know about Silver Coin: Age of Monster Hunters. From basic rules to advanced strategies, we&lsquo;ll guide you through
          your journey to becoming a legendary monster hunter.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-lg text-green-400">check_circle</span>
            <span>Complete rulebook</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-lg text-blue-400">play_circle</span>
            <span>Video tutorials</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-lg text-purple-400">auto_stories</span>
            <span>Scenario guides</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
