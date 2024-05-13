import { PageHeader } from 'components/PageHeader'

const Stories = (): JSX.Element => {
  const stories = require('/json/stories.json')

  return (
    <div className="text-center">
      <PageHeader title={'Stories'} />

      <div className="container mx-auto lg:w-1/2 sm:w-full pl-6 pr-6">
        {stories.stories.map((story: any, storyIndex: number) => (
          <div className="flex flex-col mt-6" key={storyIndex}>
            <div className="text-5xl text-center">{story.title}</div>
            {story.chapters.map((chapter: any, chapterIndex: number) => (
              <div className="mt-3 text-justify" key={storyIndex + '-' + chapterIndex}>
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
