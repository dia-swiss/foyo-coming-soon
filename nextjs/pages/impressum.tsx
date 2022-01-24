import type { NextPage } from 'next'

const Impressum: NextPage = () => {
    return <div className='max-w-4xl'>
        <div className='font-semibold text-xl py-2'>Kontakt-Adresse</div>
        <div>Data Intelligence Agency GmbH</div>
        <div>Gellerststrasse 24</div>
        <div>4052 Basel</div>
        <div>Schweiz</div>
        <br />
        <div>E-Mail:</div>
        <div>dominik.gebhardt@dia.swiss</div>
        <br />
        <div className='font-semibold text-xl py-2'>Vertretungsberechtigte Person(en)</div>
        <div>Dominik Gebhardt, Geschäftsführer</div>
        <br />
        <div className='font-semibold text-xl py-2'>Handelsregister-Eintrag</div>
        <div>Eingetragener Firmenname:</div>
        <div className='font-bold'>Data Intelligence Agency</div>
        <br />
        <div>Unternehmens-Nr (UID):</div>
        <div className='font-bold'>CHE-182.463.677</div>
        <br />
        <div>Mehrwertsteuer-Nummer:</div>
        <div className='font-bold'>CHE-182.463.677 MWST</div>
        <br />
        <div>Inhaltlich Verantwortlicher:</div>
        <div className='font-bold'>Andy Müller</div>
        <br />
        <div className='font-semibold text-xl py-2'>Haftungsausschluss</div>
        <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</p>
        <p>Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>
        <p>Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
        <br />
        <div className='font-semibold text-xl py-2'>Haftungsausschluss für Links</div>
        <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.</p>
        <br />
        <div className='font-semibold text-xl py-2'>Urheberrechte</div>
        <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich der Firma Data Intelligence Agency oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.</p>
        <br />
        <br />
        <div className='pb-10'>Quelle: <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a></div>
    </div>
}

export default Impressum;