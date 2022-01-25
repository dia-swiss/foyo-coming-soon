import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {

    return (
        <div className='flex justify-between sm:items-center p-10 max-w-7xl mx-auto'>
            <Link href='/'><a><Logo color='#EA0065' width={100} /></a></Link>
            <div className="text-qoyo-blue pl-6 text-right">*im März 2022 ist es soweit</div>
        </div>

    );
};

export default Navbar;