import { PageHeader } from "components/PageHeader"
import { TeamHelper } from "components/team/TeamHelper"
import { TeamMember } from "components/team/TeamMember"
import { TeamSection } from "components/team/TeamSection"
import { TEAM } from "data/team"

const Team = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Meet the Team" />

      <div className="container mx-auto px-4 pb-16 lg:px-6">
        {/* Core Team */}
        <TeamSection title="Core Team" subtitle="The passionate creators behind Silver Coin: Age of Monster Hunters">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TEAM.members.map((member: any, index: number) => (
              <TeamMember key={index} name={member.name} title={member.title} image={member.url} bio={member.info} socials={member.socials} />
            ))}
          </div>
        </TeamSection>

        {/* Contributors */}
        <TeamSection title="Contributors" subtitle="Amazing people who helped bring this project to life">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.helpers.map((helper: any, index: number) => (
              <TeamHelper key={index} name={helper.name} role={helper.role} />
            ))}
          </div>
        </TeamSection>

        {/* Playtesters */}
        <TeamSection title="Playtesters" subtitle="Our dedicated community who helped refine the game">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {TEAM.playtesters.map((playtester: string, index: number) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm transition-colors hover:bg-white/10">
                <span className="text-sm font-medium text-gray-200">{playtester}</span>
              </div>
            ))}
          </div>
        </TeamSection>
      </div>
    </div>
  )
}

export default Team
