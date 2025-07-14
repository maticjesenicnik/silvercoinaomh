interface GalleryTabsProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  getCategoryCount: (category: string) => number
}

export const GalleryTabs = ({ categories, selectedCategory, onCategoryChange, getCategoryCount }: GalleryTabsProps) => {
  return (
    <div className="mb-12">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-lg font-bold text-white">Browse by Category</h3>
        <p className="text-sm text-gray-300">Select a category to explore the artwork</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-md ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="relative z-10">
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({getCategoryCount(category)})
                </span>
              </span>
              
              {/* Active tab indicator */}
              {selectedCategory === category && (
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 opacity-90" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}