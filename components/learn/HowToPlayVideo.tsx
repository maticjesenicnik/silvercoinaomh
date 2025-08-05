import { AnimatedSection } from "components/layout/AnimatedSection";

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
          </div>

          {/* Video features */}
          <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
              <span className="material-icons-outlined mb-2 block text-2xl text-blue-400">timer</span>
              <h5 className="font-semibold text-white">~ 50 Minutes</h5>
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

          <div className="mb-8 text-center">
            <h3 className="mb-3 text-2xl font-bold text-white">Solo Playthrough - Olm Infestation</h3>
            <p className="mx-auto max-w-2xl text-gray-300">
              Watch Gal play a solo game against the Olm Infestation scenario, demonstrating advanced strategies and tactics.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="relative aspect-video">
              <iframe
                className="h-full w-full rounded-2xl"
                src="https://www.youtube.com/embed/4_HWVvbNqXI"
                title="Silver Coin: Age of Monster Hunters - SOLO Playthrough "
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
