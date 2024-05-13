'use client'

import { PageHeader } from 'components/PageHeader'
import { Slider } from './Slider'
import { SliderItem } from './SliderItem'

const Gallery = () => {
  const gallery = require('/json/gallery.json')

  // TODO: Responsive design
  return (
    <>
      <title>Gallery</title>
      <PageHeader title={'Gallery'} />

      <section className={'container mx-auto'}>
        <h3 className={'text-4xl py-4 text-center'}>Monsters</h3>
        <Slider>
          {gallery.monsters.map((el: any) => {
            return <SliderItem key={el.name} name={el.name} image={el.image} />
          })}
        </Slider>

        <h3 className={'text-4xl py-4 text-center'}>Characters</h3>
        <Slider>
          {gallery.characters.map((el: any) => {
            return <SliderItem key={el.name} name={el.name} image={el.image} />
          })}
        </Slider>
      </section>
    </>
  )
}

export default Gallery
