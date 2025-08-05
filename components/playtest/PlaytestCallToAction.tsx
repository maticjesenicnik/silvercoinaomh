import { AnimatedSection } from "components/layout/AnimatedSection";

export const PlaytestCallToAction = () => {
  return (
    <AnimatedSection delay={1000}>
      <div className="text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6">
            <span className="material-icons-outlined text-4xl text-blue-300">rocket_launch</span>
          </div>
          <h3 className="mb-4 text-xl font-bold text-white">Ready to Start Your Adventure?</h3>
          <p className="mb-8 text-base text-gray-300 leading-relaxed">
            Join our community of monster hunters and help us create the ultimate board gaming experience. Your feedback shapes the future of Silver Coin: Age
            of Monster Hunters.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://discord.com/invite/NfQqrSgW3u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
            >
              <span className="material-icons-outlined text-lg">forum</span>
              Join Discord Community
            </a>

            <a
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
            >
              <span className="material-icons-outlined text-lg">school</span>
              Learn the Rules
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-gray-400">Questions? We&lsquo;re here to help!</p>
            <a className="text-sm font-medium text-blue-300 transition-colors hover:text-blue-200" href="mailto:silvercoinaomh@gmail.com">
              silvercoinaomh@gmail.com
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
