import { PageHeader } from '../../components/PageHeader'
import { Member } from './Member'

const Team = (): JSX.Element => {
  const team = require('/json/team.json')

  return (
    <div className="text-center">
      <PageHeader title={'Meet the Team'} />

      <div className="container mx-auto lg:w-3/4 sm:w-full pl-6 pr-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-12 ml-12 mr-12">
          {team.members.map((member: any, index: number) => (
            <Member key={index} name={member.name} title={member.title} url={member.url} info={member.info} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
