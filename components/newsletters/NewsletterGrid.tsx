import { NewsletterCard } from "./NewsletterCard"

interface NewsletterGridProps {
  newsletters: Array<{
    number: number
    title: string
    date: string
    url: string
    image: string
  }>
}

export const NewsletterGrid = ({ newsletters }: NewsletterGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsletters.map((newsletter, index) => (
        <NewsletterCard key={index} newsletter={newsletter} />
      ))}
    </div>
  )
}