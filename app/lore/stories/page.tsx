import { PageHeader } from '../../../components/PageHeader'

const Stories = (): JSX.Element => {
  const stories = require('/json/stories.json')

  return (
    <div className="text-center">
      <PageHeader title={'Stories'} />

      <div className="container mx-auto w-1/2">
        {stories.stories.map((story: any, index: number) => (
          <div className="flex flex-col mt-6">
            <div className="text-5xl text-center">{story.title}</div>
            {story.chapters.map((chapter: any, index: number) => (
              <div className="mt-3 text-justify">{chapter}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stories
