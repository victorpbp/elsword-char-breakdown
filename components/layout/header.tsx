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
            <button onClick={toggleMenu}
            className={`
                flex flex-col items-center min-h-6 px-5 ${isOpen ? 'gap-0 py-4' : 'gap-1 py-3'}
                fixed right-10 bottom-20 z-50
                rounded-lg border-4
                transition-colors duration-400
                ${isOpen ? "bg-zinc-700 border-zinc-900" : "bg-zinc-900 border-zinc-700"}
                sm:hidden
            `}>

                {
                //Make it turn into an X when open
                }

                <div className={`w-4 h-0.5 bg-zinc-300 transition-all duration-300 ${isOpen ? "-rotate-45 absolute" : ""}`} />
                <div className={`w-4 h-0.5 bg-zinc-300 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <div className={`w-4 h-0.5 bg-zinc-300 transition-all duration-300 ${isOpen ? "rotate-45 absolute" : ""}`} />                    

            </button>
            {isOpen && (<>
                <div className="fixed bottom-0 w-screen z-40 flex justify-center items-center">
                    <div className="bg-zinc-600 p-5 w-full h-fit content-center">
                        <div className="flex flex-col justify-center">
                            <HeaderItem title={"Home"} icon={homeIcon} linkto="/" closeMenu={toggleMenu}/>
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
                    <HeaderItem title={"Classes"} icon={classesIcon} linkto="/classes" />
                    <HeaderItem title={"Party Syn"} icon={partySynIcon} linkto="/party_syn"/>
                    <HeaderItem title={"Raids"} icon={null} linkto="/raids"/>
                    </div>
            </nav>

        </>
    )



}
