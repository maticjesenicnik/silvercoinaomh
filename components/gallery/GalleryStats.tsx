import { useIntersectionObserver } from "hooks/useIntersectionObserver";

interface GalleryStatsProps {
  monstersCount: number;
  charactersCount: number;
  totalCount: number;
}

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

export const GalleryStats = ({ monstersCount, charactersCount, totalCount }: GalleryStatsProps) => {
  return (
    <AnimatedSection delay={1000}>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <div className="mb-2 flex justify-center">
            <span className="material-icons-outlined text-3xl text-red-400">pets</span>
          </div>
          <div className="text-2xl font-bold text-white">{monstersCount}</div>
          <div className="text-sm text-gray-300">Fearsome Monsters</div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <div className="mb-2 flex justify-center">
            <span className="material-icons-outlined text-3xl text-blue-400">person</span>
          </div>
          <div className="text-2xl font-bold text-white">{charactersCount}</div>
          <div className="text-sm text-gray-300">Legendary Heroes</div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <div className="mb-2 flex justify-center">
            <span className="material-icons-outlined text-3xl text-purple-400">palette</span>
          </div>
          <div className="text-2xl font-bold text-white">{totalCount}</div>
          <div className="text-sm text-gray-300">Total Artworks</div>
        </div>
      </div>
    </AnimatedSection>
  );
};
