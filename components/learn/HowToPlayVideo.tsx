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

export const HowToPlayVideo = () => {
  return (
    <AnimatedSection delay={200}>
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">How to Play Video</h3>
          <p className="mx-auto max-w-2xl text-gray-300">
            Watch our comprehensive tutorial to learn the core mechanics and strategies of Silver Coin: Age of Monster Hunters.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="relative aspect-video">
              <iframe
                className="h-full w-full rounded-2xl"
                src="https://www.youtube.com/embed/5XEDSREG7TQ"
                title="How to Play - Silver Coin: Age of Monster Hunters"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h4 className="text-lg font-bold">Complete Tutorial</h4>
                  <p className="text-sm text-gray-300">Learn all the rules and mechanics</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="material-icons-outlined text-lg text-red-400">play_circle</span>
                  <span>YouTube</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video features */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <span className="material-icons-outlined mb-2 block text-2xl text-blue-400">timer</span>
              <h5 className="font-semibold text-white">~25 Minutes</h5>
              <p className="text-sm text-gray-400">Complete walkthrough</p>
            </div>
            
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <span className="material-icons-outlined mb-2 block text-2xl text-green-400">visibility</span>
              <h5 className="font-semibold text-white">Visual Examples</h5>
              <p className="text-sm text-gray-400">See gameplay in action</p>
            </div>
            
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <span className="material-icons-outlined mb-2 block text-2xl text-purple-400">psychology</span>
              <h5 className="font-semibold text-white">Strategy Tips</h5>
              <p className="text-sm text-gray-400">Learn winning tactics</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}