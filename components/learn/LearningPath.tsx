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

const PathStep = ({ 
  number, 
  title, 
  description, 
  icon, 
  delay = 0 
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: string; 
  delay?: number;
}) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div 
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group relative h-full">
        {/* Connector line */}
        {number < 4 && (
          <div className="absolute left-8 top-16 h-16 w-px bg-gradient-to-b from-blue-600 to-purple-600 lg:left-1/2 lg:top-8 lg:h-px lg:w-full lg:-translate-x-1/2"></div>
        )}
        
        <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105">
          {/* Step number and icon */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10">
              <span className="material-icons-outlined text-2xl text-blue-300">{icon}</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {number}
            </div>
          </div>
          
          <h4 className="mb-3 text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
            {title}
          </h4>
          <p className="flex-1 text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export const LearningPath = () => {
  return (
    <AnimatedSection delay={600}>
      <div className="mb-16">
        <div className="mb-12 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">Your Learning Journey</h3>
          <p className="mx-auto max-w-2xl text-gray-300">
            Follow this recommended path to master Silver Coin: Age of Monster Hunters step by step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <PathStep
            number={1}
            title="Watch the Tutorial"
            description="Start with our comprehensive how-to-play video to understand the core mechanics and flow of the game."
            icon="play_circle"
            delay={800}
          />
          
          <PathStep
            number={2}
            title="Read the Rules"
            description="Download and study the official rulebook for detailed explanations of all game mechanics and edge cases."
            icon="menu_book"
            delay={900}
          />
          
          <PathStep
            number={3}
            title="Try Solo Play"
            description="Practice with a solo scenario to get comfortable with the rules before playing with others."
            icon="person"
            delay={1000}
          />
          
          <PathStep
            number={4}
            title="Join the Community"
            description="Connect with other players, ask questions, and share your experiences in our Discord community."
            icon="groups"
            delay={1100}
          />
        </div>
      </div>
    </AnimatedSection>
  )
}