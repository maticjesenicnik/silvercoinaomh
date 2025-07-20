import { AnimatedSection } from "components/layout/AnimatedSection"

export const LearnCallToAction = () => {
  return (
    <AnimatedSection delay={1000}>
      <div className="text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6">
            <span className="material-icons-outlined text-4xl text-blue-300">rocket_launch</span>
          </div>
          <h3 className="mb-4 text-xl font-bold text-white">Ready to Start Your Adventure?</h3>
          <p className="mb-8 text-base text-gray-300 leading-relaxed">
            Now that you know the rules, it&lsquo;s time to put your skills to the test! Join our community of monster hunters and start your legendary journey
            in the world of Atosia.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/playtest"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
            >
              <span className="material-icons-outlined text-lg">videogame_asset</span>
              Start Playtesting
            </a>

            <a
              href="https://discord.gg/NfQqrSgW3u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
            >
              <span className="material-icons-outlined text-lg">forum</span>
              Join Discord
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-gray-400">Need help or have questions?</p>
            <a className="text-sm font-medium text-blue-300 transition-colors hover:text-blue-200" href="mailto:silvercoinaomh@gmail.com">
              silvercoinaomh@gmail.com
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
