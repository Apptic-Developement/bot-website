"use client";

import Link from 'next/link';
import { navRoutes } from '@/helpers/navRoutes';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { ButtonPrimary } from '@/components/Buttons';
import { FaDiscord } from 'react-icons/fa';

const NavBar = () => {
    return (
        <>
            <MediumScreenNav />
            <MobileScreenNav />
        </>

    )
}
export default NavBar;

const MediumScreenNav = () => {
    return (
        <nav className="w-full container py-4 h11 mx-auto md:flex hidden items-center justify-center">

            <div className="flex justify-between items-center px-4 w-full">
                {/* Left Content */}
                <div className="flex gap-5 items-center">
                    {/* Branding */}
                    <div>
                        <h1 className="font-bold text-2xl">Apptic</h1>
                    </div>

                    {/* Links */}
                    <ul className='flex gap-3'>
                        {
                            navRoutes.map((route, index) => {
                                return <li key={index}><Link href={route.path}>{route.name}</Link></li>
                            })
                        }
                    </ul>
                </div>



                {/* Right Content */}
                <div className='mt-6 text-xs flex self-center justify-self-center items-center'>
                    <ButtonPrimary name={'Login with discord'} callback={() => { }} icon={<FaDiscord />} />

                </div>
            </div>

        </nav>
    )
}

const MobileScreenNav = () => {
    const [isOpen, toggleNav] = useState(true);


    return (
        <nav className="w-full container py-4 h11 mx-auto md:hidden flex items-center justify-center">

            <div className="flex justify-between px-4 w-full">
                {/* Branding */}
                <div className='flex items-center'>
                    {/* <h1 className="font-bold text-xl">Apptic</h1> */}
                    <Image src='/logo/logo.png' width={70} height={70} alt={'Logo'} />
                </div>

                {/* Links */}
                <div className='flex items-center'>
                    <button onClick={() => { toggleNav(true) }} className='text-2xl'>
                        <CgMenuRight />
                    </button>

                    {/* Side Bar */}
                    {
                        isOpen ? (
                            <motion.aside initial={{ width: 0 }}
                                animate={{ width: 200 }} className='fixed z-10 w-52 bg-ternary top-0 right-0 h-screen p-6'>
                                {/* Branding */}
                                <div className='flex items-center w-full justify-between'>
                                    <h1 className="font-bold text-xl">Apptic</h1>
                                    <button onClick={() => { toggleNav(false) }} className='text-xl'>
                                        <AiOutlineClose />
                                    </button>
                                </div>
                                <ul className='mt-6 flex flex-col gap-3'>
                                    {
                                        navRoutes.map((route, index) => {
                                            return <li key={index}><Link href={route.path}>{route.name}</Link></li>
                                        })
                                    }
                                </ul>

                                <div className='mt-6'>
                                    <ButtonPrimary name={'Login'} callback={() => { }} icon={<FaDiscord />} />

                                </div>
                            </motion.aside>
                        )
                            : null

                    }
                </div>
            </div>
        </nav>
    )
}