interface NewsletterTimelineProps {
  years: string[]
  getNewsletterCountForYear: (year: string) => number
  onYearSelect: (year: string) => void
}

export const NewsletterTimeline = ({ years, getNewsletterCountForYear, onYearSelect }: NewsletterTimelineProps) => {
  // Remove "All" from years for timeline
  const timelineYears = years.filter((year) => year !== "All")

  return (
    <div className="mt-24">
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-xl font-bold text-white">Development Timeline</h3>
        <p className="text-sm text-gray-300">Our journey from concept to creation</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 transform -translate-x-1/2"></div>

        <div className="space-y-8">
          {timelineYears.map((year, index) => {
            const yearNewsletters = getNewsletterCountForYear(year)
            return (
              <div key={year} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <h4 className="text-lg font-bold text-white">{year}</h4>
                    <p className="text-sm text-gray-300">
                      {yearNewsletters} development update{yearNewsletters !== 1 ? "s" : ""}
                    </p>
                    <button onClick={() => onYearSelect(year)} className="mt-2 text-xs text-blue-300 hover:text-blue-200 transition-colors">
                      View {year} updates →
                    </button>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 border-2 border-white/20">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
