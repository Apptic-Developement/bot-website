import React from 'react';
import { Link } from 'react-router-dom';


const FooterSection = () => {
    return (
        <footer className="p-4 bg-dark-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 mt-5">
            <span className="text-sm text-gray-300 sm:text-center">© 2023 <Link to="/" className="hover:underline">Apptic</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-300 sm:mt-0">
                <li>
                    <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link to="/policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/invite" className="mr-4 hover:underline md:mr-6">Invite</Link>
                </li>
                <li>
                    <Link to="/support" className="hover:underline">Support Server</Link>
                </li>
            </ul>
        </footer>


    )
}

export default FooterSection;