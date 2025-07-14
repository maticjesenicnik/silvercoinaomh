export const NewsletterCallToAction = () => {
  return (
    <div className="mt-24 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <span className="material-icons-outlined text-4xl text-blue-300">campaign</span>
        </div>
        <h3 className="mb-4 text-xl font-bold text-white">Support Our Journey</h3>
        <p className="mb-8 text-base text-gray-300 leading-relaxed">
          Follow our development story through these newsletters and see how Silver Coin: Age of Monster Hunters has evolved over the years. Ready to join the
          adventure? Back our project on Kickstarter!
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://www.kickstarter.com/projects/bonafidegames/silver-coin-age-of-monster-hunters"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700 hover:scale-105"
          >
            <span className="material-icons-outlined text-lg">rocket_launch</span>
            Check on Kickstarter
          </a>
          <a
            href="/videos"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
          >
            <span className="material-icons-outlined text-lg">smart_display</span>
            Watch Videos
          </a>
        </div>
      </div>
    </div>
  )
}
