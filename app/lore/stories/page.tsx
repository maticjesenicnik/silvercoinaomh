import { PageHeader } from "components/PageHeader"
import { STORIES } from "data/stories"

const Stories = () => {
  return (
    <div className="text-center">
      <PageHeader title={"Stories"} />

      <div className="container mx-auto pl-6 pr-6 sm:w-full lg:w-1/2">
        {STORIES.stories.map((story: any, storyIndex: number) => (
          <div className="mt-6 flex flex-col" key={storyIndex}>
            <div className="text-center text-5xl">{story.title}</div>
            {story.chapters.map((chapter: any, chapterIndex: number) => (
              <div className="mt-3 text-justify" key={storyIndex + "-" + chapterIndex}>
                {chapter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stories
