import { GiRingingBell } from "react-icons/gi";

const NewsletterLink = () => {
    return <a className="bg-qoyo-pink rounded-lg px-6 py-4 text-white font-semibold text-center tracking-widest flex gap-4 items-center" target="_blank" rel="noreferrer" href="http://eepurl.com/hQHjoL">
        <GiRingingBell size={30} />
        <div>Informiert bleiben*</div>
    </a>
};

export const AsteriskText = () => {
    return <div className='w-60 text-center text-xs'>* Wir melden uns im März 2022 bei dir, Indianer-Ehrenwort!</div>
}

export default NewsletterLink;