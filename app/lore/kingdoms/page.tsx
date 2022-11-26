import Image from "next/image"

const Kingdoms = (): JSX.Element => {
  const kingdoms = require('/json/kingdoms.json')

  return (
    <div className="text-center">
      <title>Kingdoms</title>
      <h1 className="text-4xl font-bold">Kingdoms</h1>
      <p className="text-xl">Coming soon!</p>

      <div className="container mx-auto w-1/2">
        <Image 
          className="w-full lg:w-3/4 mx-auto mb-4"
          width={360}
          height={640}
          src={'/' + kingdoms.world.image}
          alt={kingdoms.world.name}
        />

        {kingdoms.kingdoms.map((kingdom: any, index: number) => (
          <div className="flex flex-col mt-6">
            <div className="text-3xl text-center mb-2">
              <Image
                className="w-full mx-auto"
                src={'/' + kingdom.image}
                alt={kingdom.name}
                width={640}
                height={360}
              />
            </div>

            {kingdom.description.map((description: any, index: number) => (
              <div className="mt-3 text-justify">{description}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kingdoms