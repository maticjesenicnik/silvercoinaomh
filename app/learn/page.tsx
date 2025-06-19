import { PageHeader } from 'components/PageHeader'
import rulebookImg from 'public/images/rulebook/rulebook.webp'
import scenarioImg from 'public/images/rulebook/scenario.webp'
import { BookEntry } from '../../components/learn/BookEntry'

const Learn = () => {
  return (
    <>
      <PageHeader title={'Learn'} />

      <section>
        <iframe
          className={'w-full aspect-video container mx-auto'}
          src="https://www.youtube.com/embed/5XEDSREG7TQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className={'container mx-auto mt-12 px-6 flex flex-col justify-center md:flex-row gap-8'}>
        <BookEntry title={'Standard rules v1.0.9'} image={rulebookImg} subtitle={'Things are bound to change'} />
        <BookEntry title={'Scenario book v1.0.9 '} image={scenarioImg} subtitle={'CO-OP and SOLO'} />
      </section>
    </>
  )
}

export default Learn