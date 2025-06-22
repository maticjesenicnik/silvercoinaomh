interface NoNewslettersFoundProps {
  selectedYear: string
  onShowAll: () => void
}

export const NoNewslettersFound = ({ selectedYear, onShowAll }: NoNewslettersFoundProps) => {
  return (
    <div className="py-16 text-center">
      <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
        <span className="material-icons-outlined mb-4 block text-4xl text-gray-400">rss_feed</span>
        <h3 className="mb-2 text-xl font-bold text-white">No newsletters found</h3>
        <p className="mb-4 text-gray-400">No newsletters found for the year "{selectedYear}".</p>
        <button 
          onClick={onShowAll} 
          className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Show All Newsletters
        </button>
      </div>
    </div>
  )
}