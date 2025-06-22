import Image from "next/image"
import Link from "next/link"

interface NewsletterCardProps {
  newsletter: {
    title: string
    date: string
    url: string
    image: string
  }
  index: number
}

export const NewsletterCard = ({ newsletter, index }: NewsletterCardProps) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Get newsletter number from title
  const getNewsletterNumber = (title: string) => {
    const match = title.match(/#(\d+)/)
    return match ? match[1] : null
  }

  return (
    <article className="group h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-2xl">
      <Link href={newsletter.url} target="_blank" className="flex h-full flex-col">
        {/* Newsletter Preview Image */}
        <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
          <Image
            className="h-full w-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
            src={"/" + newsletter.image}
            alt={newsletter.title}
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Newsletter Badge */}
          <div className="absolute left-3 top-3">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-sm">
              <span className="material-icons-outlined text-sm text-white">article</span>
              <span className="text-xs font-medium text-white">
                {getNewsletterNumber(newsletter.title) ? `#${getNewsletterNumber(newsletter.title)}` : 'Newsletter'}
              </span>
            </div>
          </div>

          {/* Read Article Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
              <span className="material-icons-outlined text-2xl text-white">open_in_new</span>
            </div>
          </div>

          {/* Date Badge */}
          <div className="absolute bottom-3 right-3">
            <div className="rounded-lg border border-white/20 bg-black/60 px-2 py-1 backdrop-blur-sm">
              <span className="text-xs font-medium text-white">{new Date(newsletter.date).getFullYear()}</span>
            </div>
          </div>
        </div>

        {/* Newsletter Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-blue-300">
            {newsletter.title}
          </h3>

          {/* Date and Meta Info */}
          <div className="mb-4 flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span className="material-icons-outlined text-sm">schedule</span>
              <span>{formatDate(newsletter.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-icons-outlined text-sm">visibility</span>
              <span>Dev Update</span>
            </div>
          </div>

          {/* Newsletter Description/Preview */}
          <div className="mb-4 flex-1">
            <p className="line-clamp-3 text-sm text-gray-300 leading-relaxed">
              Get the latest updates on Silver Coin: Age of Monster Hunters development, including new artwork, gameplay mechanics, team insights, and behind-the-scenes content from our passionate development team.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="material-icons-outlined text-sm">mail</span>
              Newsletter
            </span>
            <span className="flex items-center gap-1 font-medium text-blue-300 transition-colors group-hover:text-blue-200">
              Read Article
              <span className="material-icons-outlined text-sm">arrow_outward</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}