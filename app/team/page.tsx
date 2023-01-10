import { PageHeader } from '../../components/PageHeader'
import { Member } from './Member'

const Team = (): JSX.Element => {
  const team = require('/json/team.json')

  return (
    <div className="text-center">
      <PageHeader title={'Meet the Team'} />

      <div className="container mx-auto lg:w-3/4 md:w-full pl-6 pr-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-12 ml-12 mr-12">
          {team.members.map((member: any, index: number) => (
            <Member key={index} name={member.name} title={member.title} url={member.url} info={member.info} />
          ))}
        </div>

        <h1 className="pt-4 text-4xl mt-12">Rest of the team</h1>
        <div className="grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-2 lg:grid-cols-2 ml-12 mr-12 mt-8">
          {team.helpers.map((member: any, index: number) => (
            <div key={index} className="items-center">
              {member.name + ' - ' + member.role}
            </div>
          ))}
        </div>

        <h1 className="pt-4 text-4xl mt-12">Playtesters</h1>
        <div className="grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-2 lg:grid-cols-3 ml-12 mr-12 mt-8">
          {team.playtesters.map((member: any, index: number) => (
            <div key={index} className="items-center">
              {member}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
