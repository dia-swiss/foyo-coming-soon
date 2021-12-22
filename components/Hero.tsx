import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div>
        <Image
          priority={true}
          src="/hero.jpg"
          layout='fill'
        />
      </div>
      <div className="flex flex-col relative min-h-screen justify-center text-center">
        <p className="font-bold py-10 text-5xl text-white border-b-2 border-white">qoyo.io</p>
        <h1 className="text-2xl text-white py-5">In 15min zur digitalen Marketingstrategie fur KMU, Selbständige und Startups</h1>
        <p className="text-white py-2">Aktuell ist qoyo.io im Aufbau. Sobald das Marketing-Tool zur Verfügung steht (voraussichtlich im März 2022), können Sie einfach und schnell über das Beantworten von ca. 30 Fragen erfahren, WARUM Sie WAS im digitalen Marketing machen müssen, um neue Kunden zu gewinnen. </p>
        <h2 className="text-white pt-5">Up do date bleiben:</h2>
        <div className="py-5">
          <a className="bg-white rounded p-2" href="http://eepurl.com/hQHjoL">Jetzt für Newsletter anmelden</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;