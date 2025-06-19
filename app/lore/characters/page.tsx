import Image from 'next/image'
import { PageHeader } from 'components/PageHeader'

const Characters = (): JSX.Element => {
  const characters = require('data/json/characters.json')

  return (
    <div className="text-center">
      <PageHeader title={'Characters'} />

      <div className="container mx-auto w-1/2">
        {characters.characters.map((character: any, characterIndex: number) => (
          <div key={characterIndex} className="flex flex-col mt-24">
            <div className="text-5xl text-center mb-4">
              {character.name}
              <Image
                className="inline-block ml-4"
                src={'/' + character.logo}
                alt={character.name + "'s logo"}
                width={48}
                height={48}
              />
            </div>
            <Image
              className="w-full lg:w-3/4 mx-auto"
              width={640}
              height={360}
              src={'/' + character.image}
              alt={character.name}
            />
            {character.description.map((description: any, descriptionIndex: number) => (
              <div key={characterIndex + ' - ' + descriptionIndex} className="mt-3 text-justify">
                {description}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters