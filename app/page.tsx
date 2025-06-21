import Image from "next/image"

import { ListBody } from "components/frontpage/ListBody"
import { ListTitle } from "components/frontpage/ListTitle"
import { SOCIALS } from "data/socials"

export default function Page() {
  return (
    <>
      <title>Front Page</title>

      <section className={"relative"}>
        <div className={"absolute left-0 top-0 z-0 h-full w-full"}>
          <Image src="/cover_art.webp" fill className={"object-cover"} alt={"Background"} />
        </div>

        <div className={"relative flex items-center justify-center bg-black/40 px-6 py-32"}>
          <div className={"flex flex-col items-center justify-center gap-x-32 lg:mr-16 lg:flex-row"}>
            <Image src="/images/frontpage/box.webp" className={"flex-shrink-0 lg:w-1/2"} alt={"Box"} fill />

            <div className={"flex flex-col items-center gap-6"}>
              <Image src="/images/kickstarter/late_pledge.webp" alt={"Late pledge"} fill />
              <Image src="/images/kickstarter/subscribe_for_free_copy.webp" alt={"Subscribe for free copy"} fill />
              <div className={"flex flex-col items-center gap-2"}>
                <div className={"flex gap-3"}>
                  <label>Email address</label>
                  <input type={"email"} className={"bg-transparent font-light focus:outline-none"} placeholder={"Your email address"} />
                </div>
                <Image width={138} height={77} src={"/images/buttons/sign_up.webp"} alt={"Sign Up"} />
              </div>

              <p className={"text-sm font-light"}>
                Earn a chance to <span className={"font-bold"}>win a free copy of the game</span> by subscribing. Subscribe to be updated on the{" "}
                <span className={"font-bold"}>latest news</span>!
              </p>

              <div className={"flex gap-2"}>
                {SOCIALS.socials.map((el: any, index: number) => {
                  return (
                    <a
                      key={index}
                      className={"flex items-center justify-center transition-all hover:opacity-80"}
                      href={el.url}
                      target={"_blank"}
                      rel={"noreferrer"}
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

      <section className={"container mx-auto mt-16 flex flex-col items-center gap-6 px-6 text-center"}>
        <Image src="/images/frontpage/infographics.webp" alt={"Infographic"} fill />

        <h2 className={"text-5xl font-bold"}>SILVER COIN: Age of Monster Hunters</h2>

        <ListBody>
          Set in the fantasy realm of Atosia, <strong>Silver Coin: Age of Monster Hunters</strong> will make sure to take you on a journey like no other.
        </ListBody>

        <ListBody>
          Combining a <strong>true adventure like feeling with strong eurogames mechanics, Silver Coin: Age of Monster Hunters</strong> offers a unique gaming
          experience. Bid for your character, starting location and initial resources, while putting your Victory Points on the line. Now you are ready to start
          your journey.
        </ListBody>

        <ListBody>
          Set off and keep your eyes on the contracts offered by the various kingdoms. Plan carefully and prepare, as
          <span>over 30 monsters you may face will each offer different challenges and get stronger depending on when and where you will face them</span>. Come
          unprepared and you may face difficulties, prepare for too long and precious time will be lost.
        </ListBody>
      </section>

      <section className={"container mx-auto my-6 px-6"}>
        <Image src="/images/frontpage/naslovna_slika_igre.webp" alt={"Game art"} fill />
      </section>

      <hr className={"container mx-auto px-6"} />

      <section className={"container mx-auto my-6 flex flex-col items-center justify-center gap-6 px-6 md:flex-row"}>
        <Image className={"w-full max-w-xl"} src="/images/frontpage/welcome.webp" alt={"Welcome"} fill />

        <div className={"flex flex-col items-center gap-4 text-center"}>
          <h2 className={"mb-6 text-5xl font-bold"}>WHY BACK NOW</h2>

          <ListTitle>1. Kickstarter exclusive content!</ListTitle>
          <ListBody>Retail version and Kickstarter version will differ a lot, so make sure you get all the exclusive content.</ListBody>

          <ListTitle>2. Crowdfunding exclusive add-ons!</ListTitle>
          <ListBody>Add-ons will only be available to buy in a crowdfunding campaign.</ListBody>

          <ListTitle>3. Help this project come to life!</ListTitle>
          <ListBody>
            We are first time creators that have been working on this game every day for more than 4 years. The only way it can get on the shelves and see the
            light of day is to help us get funded. Thank you!
          </ListBody>

          <ListTitle>4. Kickstarter exclusive price!</ListTitle>
          <ListBody>Both pledges will be offered at a reduced price.</ListBody>

          <ListTitle>5. Help shape the game!</ListTitle>
          <ListBody>
            Receive all the stretch goals for free! The more backers we get, the more content we can unlock through the stretch goals and social goals.
          </ListBody>

          <ListTitle>6. Potential expansions!</ListTitle>
          <ListBody>
            The bigger the community will be and the the better the response, the bigger potential we have for creating further content for this game
            (expansions, fan made scenarios, custom monsters and more)!
          </ListBody>
        </div>
      </section>

      <hr className={"container mx-auto px-6"} />

      <section className={"my-6 flex flex-col items-center gap-6 px-6"}>
        <h2 className={"mb-6 text-5xl font-bold"}>How to play</h2>

        <iframe
          className={"container mx-auto aspect-video w-full"}
          src="https://www.youtube.com/embed/5XEDSREG7TQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section className={"mt-24 flex flex-col items-center gap-6 px-6"}>
        <a href={"/playtest"}>
          <Image src="/images/buttons/want_to_playtest.webp" alt={"Want to playtest?"} fill />
        </a>
        <a href={"/#"}>
          <Image src="/images/buttons/sign_up_newsletter.webp" alt={"Sign up for newsletter"} fill />
        </a>
      </section>
    </>
  )
}
