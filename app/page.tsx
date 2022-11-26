import Image from 'next/image'
import { ListTitle } from '../components/frontpage/ListTitle'
import { ListBody } from '../components/frontpage/ListBody'

export default function Page() {
  const socialsData = require('/json/socials.json')

  return (
    <>
      <title>Front Page</title>
      <section className={'relative'}>
        <img src={'/cover_art.webp'} alt={'Background'} />
        <div className={'absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center'}>
          <div className={'mr-16 flex gap-32 justify-center'}>
            <img src={'/images/frontpage/box.webp'} className={'w-1/2 flex-shrink-0'} alt={'Box'} />

            <div className={'flex flex-col items-center gap-4'}>
              <Image width={361} height={77} src={'/images/kickstarter/late_pledge.webp'} alt={'Late pledge'} />
              <Image
                width={290}
                height={68}
                src={'/images/kickstarter/subscribe_for_free_copy.webp'}
                alt={'Subscribe for free copy'}
              />
              <div className={'flex flex-col items-center gap-2'}>
                <div className={'flex gap-3'}>
                  <label>Email address</label>
                  <input
                    type={'email'}
                    className={'bg-transparent font-light focus:outline-none'}
                    placeholder={'Your email address'}
                  />
                </div>
                <Image width={138} height={77} src={'/images/buttons/sign_up.webp'} alt={'Sign Up'} />
              </div>

              <p className={'text-sm w-96 font-light'}>
                Earn a chance to <span className={'font-bold'}>win a free copy of the game</span> by subscribing.
                Subscribe to be updated on the <span className={'font-bold'}>latest news</span>!
              </p>

              <div className={'flex gap-2'}>
                {socialsData.socials.map((el: any, index: number) => {
                  return (
                    <a
                      key={index}
                      className={'flex justify-center items-center hover:opacity-80 transition-all'}
                      href={el.url}
                      target={'_blank'}
                      rel={'noreferrer'}
                    >
                      <Image width={60} height={60} src={el.image} alt={el.name} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={'container mx-auto mt-16 flex flex-col text-center items-center gap-6'}>
        <img src={'/images/frontpage/infographics.webp'} alt={'Inforgraphic'} />

        <h2 className={'text-5xl font-bold'}>SILVER COIN: Age of Monster Hunters</h2>

        <ListBody>
          Set in the fantasy realm of Atosia, <strong>Silver Coin: Age of Monster Hunters</strong> will make sure to
          take you on a journey like no other.
        </ListBody>

        <ListBody>
          Combining a{' '}
          <strong>
            true adventure like feeling with strong eurogames mechanics, Silver Coin: Age of Monster Hunters
          </strong>
          offers a unique gaming experience. Bid for your character, starting location and initial resources, while
          putting your Victory Points on the line. Now you are ready to start your journey.
        </ListBody>

        <ListBody>
          Set off and keep your eyes on the contracts offered by the various kingdoms. Plan carefully and prepare, as
          <span>
            over 30 monsters you may face will each offer different challenges and get stronger depending on when and
            where you will face them
          </span>
          . Come unprepared and you may face difficulties, prepare for too long and precious time will be lost.
        </ListBody>
      </section>

      <section className={'my-6 container mx-auto'}>
        <img src={'/images/frontpage/naslovna_slika_igre.webp'} />
      </section>

      <hr className={'container mx-auto'} />

      <section className={'my-6 container px-56 mx-auto'}>
        <img src={'/images/frontpage/welcome.webp'} />
      </section>

      <section className={'my-6 flex flex-col gap-4 items-center text-center'}>
        <h2 className={'text-5xl font-bold mb-6'}>WHY BACK NOW</h2>

        <ListTitle>1. Kickstarter exclusive content!</ListTitle>
        <ListBody>
          Retail version and Kickstarter version will differ a lot, so make sure you get all the exclusive content.
        </ListBody>

        <ListTitle>2. Crowdfunding exclusive add-ons!</ListTitle>
        <ListBody>Add-ons will only be available to buy in a crowdfunding campaign.</ListBody>

        <ListTitle>3. Help this project come to life!</ListTitle>
        <ListBody>
          We are first time creators that have been working on this game every day for more than 4 years. The only way
          it can get on the shelves and see the light of day is to help us get funded. Thank you!
        </ListBody>

        <ListTitle>4. Kickstarter exclusive price!</ListTitle>
        <ListBody>Both pledges will be offered at a reduced price.</ListBody>

        <ListTitle>5. Help shape the game!</ListTitle>
        <ListBody>
          Receive all the stretch goals for free! The more backers we get, the more content we can unlock through the
          stretch goals and social goals.
        </ListBody>

        <ListTitle>6. Potential expansions!</ListTitle>
        <ListBody>
          The bigger the community will be and the the better the response, the bigger potential we have for creating
          further content for this game (expansions, fan made scenarios, custom monsters and more)!
        </ListBody>
      </section>

      <hr className={'container mx-auto'} />

      <section className={'my-6 flex flex-col items-center gap-6'}>
        <h2 className={'text-5xl font-bold mb-6'}>How to play</h2>

        <iframe
          className={'w-full aspect-video container mx-auto'}
          src="https://www.youtube.com/embed/5XEDSREG7TQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className={'mt-24 flex flex-col items-center gap-6'}>
        <Image width={367} height={62} src={'/images/buttons/want_to_playtest.webp'} alt={'Want to playtest?'} />
        <Image width={512} height={98} src={'/images/buttons/sign_up_newsletter.webp'} alt={'Sign up for newsletter'} />
      </section>
    </>
  )
}
