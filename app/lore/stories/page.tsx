const Stories = () : JSX.Element => {
  const stories = require('/json/stories.json')

  return (
    <div className="text-center">
      <title>Stories</title>
      <h1 className="text-4xl font-bold">Stories</h1>
      <p className="text-xl">Coming soon!</p>

      <div className="container mx-auto w-1/2">
        {stories.stories.map((story: any, index: number) => (
          <div className="flex flex-col mt-6">
            <div className="text-3xl text-center">{story.title}</div>
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