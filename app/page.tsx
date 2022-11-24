import Image from 'next/image'

export default function Page() {
  const socialsData = require('/json/socials.json')

  return (
    <>
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
    </>
  )
}
