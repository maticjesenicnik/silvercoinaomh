"use client"

import { useMemo, useState } from "react"

import { PageHeader } from "components/PageHeader"
import { NewsletterCallToAction } from "components/newsletters/NewsletterCallToAction"
import { NewsletterGrid } from "components/newsletters/NewsletterGrid"
import { NewsletterResultsCount } from "components/newsletters/NewsletterResultsCount"
import { NewsletterTimeline } from "components/newsletters/NewsletterTimeline"
import { NoNewslettersFound } from "components/newsletters/NoNewslettersFound"
import { YearFilter } from "components/newsletters/YearFilter"
import { NEWSLETTERS } from "data/newsletters"

const Newsletters = () => {
  const [selectedYear, setSelectedYear] = useState<string>("All")

  // Extract unique years from newsletters
  const years = useMemo(() => {
    const allYears = NEWSLETTERS.newsletters.map((newsletter: any) => {
      const year = new Date(newsletter.date).getFullYear().toString()
      return year
    })
    const uniqueYears = Array.from(new Set(allYears)).sort((a, b) => parseInt(b) - parseInt(a))
    return ["All", ...uniqueYears]
  }, [])

  // Filter newsletters based on selected year
  const filteredNewsletters = useMemo(() => {
    if (selectedYear === "All") {
      return NEWSLETTERS.newsletters
    }
    return NEWSLETTERS.newsletters.filter((newsletter: any) => {
      const year = new Date(newsletter.date).getFullYear().toString()
      return year === selectedYear
    })
  }, [selectedYear])

  // Get newsletter count for a specific year
  const getNewsletterCountForYear = (year: string) => {
    if (year === "All") {
      return NEWSLETTERS.newsletters.length
    }
    return NEWSLETTERS.newsletters.filter((n: any) => 
      new Date(n.date).getFullYear().toString() === year
    ).length
  }

  return (
    <div className="min-h-screen">
      <PageHeader title="Newsletters" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">Development Chronicles</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
            Follow our journey from concept to creation through detailed development updates that chronicle the making of Silver Coin: Age of Monster Hunters. Get insights into our design process, behind-the-scenes content, and see how the game evolved over 7 years.
          </p>
        </div>

        {/* Year Filter */}
        <YearFilter 
          years={years}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          getNewsletterCountForYear={getNewsletterCountForYear}
        />

        {/* Newsletters Grid */}
        <NewsletterGrid newsletters={filteredNewsletters} />

        {/* Results Count */}
        <NewsletterResultsCount 
          count={filteredNewsletters.length}
          selectedYear={selectedYear}
        />

        {/* No Results */}
        {filteredNewsletters.length === 0 && (
          <NoNewslettersFound 
            selectedYear={selectedYear}
            onShowAll={() => setSelectedYear("All")}
          />
        )}

        {/* Newsletter Timeline */}
        <NewsletterTimeline 
          years={years}
          getNewsletterCountForYear={getNewsletterCountForYear}
          onYearSelect={setSelectedYear}
        />

        {/* Call to Action */}
        <NewsletterCallToAction />
      </div>
    </div>
  )
}

export default Newsletters