import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "./Logo";
import NewsletterLink from "./NewsletterLink";

const Navbar = () => {

    return (
        <div className='flex justify-center sm:justify-between items-center p-10 max-w-7xl mx-auto'>
            <Link href='/'><a><Logo color='#EA0065' width={100} /></a></Link>
            <div className='hidden sm:flex gap-8 items-center'>
                <Link href='/faq'><a className="font-bold">FAQ</a></Link>
                <Link href='/contact'><a className="font-bold">Kontakt</a></Link>
                <NewsletterLink />
            </div>
        </div>

    );
};

export default Navbar;