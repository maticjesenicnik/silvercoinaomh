interface GallerySearchProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export const GallerySearch = ({ searchQuery, onSearchChange }: GallerySearchProps) => {
  return (
    <div className="mb-8">
      <div className="mx-auto max-w-md">
        <div className="relative">
          <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input
            type="text"
            placeholder="Search artwork..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-blue-400 focus:bg-white/10 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <span className="material-icons-outlined text-sm">close</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}