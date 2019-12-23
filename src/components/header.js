import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import logo from "../images/rentronics_logo2.png";

import Button from '../components/ui/button';

function Header({ siteTitle, setShowLoginPage }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white bg-white shadow">

      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

        <div className="pl-4 flex items-center">
          <a className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800" href="/">
            <img src={logo} className="logo" alt="rentronics" />
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button id="nav-toggle"
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Home</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="/product">Shop</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Blog</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Contact</a>
            </li>
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">FAQ</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
          </ul>
          <Button text="Login" onClickFn={() => setShowLoginPage(true)} />
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    // <nav className="bg-teal-700">
    //   <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
    //     <Link to="/" className="flex items-center no-underline text-white">
    //       <svg
    //         className="fill-current h-8 mr-2 w-8"
    //         width="54"
    //         height="54"
    //         viewBox="0 0 54 54"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
    //       </svg>
    //       <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
    //     </Link>

    //     <button
    //       className="block md border border-white flex items-center px-3 py-2 rounded text-white"
    //       onClick={() => toggleExpansion(!isExpanded)}
    //     >
    //       <svg
    //         className="fill-current h-3 w-3"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Menu</title>
    //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //       </svg>
    //     </button>

    //     <div
    //       className={`${
    //         isExpanded ? `block` : `hidden`
    //         } md:block md:flex md:items-center w-full md:w-auto`}
    //     >
    //       <div className="text-sm">
    //         <Link
    //           to="/"
    //           className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
    //         >
    //           Home
    //         </Link>

    //         <Link
    //           to="/about"
    //           className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
    //         >
    //           About
    //         </Link>

    //         <Link
    //           to="/contact"
    //           className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
    //         >
    //           Contact
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
