"use client"

import { Slider } from "components/gallery/Slider"
import { SliderItem } from "components/gallery/SliderItem"
import { PageHeader } from "components/PageHeader"
import { GALLERY } from "data/gallery"

const Gallery = () => {
  // TODO: Responsive design
  return (
    <>
      <title>Gallery</title>
      <PageHeader title={"Gallery"} />

      <section className={"container mx-auto"}>
        <h3 className={"py-4 text-center text-4xl"}>Monsters</h3>
        <Slider>
          {GALLERY.monsters.map((el: any) => {
            return <SliderItem key={el.name} name={el.name} image={el.image} />
          })}
        </Slider>

        <h3 className={"py-4 text-center text-4xl"}>Characters</h3>
        <Slider>
          {GALLERY.characters.map((el: any) => {
            return <SliderItem key={el.name} name={el.name} image={el.image} />
          })}
        </Slider>
      </section>
    </>
  )
}

export default Gallery
