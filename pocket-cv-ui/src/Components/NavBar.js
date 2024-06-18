// Navbar.js

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../index.css";
import NavMenu from "./NavMenu";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const enableMenuClick = () => {
        setShowMenu(true);
    };
    const disableMenuClick = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 33) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 z-50 w-full h-[70px] 
                        flex justify-between items-center px-4 
                        text-black ${isScrolled ? "bg-white" : "bg-transparent"
                }`} 
                onMouseEnter={enableMenuClick}
                onMouseLeave={disableMenuClick}  
             >
              {(showMenu || isScrolled)  && <NavMenu/>}
            </div>
     );
};

export default Navbar;


