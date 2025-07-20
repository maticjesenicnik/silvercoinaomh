import { SOCIALS } from "data/socials";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t border-white/20 bg-background/95 text-on-background backdrop-blur-md">
      <div className="container mx-auto px-4 py-6 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          {/* Partners - Logos Only */}
          <div className="flex items-center gap-6">
            <a
              href="https://boardgamegeek.com/boardgamepublisher/50038/bona-fide-games"
              className="group transition-opacity hover:opacity-80"
              title="Bona Fide Games"
            >
              <Image
                height={60}
                width={60}
                src="/images/logos/bona_fide.webp"
                alt="Bona Fide Games"
                className="object-contain transition-transform group-hover:scale-105"
              />
            </a>
            <a href="https://gea-college.si/" className="group transition-opacity hover:opacity-80" title="Gea College">
              <Image
                height={60}
                width={120}
                src="/images/logos/gea_college.webp"
                alt="Gea College"
                className="object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Center Content - Contact & Social */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3">
              {SOCIALS.socials.map((social: any, index: number) => (
                <a
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all duration-200 hover:scale-110 hover:bg-white/15"
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
                    className="object-contain brightness-90 transition-all hover:brightness-100"
                  />
                </a>
              ))}
            </div>
            <div className="text-center">
              <p className="mb-1 text-xs text-gray-400">You can reach us at:</p>
              <a className="text-sm font-medium text-gray-300 transition-colors hover:text-white" href="mailto:silvercoinaomh@gmail.com">
                silvercoinaomh@gmail.com
              </a>
            </div>
          </div>

          {/* Terms & Copyright */}
          <div className="flex flex-col items-center gap-2 text-center lg:items-end lg:text-right">
            <a className="text-sm font-medium text-gray-300 transition-colors hover:text-white" href="/terms-and-conditions">
              Terms & Conditions
            </a>
            <p className="text-xs text-gray-500">© 2025 Silver Coin: Age of Monster Hunters</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
