import { useIntersectionObserver } from "hooks/useIntersectionObserver";

export const FeatureCard = ({ icon, title, description, delay = 0 }: { icon: string; title: string; description: string; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${hasIntersected ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 transition-all group-hover:scale-110">
          <span className="material-icons-outlined text-3xl text-blue-300">{icon}</span>
        </div>
        <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
