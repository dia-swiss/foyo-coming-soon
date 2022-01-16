import Image from 'next/image';
import heropic from "../public/hero.jpg";

const Hero = () => (
  <div className='flex justify-center'>

    <div className='fixed h-screen w-screen overflow-hidden -z-10'>
      <Image
        priority={true}
        src={heropic}
        layout='fill'
        alt="hero"
        quality={100}
        objectFit='cover'
      />
    </div>
    <div className='h-screen max-w-7xl flex items-center'>
      <div className="flex flex-col my-auto mx-4 md:mx-20 py-30 min-h-full justify-center text-center">
        <p className="font-bold py-10 text-5xl text-black border-b-2 border-white">Qoyo</p>
        <h1 className="text-2xl text-black font-bold py-5">In 15min zur digitalen Marketingstrategie für KMU, Selbständige und Startups</h1>
        <p className="text-black py-2">Aktuell ist qoyo.io im Aufbau. Sobald das Marketing-Tool zur Verfügung steht (voraussichtlich im März 2022), können Sie einfach und schnell über das Beantworten von ca. 30 Fragen erfahren, WARUM Sie WAS im digitalen Marketing machen müssen, um neue Kunden zu gewinnen. </p>
        <h2 className="text-black pt-5">Up to date bleiben:</h2>
        <p className="text-black">Jetzt für den Newsletter anmelden, um up to date zu bleiben. Sie erfahren zuerst, wenn qoyo.io zur Verfügung steht und können das Tool nutzen, um Ihre nachhaltige und individuelle Marketingstrategie zu generieren.</p>
        <div className="py-5">
          <a className="bg-white rounded p-2" target="_blank" rel="noreferrer" href="http:eepurl.com/hQHjoL">Jetzt für Newsletter anmelden</a>
        </div>
      </div>
    </div>

  </div>
)

// const Hero = () => {
// return (

// <div className='w-10 h-10' style={{backgroundImage:"url('../public/hero.jpg')", height:'500px', backgroundSize:'cover'}}>
//  <div className="min-h-full relative min-w-full">
//   <div className='absolute'>
//     <Image
//       priority={true}
//       src="/hero.jpg"
//       layout='fill'
//       alt="hero"
//     />
//   </div>

// </div>
// <div className="flex flex-col my-auto mx-4 md:mx-20 py-30 min-h-full justify-center text-center">
//   <p className="font-bold py-10 text-5xl text-white border-b-2 border-white">qoyo.io</p>
//   <h1 className="text-2xl text-white py-5">In 15min zur digitalen Marketingstrategie für KMU, Selbständige und Startups</h1>
//   <p className="text-white py-2">Aktuell ist qoyo.io im Aufbau. Sobald das Marketing-Tool zur Verfügung steht (voraussichtlich im März 2022), können Sie einfach und schnell über das Beantworten von ca. 30 Fragen erfahren, WARUM Sie WAS im digitalen Marketing machen müssen, um neue Kunden zu gewinnen. </p>
//   <h2 className="text-white pt-5">Up to date bleiben:</h2>
//   <p className="text-white">Jetzt für den Newsletter anmelden, um up to date zu bleiben. Sie erfahren zuerst, wenn qoyo.io zur Verfügung steht und können das Tool nutzen, um Ihre nachhaltige und individuelle Marketingstrategie zu generieren.</p>
//   <div className="py-5">
//     <a className="bg-white rounded p-2" target="_blank" rel="noreferrer" href="http://eepurl.com/hQHjoL">Jetzt für Newsletter anmelden</a>
//   </div>
// </div>
// </div>
// );
// };

export default Hero;