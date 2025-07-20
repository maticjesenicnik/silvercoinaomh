interface YearFilterProps {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  getNewsletterCountForYear: (year: string) => number;
}

export const YearFilter = ({ years, selectedYear, onYearChange, getNewsletterCountForYear }: YearFilterProps) => {
  return (
    <div className="mb-12">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-lg font-bold text-white">Browse by Year</h3>
        <p className="text-sm text-gray-300">Filter newsletters to explore our development timeline</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selectedYear === year
                ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-white/10 text-gray-300 hover:scale-105 hover:bg-white/20 hover:text-white"
            }`}
          >
            {year}
            <span className="ml-1 text-xs opacity-75">({getNewsletterCountForYear(year)})</span>
          </button>
        ))}
      </div>
    </div>
  );
};
