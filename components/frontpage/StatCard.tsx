import { useIntersectionObserver } from "hooks/useIntersectionObserver";

export const StatCard = ({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-center">
        <div className="mb-2 text-4xl font-bold text-white lg:text-5xl">{number}</div>
        <div className="text-sm text-gray-300 uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );
};
