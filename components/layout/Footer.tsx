import Image from 'next/image'

export const Footer = () => {
  const socialsData = require('data/json/socials.json')

  return (
    <footer className="bg-background/95 backdrop-blur-md border-t border-white/20 text-on-background">
      <div className="container mx-auto px-4 lg:px-6 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Partners - Logos Only */}
          <div className="flex items-center gap-6">
            <a 
              href="https://boardgamegeek.com/boardgamepublisher/50038/bona-fide-games"
              className="hover:opacity-80 transition-opacity group"
              title="Bona Fide Games"
            >
              <Image 
                height={60} 
                width={60} 
                src="/images/logos/bona_fide.webp" 
                alt="Bona Fide Games" 
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </a>
            <a 
              href="https://gea-college.si/"
              className="hover:opacity-80 transition-opacity group"
              title="Gea College"
            >
              <Image 
                height={60} 
                width={120} 
                src="/images/logos/gea_college.webp" 
                alt="Gea College" 
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </a>
          </div>

          {/* Center Content - Contact & Social */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3">
              {socialsData.socials.map((social: any, index: number) => (
                <a
                  key={index}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-200 hover:scale-110"
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <Image 
                    width={24} 
                    height={24} 
                    src={social.image} 
                    alt={social.name}
                    className="object-contain brightness-90 hover:brightness-100 transition-all"
                  />
                </a>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">You can reach us at:</p>
              <a 
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium" 
                href="mailto:silvercoinaomh@gmail.com"
              >
                silvercoinaomh@gmail.com
              </a>
            </div>
          </div>

          {/* Terms & Copyright */}
          <div className="flex flex-col items-center lg:items-end gap-2 text-center lg:text-right">
            <a 
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium" 
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </a>
            <p className="text-xs text-gray-500">
              © 2025 Silver Coin: Age of Monster Hunters
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}