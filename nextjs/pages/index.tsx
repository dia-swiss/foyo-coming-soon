import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Impressum from './impressum';
import Image from 'next/image';
import NewsletterLink, { AsteriskText } from '../components/NewsletterLink';
import Carousel from '../components/Carousel';

const Home: NextPage = () => {


  const renderTeasers = () => [{
    src: '/teaser_1.png',
    title: 'Die richtigen Fragen',
    text: 'Deine Antworten auf ca. 30 Fragen bilden die Grundlage für deinen Erfolg.'
  }, {
    src: '/teaser_2.png',
    title: 'Personalisiert und einzigartig',
    text: 'Aus unzähligen Variationen wird deine massgeschneiderte digitale Lösung generiert.'
  }, {
    src: '/teaser_3.png',
    title: 'Entwickelt mit 30+ Experten',
    text: 'Deine nachhaltige und langfristige Marketingstrategie für dein Unternehmen.'
  }].map(({ src, title, text }, idx) => {
    return <div key={idx} className='flex flex-col gap-4 items-center'>
      <Image
        priority={true}
        src={src}
        alt={''}
        width={240}
        height={240}
        layout='fixed'
      />
      <div className='text-center text-xl font-bold'>
        {title}
      </div>
      <div className='text-center text-base'>
        {text}
      </div>
    </div>
  })

  return (
    <>
      <div className='sm:flex sm:justify-between'>
        <div className='sm:max-w-md'>
          <div className='text-5xl font-extrabold text-center sm:text-left sm:pt-10' style={{ lineHeight: '3.5rem' }}>
            <span>Digitales<br />Marketing<br /></span><span className='text-qoyo-pink'>einfach einfach</span>
          </div>
          <div className='text-xl font-medium text-center leading-9 sm:text-left pt-8 max-w-sm mx-auto sm:mx-0' style={{ color: '#4B4B4B' }}>
            In 15 Minuten zur digitalen Marketing&shy;strategie für KMU, Selbständige und Startups.
          </div>
          <div className='flex sm:block py-8 justify-center'>
            <NewsletterLink />
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

      <div className='text-4xl font-bold text-center py-12'>
        Wie funktioniert QOYO?
      </div>

      <div className='block md:hidden w-72 mx-auto pb-12'>
        <Carousel>
          {renderTeasers()}
        </Carousel>
      </div>

      <div className='hidden md:flex gap-12 pb-12'>
        {renderTeasers()}
      </div>

      <div className='hidden sm:flex flex-col items-center'>
        <div className='text-4xl text-center pb-8 font-bold'>
          Möchtest du als Erster wissen,<br /> wohin das Abenteuer mit QOYO<br />  geht?
        </div>
        <div className='hidden sm:flex justify-center items-center flex-col gap-2 mb-12'>
          <NewsletterLink />
        </div>
      </div>
    </>
  )
}

export default Home



