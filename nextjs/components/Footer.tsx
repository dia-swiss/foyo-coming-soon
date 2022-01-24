import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <div className="bg-qoyo-gray w-full flex items-center justify-center">
            <div className="hidden sm:flex justify-between items-center px-20 py-10 w-full max-w-7xl">
                <a href='mailto:qoyo.io.ch@gmail.com'>E-Mail</a>
                <div className="flex gap-8">
                    <Link href='/impressum'><a>Impressum</a></Link>
                    <Link href='/datenschutz'><a>Datenschutz</a></Link>
                </div>
            </div>
            <div className='flex sm:hidden h-48 justify-center items-center'>
                <div className="flex flex-col gap-4 items-center">
                    <a href='mailto:qoyo.io.ch@gmail.com'>E-Mail</a>
                    <Link href='/impressum'><a>Impressum</a></Link>
                    <Link href='/datenschutz'><a>Datenschutz</a></Link>
                </div>
            </div>
        </div>

    );
};

export default Footer;