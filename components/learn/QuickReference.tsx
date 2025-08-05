import { AnimatedSection } from "components/layout/AnimatedSection";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

const ReferenceCard = ({ title, items, icon, color, delay = 0 }: { title: string; items: string[]; icon: string; color: string; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${hasIntersected ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105">
        <div className="mb-4 flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${color}-600/20`}>
            <span className={`material-icons-outlined text-2xl text-${color}-400`}>{icon}</span>
          </div>
          <h4 className="text-lg font-bold text-white">{title}</h4>
        </div>

        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
              <span className={`material-icons-outlined text-sm text-${color}-400 mt-0.5`}>arrow_right</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const QuickReference = () => {
  return (
    <AnimatedSection delay={800}>
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">Quick Reference</h3>
          <p className="text-gray-300">Essential information for your game sessions</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ReferenceCard
            title="Game phases"
            icon="access_time"
            color="blue"
            delay={1000}
            items={["Auction Phase (Bid for your starting character & resources)", "Game Round Phases", "Final Scoring"]}
          />

          <ReferenceCard
            title="Game round phases"
            icon="refresh"
            color="green"
            delay={1100}
            items={["Preparation phase", "Action Phase (3 actions each)", "Cleanup phase"]}
          />

          <ReferenceCard
            title="How to win"
            icon="emoji_events"
            color="yellow"
            delay={1200}
            items={["Travel the world", "Complete missions", "Collect coins", "Game ends in 24 rounds", "The one with most coins wins"]}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};
