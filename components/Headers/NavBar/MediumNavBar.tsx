// imports
import React, { useContext } from "react";
import { navRoutes } from "../../../helpers/navRoutes";
import { useState } from "react";
import AppticLogo from "/src/assets/logo/logo.png";
import { AuthContext } from "../../../src/contexts/authContext";
import config from "../../../config.json";
import { NavLink } from "react-router-dom";
import getLoginUrl from "../../../helpers/getLoginUrl";

// icons
import { AiFillCaretDown } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { RiUser5Line } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";

// nav bar for medium and bigger screens
const MediumNavBar = () => {
    // classes
    const ActiveCss = `font-semibold  border-b-transparent !border-light-blurple !border-b-4 duration-300 transation-all hover:text-gray-300`;
    const nonActiveCss = `font-medium border-b-4 border-light-black duration-300 transation-all hover-underline-animation hover:text-gray-300`;
    const { accessToken, user } = useContext(AuthContext);
    return (
        <>
            <nav className="w-full container py-4 h11 mx-auto md:flex hidden items-center justify-center">
                <div className="flex justify-between items-center px-4 w-full my-auto">
                    {/* Left Content */}
                    <div className="flex gap-5 items-center">
                        {/* Branding */}
                        <div className="flex items-center justify-center">
                            <img
                                src={AppticLogo}
                                width={70}
                                height={70}
                                alt={"Logo"}
                            />
                            <h1 className="font-bold text-2xl hidden">
                                Apptic
                            </h1>
                        </div>

                        {/* Links */}
                        <ul className="flex gap-3 text-gray-500">
                            {navRoutes.map((route, index) => {
                                return (
                                    <NavLink
                                        to={route.path}
                                        className={(navData) =>
                                            navData.isActive
                                                ? ActiveCss
                                                : nonActiveCss
                                        }
                                        key={index}
                                    >
                                        {route.name}
                                    </NavLink>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Right Content */}
                    {accessToken && user ? (
                        <Profile />
                    ) : (
                        <LoginButton />
                    )}
                </div>
            </nav>
        </>
    );
};

// login button
const LoginButton = () => {
    return (
        <div
            onClick={() => {
                window.location.href = getLoginUrl();
            }}
            className="px-4 py-2 gap-2 bg-light-blurple rounded-md hover:bg-dark-blurple transition-all duration-300 flex items-center justify-center cursor-pointer hover:shadow-sm hover:shadow-dark-purple hover:scale-110"
        >
            <div className="text-xl">
                <FaDiscord />
            </div>
            <strong className="font-semibold">Login</strong>
        </div>
    );
};

// profile dropdown
const Profile = () => {
    const [isOpen, toggleProfile] = useState(false);
    const hoverLinks = "hover:scale-110 transation-all duration-200";
    const { user } = useContext(AuthContext);
    return (
        <div className="relative">
            <button
                className="relative  px-4 py-3 rounded-md flex items-center gap-2 font-Kanit"
                onClick={() => toggleProfile(!isOpen)}
            >
                <p className="font-semibold">
                    {user?.username}#{user?.discriminator}
                </p>
                <AiFillCaretDown
                    className={`${
                        isOpen ? null : "rotate-180"
                    } transition-all ease-in-out delay-50`}
                />
            </button>

            {isOpen ? (
                <ul className="absolute bg-dark-black shadow-lg flex flex-col items-start px-3 py-2 w-full gap-2 delay-50 transition-all ease-in rounded-lg">
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

// export
export default MediumNavBar;
