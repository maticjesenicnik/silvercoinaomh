"use client"

import { PageHeader } from "components/PageHeader"
import { TeamHelper } from "components/team/TeamHelper"
import { TeamMember } from "components/team/TeamMember"
import { TeamSection } from "components/team/TeamSection"
import { TEAM } from "data/team"
import { useIntersectionObserver } from "hooks/useIntersectionObserver"

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <div 
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        hasIntersected 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const Team = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Meet the Team" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Introduction */}
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">The Passionate Creators</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
              Meet the dedicated team behind Silver Coin: Age of Monster Hunters, along with the amazing contributors and community members who helped bring this vision to life.
            </p>
          </div>
        </AnimatedSection>

        {/* Core Team */}
        <AnimatedSection delay={200}>
          <TeamSection title="Core Team" subtitle="The passionate creators behind Silver Coin: Age of Monster Hunters">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {TEAM.members.map((member: any, index: number) => (
                <AnimatedCard key={index} delay={400 + index * 100}>
                  <TeamMember 
                    name={member.name} 
                    title={member.title} 
                    image={member.url} 
                    bio={member.info} 
                    socials={member.socials} 
                  />
                </AnimatedCard>
              ))}
            </div>
          </TeamSection>
        </AnimatedSection>

        {/* Contributors */}
        <AnimatedSection delay={600}>
          <TeamSection title="Contributors" subtitle="Amazing people who helped bring this project to life">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {TEAM.helpers.map((helper: any, index: number) => (
                <AnimatedCard key={index} delay={800 + index * 50}>
                  <TeamHelper name={helper.name} role={helper.role} />
                </AnimatedCard>
              ))}
            </div>
          </TeamSection>
        </AnimatedSection>

        {/* Playtesters */}
        <AnimatedSection delay={1000}>
          <TeamSection title="Playtesters" subtitle="Our dedicated community who helped refine the game">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {TEAM.playtesters.map((playtester: string, index: number) => (
                <AnimatedCard key={index} delay={1200 + index * 30}>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm transition-colors hover:bg-white/10">
                    <span className="text-sm font-medium text-gray-200">{playtester}</span>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </TeamSection>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={1400}>
          <div className="mt-24 text-center">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <span className="material-icons-outlined text-4xl text-blue-300">groups</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Join Our Community</h3>
              <p className="mb-8 text-base text-gray-300 leading-relaxed">
                Want to be part of our journey? Join our Discord community, follow our development updates, and help shape the future of Silver Coin: Age of Monster Hunters.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a 
                  href="https://discord.gg/NfQqrSgW3u" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">forum</span>
                  Join Discord
                </a>
                <a 
                  href="/playtest" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
                >
                  <span className="material-icons-outlined text-lg">videogame_asset</span>
                  Playtest the Game
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Team