'use client';

import HeaderItem from "./headerItem/headerItem"
import React, { useState } from "react";
import classesIcon from "../../app/public/headers/classesIcon.png";
import homeIcon from "../../app/public/headers/homeIcon.png";
import partySynIcon from "../../app/public/headers/partySynIcon.png";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <>
            
            <div className={`flex items-center h-12 p-5
            fixed right-10 bottom-20 z-50
            rounded-lg border-4
            transition-colors duration-400
            ${isOpen ? "bg-zinc-700 border-zinc-900" : "bg-zinc-900 border-zinc-700"}
            sm:hidden
            `}>
                <button onClick={toggleMenu} className="
                    font-bold text-xl text-zinc-300 w-4
                ">
                    {/* Hamburger icon */}
                    {isOpen ? "X" : "M"}
                </button>
            </div>
            {isOpen && (<>
                <div className="fixed bottom-0 w-screen z-40 flex justify-center items-center">
                    <div className="bg-zinc-600 p-5 w-full h-fit content-center">
                        <div className="flex flex-col justify-center">
                            <HeaderItem title={"Home"} icon={homeIcon} linkto="/" closeMenu={toggleMenu}/>
                            <HeaderItem title={"Glossary"} icon={null} linkto="/glossary" closeMenu={toggleMenu}/>
                            <HeaderItem title={"Classes"} icon={classesIcon} linkto="/classes" closeMenu={toggleMenu}/>
                            <HeaderItem title={"Party Syn"} icon={partySynIcon} linkto="/party_syn" closeMenu={toggleMenu}/>
                            <HeaderItem title={"Raids"} icon={null} linkto="/raids" closeMenu={toggleMenu}/>
                        </div>
                    </div>
                </div>
                <button onClick={toggleMenu} className="fixed z-0 w-full h-full bg-black opacity-50" />
            </>
                
            )}


            {/* Desktop version */}
            <nav className="bg-zinc-900 w-full justify-center border-b border-b-foreground/10 h-12 hidden
            position: sticky top-0 z-50
            sm:flex
            ">
                <div className="w-full max-w-5xl flex justify-center gap-2 items-center p-3 px-5 text-sm
                ">
                    <HeaderItem title={"Home"} icon={homeIcon} linkto="/" />
                    <HeaderItem title={"Glossary"} icon={null} linkto="/glossary" />
                    <HeaderItem title={"Classes"} icon={classesIcon} linkto="/classes" />
                    <HeaderItem title={"Party Syn"} icon={partySynIcon} linkto="/party_syn" closeMenu={toggleMenu}/>
                    <HeaderItem title={"Raids"} icon={null} linkto="/raids" closeMenu={toggleMenu}/>
                    </div>
            </nav>

        </>
    )



}
