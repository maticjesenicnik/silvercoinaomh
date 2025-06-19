import { TeamSection } from '../../components/team/TeamSection'
import { TeamMember } from '../../components/team/TeamMember'
import { TeamHelper } from '../../components/team/TeamHelper'
import { PageHeader } from 'components/PageHeader'

const Team = async (): JSX.Element => {
  const res = await fetch("/json/team.json");
  const team = res.json();

  return (
    <div className="min-h-screen">
      <PageHeader title="Meet the Team" />

      <div className="container mx-auto px-4 lg:px-6 pb-16">
        {/* Core Team */}
        <TeamSection 
          title="Core Team" 
          subtitle="The passionate creators behind Silver Coin: Age of Monster Hunters"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.members.map((member: any, index: number) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                image={member.url}
                bio={member.info}
                socials={member.socials}
              />
            ))}
          </div>
        </TeamSection>

        {/* Contributors */}
        <TeamSection 
          title="Contributors" 
          subtitle="Amazing people who helped bring this project to life"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.helpers.map((helper: any, index: number) => (
              <TeamHelper
                key={index}
                name={helper.name}
                role={helper.role}
              />
            ))}
          </div>
        </TeamSection>

        {/* Playtesters */}
        <TeamSection 
          title="Playtesters" 
          subtitle="Our dedicated community who helped refine the game"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {team.playtesters.map((playtester: string, index: number) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-colors"
              >
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