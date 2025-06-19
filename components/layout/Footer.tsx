import Image from 'next/image'

export const Footer = () => {
  const socialsData = require('/json/socials.json')

  return (
    <footer className="bg-background border-t border-white/10 text-on-background">
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Partners */}
          <div className="flex items-center gap-6">
            <a 
              href="https://boardgamegeek.com/boardgamepublisher/50038/bona-fide-games"
              className="hover:opacity-80 transition-opacity"
            >
              <Image 
                height={80} 
                width={80} 
                src="/images/logos/bona_fide.webp" 
                alt="Bona Fide Games" 
                className="object-contain"
              />
            </a>
            <a 
              href="https://gea-college.si/"
              className="hover:opacity-80 transition-opacity"
            >
              <Image 
                height={80} 
                width={160} 
                src="/images/logos/gea_college.webp" 
                alt="Gea College" 
                className="object-contain"
              />
            </a>
          </div>

          {/* Terms */}
          <div className="text-center">
            <a 
              className="text-gray-300 hover:text-white transition-colors font-medium" 
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </a>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {socialsData.socials.map((social: any, index: number) => (
                <a
                  key={index}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <Image 
                    width={32} 
                    height={32} 
                    src={social.image} 
                    alt={social.name}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
            <a 
              className="text-gray-300 hover:text-white transition-colors text-sm" 
              href="mailto:silvercoinaomh@gmail.com"
            >
              silvercoinaomh@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}