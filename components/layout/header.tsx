'use client';

import HeaderItem from "./headerItem/headerItem"
import kofiLogo from "../../app/public/kofi_symbol.png"
import React, { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        //Need to make a mobile version, a hamburger menu, of this

        // The mobile version should be a hamburger menu, which when clicked, opens a menu with the same items
        // The menu should be a vertical list of items, with the same icons and titles as the desktop version
        // The menu should be a full screen overlay, with a darkish background and the items in white
        // The menu should be closed when the user clicks outside of it, or on the close button
        // The menu should be opened when the user clicks on the hamburger icon
        // The hamburger icon should be a 3 line icon, which when clicked, opens the menu
        <>
            
            <div className="flex justify-between items-center bg-zinc-900 w-full h-12 px-5 text-sm
            sm:hidden
            ">
                <button onClick={toggleMenu} className="
                    font-bold text-xl text-zinc-300
                ">
                    {/* Hamburger icon */}
                    Menu
                </button>
            </div>
            {isOpen && (<>
                <div className="fixed w-screen z-50 flex justify-center items-center">
                    <div className="bg-zinc-600 p-5 w-full h-fit content-center">
                        <div className="flex flex-col justify-center">
                            <HeaderItem title={"Home"} icon={kofiLogo} linkto="/" closeMenu={toggleMenu}/>
                            <HeaderItem title={"Glossary"} icon={null} linkto="/glossary" closeMenu={toggleMenu}/>
                            <HeaderItem title={"Classes"} icon={null} linkto="/classes" closeMenu={toggleMenu}/>
                            <HeaderItem title={"Playstyle"} icon={null} linkto="/playstyle" closeMenu={toggleMenu}/>
                        </div>
                    </div>
                </div>
                <button onClick={toggleMenu} className="fixed z-0 w-full h-full bg-black opacity-50" />
                </>
                
            )}


            {/* Desktop version */}
            <nav className="bg-zinc-900 w-full justify-center border-b border-b-foreground/10 h-12 hidden
            sm:flex
            ">
                <div className="w-full max-w-5xl flex justify-center gap-2 items-center p-3 px-5 text-sm
                ">
                    <HeaderItem title={"Home"} icon={kofiLogo} linkto="/" />
                    <HeaderItem title={"Glossary"} icon={null} linkto="/glossary" />
                    <HeaderItem title={"Classes"} icon={null} linkto="/classes" />
                    <HeaderItem title={"Playstyle"} icon={null} linkto="/playstyle" />
                </div>
            </nav>

        </>
    )



}
