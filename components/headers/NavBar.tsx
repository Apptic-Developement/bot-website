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
        <div className="bg-light-black">
            <nav className="w-full container py-4 h11 mx-auto md:flex hidden items-center justify-center">

                <div className="flex justify-between items-center px-4 w-full my-auto">
                    {/* Left Content */}
                    <div className="flex gap-5 items-center">
                        {/* Branding */}
                        <div className='flex items-center justify-center'>
                            <Image src='/logo/logo.png' width={70} height={70} alt={'Logo'} />
                            {/* <h1 className="font-bold text-2xl">Apptic</h1> */}
                        </div>

                        {/* Links */}
                        <ul className='flex gap-3 text-gray-500'>
                            {
                                navRoutes.map((route, index) => {
                                    return <li
                                        className={`hover:!border-b-4 border-b-transparent hover:!border-light-blurple ${typeof window !== undefined && window.location.pathname == route.path ? '!border-light-blurple !border-b-4' : null}`}
                                        key={index}
                                    ><Link href={route.path}>{route.name}</Link></li>
                                })
                            }
                        </ul>

                    </div>



                    {/* Right Content */}
                    {/* <div className='mt-6 text-xs flex self-center justify-self-center items-center'> */}
                    <ButtonPrimary name={'Login'} callback={() => { }} icon={<FaDiscord />} />
                    {/* </div> */}
                </div>


            </nav>
        </div>


    )
}

const MobileScreenNav = () => {
    const [isOpen, toggleNav] = useState(false);


    return (
        <div className='bg-light-black'>
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
                                    animate={{ width: '90%' }} className='fixed z-10 bg-dark-black shadow-md shadow-dark-black top-0 right-0 h-screen p-6'>
                                    {/* Branding */}
                                    <div className='mt-3 flex items-center w-full justify-between'>
                                        <h1 className="font-bold text-xl">Apptic</h1>
                                        <button onClick={() => { toggleNav(false) }} className='text-xl'>
                                            <AiOutlineClose />
                                        </button>
                                    </div>
                                    <ul className='mt-6 flex flex-col gap-3'>
                                        {
                                            navRoutes.map((route, index) => {
                                                return <li
                                                    key={index}
                                                ><Link href={route.path}>{route.name}</Link></li>
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
        </div>
    )
}