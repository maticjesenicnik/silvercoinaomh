import { NewslettersType } from "types"
import { NewsletterCard } from "./NewsletterCard"

export const NewsletterGrid = ({ newsletters }: NewslettersType) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsletters.map((newsletter, index) => (
        <NewsletterCard key={index} newsletter={newsletter} />
      ))}
    </div>
  )
}
