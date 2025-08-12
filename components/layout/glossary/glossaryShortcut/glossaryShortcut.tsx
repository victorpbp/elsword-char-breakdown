'use client';

import React from "react";
import GlossaryOverlay from "../glossaryOverlay/glossaryOverlay";
import bookOpen from "@/app/public/bookOpen.png";
import bookClosed from "@/app/public/bookClosed.png";
import Image from "next/image";
import { useOverlayControl } from "@/contexts/overlayControl";
import { useGlossary } from "@/contexts/glossary/glossaryContext";

export default function GlossaryShortcut() {

    const { openOverlay, closeOverlay } = useOverlayControl();
    const { isOpenGlossary } = useGlossary();

    return (

        <>
            <button onClick={isOpenGlossary ? ()=>closeOverlay() : ()=>openOverlay('glossary', 'Support')} 
            className={`flex items-center h-12 p-3
                fixed right-10 bottom-40 z-50
                rounded-lg border-4
                transition-colors duration-400
                ${isOpenGlossary ? "bg-zinc-700 border-zinc-900" : "bg-zinc-900 border-zinc-700"}
            `}
            >                    
                {isOpenGlossary ? 
                    <Image src={bookOpen} alt="Book Open" width={40} height={40} className="w-8 h-8" />
                    :
                    <Image src={bookClosed} alt="Book Closed" width={40} height={40} className="w-8 h-8" />
                }
                    
            </button>
            
            {isOpenGlossary && (<>
                <div className="fixed bottom-0 z-40 ">
                    <div className="bg-zinc-600 px-5 py-10">
                        <div className="flex flex-col max-h-96 overflow-y-auto">
                            <GlossaryOverlay />
                        </div>
                    </div>
                </div>
                <button onClick={isOpenGlossary ? ()=>closeOverlay() : ()=>openOverlay('glossary')} className="cursor-default fixed z-10 w-full h-full bg-black opacity-50" />
            </>
                
            )}

        </>
    )



}
