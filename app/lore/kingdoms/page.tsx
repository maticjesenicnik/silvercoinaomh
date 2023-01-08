import Image from 'next/image'
import { PageHeader } from '../../../components/PageHeader'

const Kingdoms = (): JSX.Element => {
  const kingdoms = require('/json/kingdoms.json')

  return (
    <div className="text-center">
      <PageHeader title={'Kingdoms'} />

      <div className="container mx-auto w-full lg:w-1/2">
        <Image
          className="w-full lg:w-3/4 mx-auto mb-4"
          width={360}
          height={640}
          src={'/' + kingdoms.world.image}
          alt={kingdoms.world.name}
        />

        {kingdoms.kingdoms.map((kingdom: any, kingdomIndex: number) => (
          <div key={kingdomIndex} className="flex flex-col mt-24">
            <div className="text-3xl text-center mb-2">
              <Image className="w-full mx-auto" src={'/' + kingdom.image} alt={kingdom.name} width={640} height={360} />
            </div>

            {kingdom.description.map((description: any, descriptionIndex: number) => (
              <div key={kingdomIndex + '-' + descriptionIndex} className="mt-3 text-justify">{description}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Kingdoms
