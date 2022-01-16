import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Impressum from './impressum';
import Image from 'next/image';
import NewsletterLink, { AsteriskText } from '../components/NewsletterLink';



const Home: NextPage = () => {
  return (
    <>
      <div className='sm:flex sm:justify-between'>
        <div className='sm:max-w-md'>
          <div className='text-5xl font-extrabold text-center sm:text-left sm:pt-10' style={{ lineHeight: '3.5rem' }}>
            <span>1 Digitales Marketing</span><span className='text-qoyo-pink'> mit allem, bitzli<br /> scharf</span>
          </div>
          <div className='text-xl font-medium text-center leading-9 sm:text-left pt-8 max-w-sm mx-auto sm:mx-0' style={{ color: '#4B4B4B' }}>
            In 15 Minuten zur digitalen Marketing&shy;strategie für KMU, Selbständige und Startups.
          </div>
        </div>
        <div className='hidden md:flex items-center'>
          <Image
            priority={true}
            src="/marketing_robot.png"
            alt="Marketing robot"
            width={600}
            height={502}
            layout='intrinsic'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center sm:hidden'>
        <NewsletterLink />
        <AsteriskText />
      </div>
      <div className='text-4xl font-bold text-center py-12'>
        Wie funktioniert QOYO?
      </div>

      <div className='flex gap-12 justify-center pb-12 '>
        <div className='flex flex-col gap-4 w-72 items-center'>
          <Image
            priority={true}
            src="/teaser_1.png"
            alt="Marketing robot"
            width={190}
            height={173}
            layout='fixed'
          />
          <div className='text-center text-xl font-bold'>
            Unsere KI kennt sich aus
          </div>
          <div className='text-center text-base'>
            Im Hintergrund drehen sich viele Zahnräder für die bestmögliche Variante
          </div>
        </div>
        <div className='hidden md:flex flex-col gap-4 w-72 items-center'>
          <Image
            priority={true}
            src="/teaser_2.png"
            alt="Marketing robot"
            width={190}
            height={173}
            layout='fixed'
          />
          <div className='text-center text-xl font-bold'>
            Entfalte Deine Power
          </div>
          <div className='text-center text-base'>
            Aus unzähligen Variationen entsteht eine massgeschneiderte Lösung.
          </div>
        </div>
        <div className='hidden lg:flex flex-col gap-4 w-72 items-center'>
          <Image
            priority={true}
            src="/teaser_3.png"
            alt="Marketing robot"
            width={190}
            height={173}
            layout='fixed'
          />
          <div className='text-center text-xl font-bold'>
            Es ist keine Wissenschaft
          </div>
          <div className='text-center text-base'>
            Sondern eine nachhaltige und langfristige Marketingstrategie für dein Unternehmen.
          </div>
        </div>
      </div>
      <div className='hidden sm:block'>
        <div className='text-4xl text-center pb-12 font-bold'>
          Möchtest Du als Erster wissen, wohin das Abenteuer mit QOYO geht?
        </div>
        <div className='hidden sm:flex justify-center items-center flex-col gap-2 mb-6'>
          <NewsletterLink />
          <AsteriskText />
        </div>
      </div>
    </>
  )
}

export default Home
