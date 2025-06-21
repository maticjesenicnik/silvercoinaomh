import Image from "next/image"

import { PageHeader } from "components/PageHeader"
import { CHARACTERS } from "data/characters"

const Characters = () => {
  return (
    <div className="text-center">
      <PageHeader title={"Characters"} />

      <div className="container mx-auto w-1/2">
        {CHARACTERS.characters.map((character: any, characterIndex: number) => (
          <div key={characterIndex} className="mt-24 flex flex-col">
            <div className="mb-4 text-center text-5xl">
              {character.name}
              <Image className="ml-4 inline-block" src={"/" + character.logo} alt={character.name + "'s logo"} width={48} height={48} />
            </div>
            <Image className="mx-auto w-full lg:w-3/4" width={640} height={360} src={"/" + character.image} alt={character.name} />
            {character.description.map((description: any, descriptionIndex: number) => (
              <div key={characterIndex + " - " + descriptionIndex} className="mt-3 text-justify">
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
