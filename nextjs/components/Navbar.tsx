import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "./Logo";
import NewsletterLink from "./NewsletterLink";

const Navbar = () => {

    return (
        <div className='flex justify-between items-center p-10 max-w-7xl mx-auto'>
            <Link href='/'><a><Logo color='#EA0065' width={100} /></a></Link>
            <div className="text-qoyo-blue">*im März 2022 ist es soweit</div>
        </div>

    );
};

export default Navbar;