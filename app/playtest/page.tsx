import { PageHeader } from '../../components/PageHeader'
import { ListTitle } from '../../components/frontpage/ListTitle'
import { ListBody } from '../../components/frontpage/ListBody'
import Image from 'next/image'

import steam from '../../public/images/playtest/tabletopia_steam.webp'
import browser from '../../public/images/playtest/tabletopia_browser.webp'
import playtest from '../../public/images/buttons/want_to_playtest.webp'
import learn from '../../public/images/playtest/learn.webp'

const Playtest = () => {
  return (
    <>
      <PageHeader title={'Playtest'} />
      <title>Playtest</title>

      <section className={'container mx-auto px-6 flex flex-col gap-6'}>
        <ListTitle>HOW TO PLAYTEST?</ListTitle>

        <ListBody>
          <strong>Silver Coin: Age of Monster Hunters</strong> is being playtested via <strong>Tabletopia</strong>. So
          what is Tabletopia?
        </ListBody>

        <ListBody>
          <strong>TABLETOPIA</strong> is an online board gaming platform, where people can <strong>play</strong> their
          favorite <strong>table top games online</strong>.
        </ListBody>

        <ListBody>
          It is completely free and very simple to use and download. You can access it in one of 2 ways.
        </ListBody>

        <ListTitle>VIA STEAM</ListTitle>

        <ListBody>
          You only need to download steam (or open the application if you already have it). Search for Tabletopia under
          the tab STORE. And click green button Play Game.
        </ListBody>

        <Image src={steam} alt={'Steam'} />

        <ListTitle>VIA BROWSER</ListTitle>

        <ListBody>
          You only need to type Tabletopia in the google search bar and click on the first link. You are ready to play!
        </ListBody>

        <Image src={browser} alt={'Browser'} />

        <ListBody>
          You would be playtesting either in <strong>solo mode</strong>, <strong>cooperative mode</strong> or{' '}
          <strong>competitive mode</strong>, which is designed for 2-5 players.
        </ListBody>

        <ListBody>
          You can play with your own group, which would allow you more flexibility, since you can do it on your own
          accord when it suits you.
        </ListBody>

        <ListBody>
          Otherwise, a group can be organized to play with with people in our community. For that it is best to join our
          Discord server.
        </ListBody>

        <a href={'https://discord.com/invite/MDxUced'} className={'self-center'}>
          <Image src={playtest} alt={'Playtest'} />
        </a>

        <ListBody>
          To learn the game, read the rulebook or watch the how to play video. You can find both under the Learn tab.
        </ListBody>

        <a href={'/learn'} className={'self-center'}>
          <Image src={learn} alt={'Learn'} />
        </a>

        <ListBody>
          The things we are looking for in the playtest are your general impressions and balance of the game. Hence you
          would tell us:
        </ListBody>

        <ul className={'list-disc pl-6'}>
          <li>Overall enjoyment,</li>

          <li> Which parts of the game you enjoyed</li>

          <li>Which parts you disliked,</li>

          <li>Your suggestions to improve the game.</li>
        </ul>

        <ListBody>
          For any questions or inquiries, we are available on our email:{' '}
          <a className={'underline'} href={'mailto:silvercoinaomh@gmail.com'}>
            silvercoinaomh@gmail.com
          </a>
        </ListBody>
      </section>
    </>
  )
}

export default Playtest
