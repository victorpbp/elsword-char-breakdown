'use client';

import React, { useState } from "react";
import GlossaryPage from "../glossaryPage/glossaryPage";

export default function GlossaryShortcut() {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <>
            <button onClick={toggleMenu} className="
                font-bold text-xl text-zinc-300 w-4
            ">
                <div className={`flex items-center h-12 p-5
                fixed right-10 bottom-40 z-50
                rounded-lg border-4
                transition-colors duration-400
                ${isOpen ? "bg-zinc-700 border-zinc-900" : "bg-zinc-900 border-zinc-700"}
                `}>
                    
                        {/* Hamburger icon */}
                        {isOpen ? "X" : "G"}
                    
                </div>
            </button>
            {isOpen && (<>
                <div className="fixed bottom-0 z-40 ">
                    <div className="bg-zinc-600 px-5 py-10">
                        <div className="flex flex-col max-h-96 overflow-y-auto">
                            <GlossaryPage />
                        </div>
                    </div>
                </div>
                <button onClick={toggleMenu} className="cursor-default fixed z-0 w-full h-full bg-black opacity-50" />
            </>
                
            )}

        </>
    )



}
