import Image from "next/image"

import { PageHeader } from "components/PageHeader"
import { KINGDOMS } from "data/kingdoms"

const Kingdoms = () => {
  return (
    <div className="text-center">
      <PageHeader title={"Kingdoms"} />

      <div className="container mx-auto w-full lg:w-1/2">
        <Image className="mx-auto mb-4 w-full lg:w-3/4" width={360} height={640} src={"/" + KINGDOMS.world.image} alt={KINGDOMS.world.name} />

        {KINGDOMS.kingdoms.map((kingdom: any, kingdomIndex: number) => (
          <div key={kingdomIndex} className="mt-24 flex flex-col">
            <div className="mb-2 text-center text-3xl">
              <Image className="mx-auto w-full" src={"/" + kingdom.image} alt={kingdom.name} width={640} height={360} />
            </div>

            {kingdom.description.map((description: any, descriptionIndex: number) => (
              <div key={kingdomIndex + "-" + descriptionIndex} className="mt-3 text-justify">
                {description}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Kingdoms
