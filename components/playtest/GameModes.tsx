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

export const GameModes = () => {
  return (
    <AnimatedSection delay={600}>
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">Choose Your Adventure</h3>
          <p className="text-gray-300">Silver Coin offers multiple ways to experience monster hunting</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Solo Mode */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20">
              <span className="material-icons-outlined text-3xl text-blue-400">person</span>
            </div>
            <h4 className="mb-3 text-xl font-bold text-white">Solo Mode</h4>
            <p className="mb-4 text-gray-300">
              Perfect for learning the game or when you want to hunt monsters at your own pace. Face the challenges of Atosia alone.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm">schedule</span>
                <span>Play anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm">school</span>
                <span>Learn at your pace</span>
              </div>
            </div>
          </div>

          {/* Co-op Mode */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600/20 to-green-800/20">
              <span className="material-icons-outlined text-3xl text-green-400">groups</span>
            </div>
            <h4 className="mb-3 text-xl font-bold text-white">Co-op Mode</h4>
            <p className="mb-4 text-gray-300">
              Team up with friends to tackle the most dangerous monsters together. Cooperation is key to survival.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm">handshake</span>
                <span>Work together</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm">psychology</span>
                <span>Strategic planning</span>
              </div>
            </div>
          </div>

          {/* Competitive Mode */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20">
              <span className="material-icons-outlined text-3xl text-red-400">emoji_events</span>
            </div>
            <h4 className="mb-3 text-xl font-bold text-white">Competitive Mode</h4>
            <p className="mb-4 text-gray-300">
              Compete against other hunters for the most silver coins. May the best monster hunter win!
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm">trending_up</span>
                <span>2-5 players</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm">military_tech</span>
                <span>Prove your skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}