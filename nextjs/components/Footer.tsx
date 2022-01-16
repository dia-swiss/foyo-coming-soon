import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <div>
            <div className="hidden sm:flex h-32 justify-center items-center gap-12" style={{ backgroundColor: '#E5E5E5' }}>
                <Link href='/'><a>Home</a></Link>
                <Link href='/faq'><a>FAQ</a></Link>
                <Link href='/contact'><a>Kontakt</a></Link>
            </div>
            <div className='flex sm:hidden h-72 justify-center items-center' style={{ backgroundColor: '#4B4B4B' }}>
                <div className="flex gap-8 justify-center items-center">
                    <Logo color='#fff' width={100} />
                    <div className="flex flex-col gap-4 text-white">
                        <Link href='/'><a>Home</a></Link>
                        <Link href='/faq'><a>FAQ</a></Link>
                        <Link href='/contact'><a>Kontakt</a></Link>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Footer;