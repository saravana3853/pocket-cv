import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../index.css";

const NavMenu = () => { 

return (

<div
                className=
                    "flex flex-row-reverse bg-amber-800 text-white
                      w-full absolute left-0 z-10" >
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="p-4 hover:bg-gray-700 cursor-pointer"
                     >
                    Home
                </Link>
                <Link
                    to="work"
                    smooth={true}
                    duration={500}
                    className="p-4 hover:bg-gray-700 cursor-pointer"
                     >
                    Work
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="p-4 hover:bg-gray-700 cursor-pointer"
                     >
                    Contact
                </Link>
                <Link
                    to="summary"
                    smooth={true}
                    duration={500}
                    className="p-4 hover:bg-gray-700 cursor-pointer"
                     >
                    Summary
                </Link>
            </div>

);

}
export default NavMenu;
