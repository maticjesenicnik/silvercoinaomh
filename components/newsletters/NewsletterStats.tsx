interface NewsletterStatsProps {
  totalNewsletters: number
}

export const NewsletterStats = ({ totalNewsletters }: NewsletterStatsProps) => {
  return (
    <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
        <div className="mb-2">
          <span className="material-icons-outlined text-3xl text-blue-300">rss_feed</span>
        </div>
        <div className="text-2xl font-bold text-white">{totalNewsletters}</div>
        <div className="text-sm text-gray-400">Total Newsletters</div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
        <div className="mb-2">
          <span className="material-icons-outlined text-3xl text-green-300">timeline</span>
        </div>
        <div className="text-2xl font-bold text-white">7</div>
        <div className="text-sm text-gray-400">Years of Development</div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
        <div className="mb-2">
          <span className="material-icons-outlined text-3xl text-purple-300">update</span>
        </div>
        <div className="text-2xl font-bold text-white">As Needed</div>
        <div className="text-sm text-gray-400">Update Schedule</div>
      </div>
    </div>
  )
}