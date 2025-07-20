import { AnimatedSection } from "components/layout/AnimatedSection"
import Image from "next/image"

export const AccessMethods = () => {
  return (
    <AnimatedSection delay={400}>
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-white">Two Ways to Access</h3>
          <p className="text-gray-300">Choose your preferred method to start playtesting</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Steam Method */}
          <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-[1.02]">
            <div className="relative aspect-video overflow-hidden">
              <Image
                className="h-full w-full object-cover brightness-75 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
                src="/images/playtest/tabletopia_steam.webp"
                alt="Tabletopia on Steam"
                width={1154}
                height={714}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Steam Badge */}
              <div className="absolute left-4 top-4">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                  <span className="material-icons-outlined text-sm text-blue-400">videogame_asset</span>
                  <span className="text-xs font-medium text-white">Steam</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="mb-3 text-xl font-bold text-white">Via Steam</h4>
              <p className="mb-4 text-gray-300">
                Download Steam (or open if you already have it), search for &quot;Tabletopia&quot; in the store, and click the green &quot;Play Game&quot;
                button.
              </p>

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-sm text-green-400">check</span>
                  <span>Better performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-sm text-green-400">check</span>
                  <span>Automatic updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-sm text-green-400">check</span>
                  <span>Steam integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Browser Method */}
          <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-[1.02]">
            <div className="relative aspect-video overflow-hidden">
              <Image
                className="h-full w-full object-cover brightness-75 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
                src="/images/playtest/tabletopia_browser.webp"
                alt="Tabletopia in Browser"
                width={1347}
                height={466}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Browser Badge */}
              <div className="absolute left-4 top-4">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                  <span className="material-icons-outlined text-sm text-orange-400">language</span>
                  <span className="text-xs font-medium text-white">Browser</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="mb-3 text-xl font-bold text-white">Via Browser</h4>
              <p className="mb-4 text-gray-300">
                Simply search for &quot;Tabletopia&quot; in Google and click the first link. No downloads required - start playing immediately!
              </p>

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-sm text-orange-400">check</span>
                  <span>No installation needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-sm text-orange-400">check</span>
                  <span>Works on any device</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-outlined text-sm text-orange-400">check</span>
                  <span>Instant access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
