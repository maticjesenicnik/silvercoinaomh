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

export const GalleryCallToAction = () => {
  return (
    <AnimatedSection delay={1200}>
      <div className="mt-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6">
            <span className="material-icons-outlined text-4xl text-blue-300">brush</span>
          </div>
          <h3 className="mb-4 text-xl font-bold text-white">Bring These Characters to Life</h3>
          <p className="mb-8 text-base text-gray-300 leading-relaxed">
            Every piece of artwork in Silver Coin: Age of Monster Hunters has been carefully crafted to immerse you in the world of Atosia. Ready to experience these characters and monsters in action?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a 
              href="https://www.kickstarter.com/projects/bonafidegames/silver-coin-age-of-monster-hunters" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700 hover:scale-105"
            >
              <span className="material-icons-outlined text-lg">rocket_launch</span>
              Back on Kickstarter
            </a>
            <a 
              href="/playtest" 
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
            >
              <span className="material-icons-outlined text-lg">videogame_asset</span>
              Try the Game
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}