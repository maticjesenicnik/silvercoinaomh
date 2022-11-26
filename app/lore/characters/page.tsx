import Image from 'next/image'

const Characters = (): JSX.Element => {
  const characters = require('/json/characters.json')

  return (
    <div className="text-center">
      <title>Characters</title>
      <h1 className="text-4xl font-bold">Characters</h1>
      <p className="text-xl">Coming soon!</p>

      <div className="container mx-auto w-1/2">
        {characters.characters.map((character: any, index: number) => (
          <div className="flex flex-col mt-6">
            <div className="text-3xl text-center mb-4">
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
            {character.description.map((description: any, index: number) => (
              <div className="mt-3 text-justify">{description}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
