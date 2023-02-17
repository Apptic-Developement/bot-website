import React, { useContext } from "react";
import { navRoutes } from "../../../helpers/navRoutes";
import { useState } from "react";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { FaDiscord, FaUser } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { FiServer } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import AppticLogo from '/src/assets/logo/logo.png';
import { AuthContext } from "../../../src/contexts/authContext";
import getLoginUrl from "../../../helpers/getLoginUrl";



const MobileScreenNav = () => {
    const [isOpen, toggleNav] = useState(false);
    const {accessToken, user} = useContext(AuthContext);
    const nonActiveCss = "hover:bg-ancent-black p-1 rounded-md"
    const ActiveCss = "bg-dark-blurple p-1 rounded-md"
    return (
        <nav className="w-full container py-4 h11 mx-auto md:hidden flex items-center justify-center">

            <div className="flex justify-between px-4 w-full">
                {/* Branding */}
                <div className='flex items-center'>
                    {/* <h1 className="font-bold text-xl">Apptic</h1> */}
                    <img src={AppticLogo} width={70} height={70} alt={'Logo'} />
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
                                animate={{ width: '90%' }} className='overflow-scroll fixed z-10 bg-dark-black shadow-md shadow-dark-black top-0 right-0 h-screen p-6'>
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
                                            return <NavLink
                                                onClick={() => { isOpen ? toggleNav(false) : null }}
                                                to={route.path}
                                                key={index}
                                                className={(navData) => (navData.isActive ? ActiveCss : nonActiveCss)}
                                            >{route.name}</NavLink>
                                        })
                                    }
                                </ul>

                                {/* Login And Avatar */}
                                <div className="flex w-full">
                                    {
                                        accessToken && user ? (
                                            <Profile />
                                        ) : <LoginButton />

                                    }
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

export default MobileScreenNav;


const LoginButton = () => {
    return (
        <div onClick={() => { window.location.assign(getLoginUrl())}} typeof='button' className='mt-6'>
            <div className="px-4 py-2 gap-2 bg-light-blurple rounded-md hover:bg-dark-blurple hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <div className="text-xl">
                    <FaDiscord />
                </div>
                <strong className='font-semibold'>
                    Login
                </strong>
            </div>

        </div>
    )
}

const Profile = () => {
    const [isOpen, toggleProfile] = useState(false);
    const hoverLinks = "hover:opacity-60 duration-300 transation-all"
    return (
        <div className="relative mx-auto">

            <button className="relative  px-4 py-3 rounded-md flex items-center gap-2 font-Kanit" onClick={() => toggleProfile(!isOpen)}>
                <p className="font-semibold">Pranoy#0140</p>
                <AiFillCaretDown className={`${isOpen ? null : 'rotate-180'}`} />
            </button>

            {
                isOpen ? (
                    <ul className="absolute bg-ancent-black shadow-lg flex flex-col items-start px-3 py-2 w-full gap-2">
                        <li className={`flex items-center gap-2 justify-center`}>
                            <FaUser />
                            <NavLink to={'/profile'} className={hoverLinks}>Profile</NavLink>
                        </li>
                        <li className={`flex items-center gap-2 justify-center`}>
                            <FiServer className="text-white" />
                            <NavLink to={'/'} className={hoverLinks}>Servers</NavLink>
                        </li>
                        <li className={`flex items-center gap-2 justify-center text-red-700`}>
                            <IoMdExit />
                            <NavLink to={'/logout'} className={hoverLinks}>Logout</NavLink>
                        </li>
                    </ul>
                ) : null
            }

        </div>
    )
}