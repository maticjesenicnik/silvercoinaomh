"use client";

import { FeatureCard } from "components/frontpage/FeatureCard";
import { StatCard } from "components/frontpage/StatCard";
import { AnimatedSection } from "components/layout/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <title>Silver Coin: Age of Monster Hunters</title>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute left-0 top-0 z-0 h-full w-full">
          <Image src="/cover_art.webp" fill className="object-cover" alt="Background" priority />
        </div>

        <div className="relative z-10 w-full bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Game Box */}
              <AnimatedSection>
                <div className="flex justify-center lg:justify-start">
                  <div className="group relative max-w-lg">
                    <Image
                      src="/images/frontpage/box.webp"
                      className="w-full transition-all duration-500 group-hover:scale-105"
                      alt="Silver Coin: Age of Monster Hunters Box"
                      width={1916}
                      height={1515}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300" />
                  </div>
                </div>
              </AnimatedSection>

              {/* Hero Content */}
              <div className="text-center lg:text-left">
                <AnimatedSection delay={200}>
                  <div className="mb-6">
                    <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl xl:text-7xl leading-tight">Silver Coin</h1>
                    <h2 className="text-2xl font-semibold text-blue-300 lg:text-3xl xl:text-4xl">Age of Monster Hunters</h2>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={400}>
                  <p className="mb-8 text-lg text-gray-200 leading-relaxed lg:text-xl max-w-2xl">
                    Embark on an epic adventure in the fantasy realm of Atosia. Hunt legendary monsters, earn silver coins, and become the most renowned monster
                    hunter in the land.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={600}>
                  <div className="mb-8 flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                      <span className="material-icons-outlined text-lg text-green-400">groups</span>
                      <span className="text-sm font-medium text-white">1-5 Players</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                      <span className="material-icons-outlined text-lg text-blue-400">schedule</span>
                      <span className="text-sm font-medium text-white">60 Min/Player</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                      <span className="material-icons-outlined text-lg text-purple-400">gamepad</span>
                      <span className="text-sm font-medium text-white">Solo/Co-op/Competitive</span>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={800}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                    <Link
                      href="/playtest"
                      className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/25"
                    >
                      <span className="material-icons-outlined text-xl">videogame_asset</span>
                      Play Now
                    </Link>
                    <Link
                      href="/learn"
                      className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
                    >
                      <span className="material-icons-outlined text-xl">school</span>
                      Learn Rules
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">Epic Monster Hunting</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
                Experience the perfect blend of adventure and strategy in a world where every decision matters
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="explore"
              title="Open World Adventure"
              description="Explore the vast continent of Atosia with complete freedom. Choose your path, discover hidden secrets, and forge your own legend."
              delay={200}
            />
            <FeatureCard
              icon="pets"
              title="40+ Unique Monsters"
              description="Face legendary creatures that grow stronger based on when and where you encounter them. Each monster offers unique challenges and rewards."
              delay={300}
            />
            <FeatureCard
              icon="psychology"
              title="Strategic Gameplay"
              description="Balance preparation time with action. Come unprepared and face difficulties, prepare too long and lose precious time."
              delay={400}
            />
            <FeatureCard
              icon="groups"
              title="Multiple Game Modes"
              description="Play solo, cooperatively with friends, or competitively. Each mode offers a unique experience tailored to your preferred playstyle."
              delay={500}
            />
            <FeatureCard
              icon="account_balance"
              title="Rich Kingdoms"
              description="Interact with six distinct kingdoms, each with their own culture, contracts, and political intrigue that affects your journey."
              delay={600}
            />
            <FeatureCard
              icon="emoji_events"
              title="Earn Your Legend"
              description="Collect silver coins, complete contracts, and build your reputation as the most skilled monster hunter in Atosia."
              delay={700}
            />
          </div>
        </div>
      </section>

      {/* Game Board Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">Immersive Game World</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">Every component has been carefully designed to bring the world of Atosia to life</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Image
                src="/images/frontpage/naslovna_slika_igre.webp"
                alt="Silver Coin Game Board"
                width={1500}
                height={1563}
                className="w-full transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Game Stats */}
      <section className="py-20 bg-gradient-to-b from-black/20 to-transparent">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">By the Numbers</h2>
              <p className="text-lg text-gray-300">Years of development, countless hours of playtesting</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCard number="7+" label="Years in Development" delay={200} />
            <StatCard number="40+" label="Unique Monsters" delay={300} />
            <StatCard number="9" label="Character Classes" delay={400} />
            <StatCard number="6" label="Kingdoms to Explore" delay={500} />
          </div>
        </div>
      </section>

      {/* How to Play Video */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">Learn to Hunt</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">Watch our comprehensive tutorial and start your monster hunting journey</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mx-auto max-w-4xl">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="relative aspect-video">
                  <iframe
                    className="h-full w-full rounded-2xl"
                    src="https://www.youtube.com/embed/5XEDSREG7TQ"
                    title="How to Play - Silver Coin: Age of Monster Hunters"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center">
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">Ready for the Hunt?</h2>
                <p className="mb-12 text-xl text-gray-300 leading-relaxed">
                  Join thousands of players already exploring Atosia. Your legendary adventure awaits!
                </p>

                <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:justify-center">
                  <Link
                    href="/playtest"
                    className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-10 py-5 text-xl font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/25"
                  >
                    <span className="material-icons-outlined text-2xl">play_circle</span>
                    Start Playing
                  </Link>
                  <Link
                    href="/lore/kingdoms"
                    className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-10 py-5 text-xl font-semibold text-white transition-all hover:bg-white/20 hover:scale-105 backdrop-blur-sm"
                  >
                    <span className="material-icons-outlined text-2xl">explore</span>
                    Explore Lore
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
