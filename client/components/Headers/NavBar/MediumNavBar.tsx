import React from 'react';
import { navRoutes } from "../../../helpers/navRoutes";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaDiscord, FaUser } from "react-icons/fa";
import { FiServer } from 'react-icons/fi';
import { IoMdExit } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import AppticLogo from '/src/assets/logo/logo.png';



const MediumNavBar = () => {
    const ActiveCss = `hover:!border-b-4 border-b-transparent hover:!border-light-blurple !border-light-blurple !border-b-4 duration-300 transation-all`;
    const nonActiveCss = `hover:!border-b-4 border-b-transparent hover:!border-light-blurple duration-300 transation-all`;

    return (
        <>
            <nav className="w-full container py-4 h11 mx-auto md:flex hidden items-center justify-center">

                <div className="flex justify-between items-center px-4 w-full my-auto">
                    {/* Left Content */}
                    <div className="flex gap-5 items-center">
                        {/* Branding */}
                        <div className='flex items-center justify-center'>
                            <img src={AppticLogo} width={70} height={70} alt={'Logo'} />
                            {/* <h1 className="font-bold text-2xl">Apptic</h1> */}
                        </div>

                        {/* Links */}
                        <ul className='flex gap-3 text-gray-500'>
                            {
                                navRoutes.map((route, index) => {
                                    return (
                                        <NavLink
                                            to={route.path}
                                            className={(navData) => (navData.isActive ? ActiveCss : nonActiveCss)}

                                            key={index}
                                        >{route.name}
                                        </NavLink>)
                                })
                            }
                        </ul>

                    </div>



                    {/* Right Content */}
                    <LoginButton />
                    {/* <Profile /> */}

                </div>


            </nav>


        </>

    )
}

export default MediumNavBar;


const LoginButton = () => {
    return (
        <div className="px-4 py-2 gap-2 bg-light-blurple rounded-md hover:bg-dark-blurple hover:opacity-95 transition-all duration-300 flex items-center justify-center">
            <div className="text-xl">
                <FaDiscord />
            </div>
            <button onClick={() => { alert('Not Implimented!') }} className='font-semibold'>
                Login
            </button>
        </div>
    )
}
const Profile = () => {
    const [isOpen, toggleProfile] = useState(false);
    const hoverLinks = "hover:opacity-60 duration-300 transation-all"
    return (
        <div className="relative">

            <button className="relative  px-4 py-3 rounded-md flex items-center gap-2 font-Kanit" onClick={() => toggleProfile(!isOpen)}>
                <p className="font-semibold">Pranoy#0140</p>
                <AiFillCaretDown className={`${isOpen ? null : 'rotate-180'}`} />
            </button>

            {
                isOpen ? (
                    <ul className="absolute bg-ancent-black shadow-lg flex flex-col items-start px-3 py-2 w-full gap-2">
                        <li className={`flex items-center gap-2 justify-center`}>
                            <FaUser />
                            <NavLink to={'/'} className={hoverLinks}>Profile</NavLink>
                        </li>
                        <li className={`flex items-center gap-2 justify-center`}>
                            <FiServer className="text-white" />
                            <NavLink to={'/'} className={hoverLinks}>Servers</NavLink>
                        </li>
                        <li className={`flex items-center gap-2 justify-center text-red-700`}>
                            <IoMdExit />
                            <NavLink to={'/'} className={hoverLinks}>Logout</NavLink>
                        </li>
                    </ul>
                ) : null
            }

        </div>
    )
}