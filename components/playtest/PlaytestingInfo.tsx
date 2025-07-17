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

export const PlaytestingInfo = () => {
  return (
    <AnimatedSection delay={800}>
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">How to Get Started</h3>
          <p className="text-gray-300">Your feedback helps us create the best monster hunting experience</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Getting Started */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20">
              <span className="material-icons-outlined text-2xl text-blue-400">play_circle</span>
            </div>
            <h4 className="mb-4 text-xl font-bold text-white">Getting Started</h4>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-sm font-bold text-blue-400">1</div>
                <div>
                  <p className="font-medium text-white">Join our Discord community</p>
                  <p className="text-sm text-gray-400">Connect with other playtesters and get organized game sessions</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-sm font-bold text-blue-400">2</div>
                <div>
                  <p className="font-medium text-white">Learn the rules</p>
                  <p className="text-sm text-gray-400">Read the rulebook or watch our how-to-play video</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-sm font-bold text-blue-400">3</div>
                <div>
                  <p className="font-medium text-white">Start hunting!</p>
                  <p className="text-sm text-gray-400">Access Tabletopia and begin your monster hunting adventure</p>
                </div>
              </div>
            </div>
          </div>

          {/* What We're Looking For */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/20">
              <span className="material-icons-outlined text-2xl text-purple-400">feedback</span>
            </div>
            <h4 className="mb-4 text-xl font-bold text-white">What We&lsquo;re Looking For</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="material-icons-outlined text-sm text-green-400 mt-0.5">check_circle</span>
                <span className="text-sm text-gray-300">Overall enjoyment and fun factor</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-icons-outlined text-sm text-green-400 mt-0.5">check_circle</span>
                <span className="text-sm text-gray-300">Which parts of the game you enjoyed most</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-icons-outlined text-sm text-green-400 mt-0.5">check_circle</span>
                <span className="text-sm text-gray-300">Areas that could be improved</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-icons-outlined text-sm text-green-400 mt-0.5">check_circle</span>
                <span className="text-sm text-gray-300">Game balance and difficulty feedback</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-icons-outlined text-sm text-green-400 mt-0.5">check_circle</span>
                <span className="text-sm text-gray-300">Suggestions for new features or improvements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
