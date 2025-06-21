import { BookEntry } from "components/learn/BookEntry"
import { PageHeader } from "components/PageHeader"

const Learn = () => {
  return (
    <>
      <PageHeader title={"Learn"} />

      <section>
        <iframe
          className={"container mx-auto aspect-video w-full"}
          src="https://www.youtube.com/embed/5XEDSREG7TQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className={"container mx-auto mt-12 flex flex-col justify-center gap-8 px-6 md:flex-row"}>
        <BookEntry title={"Standard rules v1.0.9"} image="/images/rulebook/rulebook.webp" subtitle={"Things are bound to change"} />
        <BookEntry title={"Scenario book v1.0.9 "} image="/images/rulebook/scenario.webp" subtitle={"CO-OP and SOLO"} />
      </section>
    </>
  )
}

export default Learn
