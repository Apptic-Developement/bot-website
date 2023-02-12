// MobileNavBar
"use client";
import { navRoutes } from "@/helpers/navRoutes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";


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
                                        <div className="px-4 py-2 gap-2 bg-light-blurple rounded-md hover:bg-dark-blurple hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                                            <div className="text-xl">
                                                <FaDiscord/>
                                            </div>
                                            <button onClick={() => {alert('Not Implimented!')}} className='font-semibold'>
                                                Login
                                            </button>
                                        </div>

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

export default MobileScreenNav;