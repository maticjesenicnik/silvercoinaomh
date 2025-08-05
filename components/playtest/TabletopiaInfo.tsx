import Image from "next/image";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

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

export const TabletopiaInfo = () => {
  return (
    <AnimatedSection delay={200}>
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">What is Tabletopia?</h3>
          <p className="mx-auto max-w-2xl text-gray-300">
            Tabletopia is the premier online board gaming platform where you can play your favorite tabletop games with friends from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20">
              <span className="material-icons-outlined text-2xl text-blue-400">cloud</span>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-white">Cloud-Based</h4>
            <p className="text-sm text-gray-300">No downloads required! Play directly in your browser or through Steam with automatic updates.</p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20">
              <span className="material-icons-outlined text-2xl text-green-400">money_off</span>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-white">Completely Free</h4>
            <p className="text-sm text-gray-300">
              Access to Silver Coin and thousands of other board games at no cost. Just create an account and start playing!
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/20">
              <span className="material-icons-outlined text-2xl text-purple-400">devices</span>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-white">Cross-Platform</h4>
            <p className="text-sm text-gray-300">Play on Windows, Mac, Linux, or any modern web browser. Your progress syncs across all devices.</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
