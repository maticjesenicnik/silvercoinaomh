interface NewsletterResultsCountProps {
  count: number;
  selectedYear: string;
}

export const NewsletterResultsCount = ({ count, selectedYear }: NewsletterResultsCountProps) => {
  return (
    <div className="mt-8 text-right">
      <p className="text-sm text-gray-400">
        Showing <span className="font-semibold text-white">{count}</span>
        {selectedYear !== "All" && <span> from {selectedYear}</span>} newsletter{count !== 1 ? "s" : ""}
      </p>
    </div>
  );
};
