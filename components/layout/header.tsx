'use client';

import HeaderItem from "./headerItem/headerItem"
import React from "react";

import classesIcon from "../../app/public/headers/classesIcon.png";
import homeIcon from "../../app/public/headers/homeIcon.png";
import partySynIcon from "../../app/public/headers/partySynIcon.png";

import { useMobileMenu } from "@/contexts/mobileMenu/mobileMenuContext";
import { useOverlayControl } from "@/contexts/overlayControl";

export default function Header() {

    const { openOverlay, closeOverlay } = useOverlayControl();
    const { isOpenMenu } = useMobileMenu();

    return (
        <>
            <button onClick={isOpenMenu ? ()=>closeOverlay() : ()=>openOverlay('mobileMenu')}
            className={`
                flex flex-col items-center min-h-6 px-5 ${isOpenMenu ? 'gap-0 py-4' : 'gap-1 py-3'}
                fixed right-10 bottom-20 z-50
                rounded-lg border-4
                transition-colors duration-400
                ${isOpenMenu ? "bg-zinc-700 border-zinc-900" : "bg-zinc-900 border-zinc-700"}
                md:hidden
            `}>
                <div className={`w-4 h-0.5 bg-zinc-300 transition-all duration-300 ${isOpenMenu ? "-rotate-45 absolute" : ""}`} />
                <div className={`w-4 h-0.5 bg-zinc-300 transition-all duration-300 ${isOpenMenu ? "opacity-0" : "opacity-100"}`} />
                <div className={`w-4 h-0.5 bg-zinc-300 transition-all duration-300 ${isOpenMenu ? "rotate-45 absolute" : ""}`} />
            </button>
            {isOpenMenu && (<>
                <div className="fixed bottom-0 w-screen z-40 flex justify-center items-center">
                    <div className="bg-zinc-600 p-5 w-full h-fit content-center">
                        <div className="flex flex-col justify-center">
                            <HeaderItem title={"Home"} icon={homeIcon} linkto="/" closeMenu={closeOverlay}/>
                            <HeaderItem title={"Classes"} icon={classesIcon} linkto="/classes" closeMenu={closeOverlay}/>
                            <HeaderItem title={"Party Syn"} icon={partySynIcon} linkto="/party_syn" closeMenu={closeOverlay}/>
                            <HeaderItem title={"Raids"} icon={null} linkto="/raids" closeMenu={closeOverlay}/>
                        </div>
                    </div>
                </div>
                <button onClick={()=>closeOverlay()} className="fixed z-0 w-full h-full bg-black opacity-50" />
            </>)}


            {/* Desktop version */}
            <nav className="bg-zinc-900 h-screen w-32 fixed top-0 left-0 z-10 py-4 px-2 hidden md:flex flex-col justify-start items-center">
                <div className="flex flex-col gap-8">
                    <HeaderItem title={"Home"} icon={homeIcon} linkto="/" />
                    <HeaderItem title={"Classes"} icon={classesIcon} linkto="/classes" />
                    <HeaderItem title={"Party Syn"} icon={partySynIcon} linkto="/party_syn"/>
                    <HeaderItem title={"Raids"} icon={null} linkto="/raids"/>
                </div>
            </nav>

        </>
    )
}