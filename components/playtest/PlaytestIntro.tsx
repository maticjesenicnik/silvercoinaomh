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

export const PlaytestIntro = () => {
  return (
    <AnimatedSection>
      <div className="mb-16 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
            <span className="material-icons-outlined text-4xl text-blue-300">videogame_asset</span>
          </div>
        </div>
        
        <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">Ready to Hunt Monsters?</h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
          Experience Silver Coin: Age of Monster Hunters before it hits the shelves! Join our playtesting community and help shape the final version of the game while having epic monster-hunting adventures.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-lg text-green-400">check_circle</span>
            <span>Free to play</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-lg text-blue-400">groups</span>
            <span>Solo, Co-op & Competitive</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-lg text-purple-400">schedule</span>
            <span>Available 24/7</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}