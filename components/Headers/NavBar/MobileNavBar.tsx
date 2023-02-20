// imports
import React, { useContext, useEffect } from "react";
import { navRoutes } from "../../../helpers/navRoutes";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import AppticLogo from "/src/assets/logo/logo.png";
import { AuthContext } from "../../../src/contexts/authContext";
import getLoginUrl from "../../../helpers/getLoginUrl";

// icons
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { RiUser5Line } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";

// mobile nav bar
const MobileScreenNav = () => {
    const [isOpen, toggleNav] = useState(false);
    const { accessToken, user } = useContext(AuthContext);
    // classes
    const ActiveCss = "bg-dark-blurple p-1 rounded-md px-2 font-semibold";
    const nonActiveCss = "hover:bg-ancent-black p-1 rounded-md px-2";
    
    
    return (
        <nav className="w-full container py-4 h11 mx-auto md:hidden flex items-center justify-center">
            <div className="flex justify-between px-4 w-full">
                {/* Branding */}
                <NavLogo hidden={isOpen} />
                {/* Links */}
                <div className="flex items-center">
                    <button
                        onClick={() => {
                            toggleNav(true);
                        }}
                        className="text-2xl"
                    >
                        <CgMenuRight />
                    </button>

                    {/* Side Bar */}
                    {isOpen ? (
                        <motion.aside
                            initial={{ width: 0 }}
                            animate={{ width: "90%" }}
                            className="overflow-scroll fixed z-10 bg-dark-black shadow-md shadow-dark-black top-0 right-0 h-screen p-6"
                        >
                            {/* Branding */}
                            <div className="mt-3 flex items-center w-full justify-between">
                                <div className="flex gap-2 items-center">
                                    <img
                                        src={AppticLogo}
                                        className="rounded-full w-8 h-8 border-2 border-dark-blurple"
                                        alt={"Logo"}
                                    />
                                    <h1 className="font-bold text-xl">
                                        Apptic
                                    </h1>
                                </div>
                                <button
                                    onClick={() => {
                                        toggleNav(false);
                                    }}
                                    className="text-xl"
                                >
                                    <AiOutlineClose />
                                </button>
                            </div>
                            <ul className="mt-6 flex flex-col gap-3">
                                {navRoutes.map((route, index) => {
                                    return (
                                        <NavLink
                                            onClick={() => {
                                                isOpen
                                                    ? toggleNav(false)
                                                    : null;
                                            }}
                                            to={route.path}
                                            key={index}
                                            className={(navData) =>
                                                navData.isActive
                                                    ? ActiveCss
                                                    : nonActiveCss
                                            }
                                        >
                                            {route.name}
                                        </NavLink>
                                    );
                                })}
                            </ul>

                            {/* Login And Avatar */}
                            <div className="flex w-full">
                                {accessToken && user ? (
                                    <Profile />
                                ) : (
                                    <LoginButton />
                                )}
                            </div>
                        </motion.aside>
                    ) : null}
                </div>
            </div>
        </nav>
    );
};

// login button
const LoginButton = () => {
    return (
        <div
            onClick={() => {
                window.location.assign(getLoginUrl());
            }}
            typeof="button"
            className="mt-6 w-full"
        >
            <div className="px-4 py-2 gap-2 bg-light-blurple rounded-md hover:bg-dark-blurple hover:opacity-95 transition-all duration-300 flex items-center justify-center hover:shadow-sm hover:shadow-dark-purple hover:scale-110 select-none">
                <div className="text-xl">
                    <FaDiscord />
                </div>
                <strong className="font-semibold">Login</strong>
            </div>
        </div>
    );
};

// profile dropdown
const Profile = () => {
    const [isOpen, toggleProfile] = useState(false);
    const hoverLinks = "hover:scale-110 transation-all duration-100";
    return (
        <div className="relative mx-auto">
            <button
                className="relative mt-5 text-lg px-4 py-3 rounded-md flex items-center gap-2 font-Kanit"
                onClick={() => toggleProfile(!isOpen)}
            >
                {/* user pfp and name  */}
                <img
                    className="rounded-full w-8 h-8 border border-light-blurple"
                    alt={"User profile pic"}
                    src="/logo.png"
                />
                <p className="font-medium">AppticUser#6696</p>
                <AiFillCaretDown
                    className={`${isOpen ? null : "rotate-180"
                        } transition-all ease-in-out delay-50`}
                />
            </button>

            {isOpen ? (
                <ul className="absolute bg-dark-black shadow-lg flex flex-col items-start px-3 py-2 w-full gap-2 delay-50 transition-all ease-in rounded-lg text-center text-md">
                    <li>
                        <NavLink
                            to={"/profile"}
                            className={`${hoverLinks} flex items-center gap-2 justify-center`}
                        >
                            <RiUser5Line className="text-white scale-105" />
                            Your Profile
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={"/dashboard"}
                            className={`${hoverLinks} flex items-center gap-2 justify-center`}
                        >
                            <RxDashboard className="text-white scale-105" />
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={"/logout"}
                            className={`${hoverLinks} flex items-center gap-2 justify-center text-red-700 `}
                        >
                            <BiLogOutCircle className="scale-105" />
                            Logout?
                        </NavLink>
                    </li>
                </ul>
            ) : null}
        </div>
    );
};


type NavLogoProps = {
    hidden: boolean;
}

const NavLogo = ({ hidden }: NavLogoProps) => {
    if (hidden) {
        return (
            <div className="flex items-center opacity-0">
                {/* <h1 className="font-bold text-xl">Apptic</h1> */}
                <img src={AppticLogo} width={70} height={70} alt={"Logo"} />
            </div>
        )
    } else {

        return (
            <NavLink to={'/'} className="flex items-center">
                {/* <h1 className="font-bold text-xl">Apptic</h1> */}
                <img src={AppticLogo} width={70} height={70} alt={"Logo"} />
            </NavLink>
        )
    }

}
// export
export default MobileScreenNav;
