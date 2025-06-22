export const NewsletterCallToAction = () => {
  return (
    <div className="mt-24 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <span className="material-icons-outlined text-4xl text-blue-300">mail</span>
        </div>
        <h3 className="mb-4 text-xl font-bold text-white">Stay in the Loop</h3>
        <p className="mb-8 text-base text-gray-300 leading-relaxed">
          Don't miss out on the latest development updates! Subscribe to our newsletter to get exclusive insights, behind-the-scenes content, and be the first to know about major announcements when we have news to share.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a 
            href="/#newsletter-signup" 
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
          >
            <span className="material-icons-outlined text-lg">mail</span>
            Subscribe to Newsletter
          </a>
          <a 
            href="/videos" 
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
          >
            <span className="material-icons-outlined text-lg">smart_display</span>
            Watch Videos
          </a>
        </div>
      </div>
    </div>
  )
}