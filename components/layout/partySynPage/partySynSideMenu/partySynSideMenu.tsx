'use client';

import { usePartySyn } from "@/contexts/partySyn/partySynContext";
import { useOverlayControl } from "@/contexts/overlayControl";
import Image from "next/image";

import arrowSymbol from "@/app/public/whiteArrow.png";

export default function PartySynSideMenu() {

    const { openOverlay, closeOverlay } = useOverlayControl();
    const { partySynItems, isOpenPartySyn } = usePartySyn();

    return (
        <>
            {/* Mobile version */}
            <button onClick={isOpenPartySyn ? ()=>closeOverlay() : ()=>openOverlay('partySyn')}
            className={`
                flex flex-col items-center min-h-6 px-5 py-3
                fixed right-10 bottom-60 z-50
                rounded-lg border-4
                transition-colors duration-400
                ${isOpenPartySyn ? "bg-zinc-700 border-zinc-900" : "bg-zinc-900 border-zinc-700"}
                sm:hidden
            `}>

                <Image src={arrowSymbol} alt="Menu Toggle" width={16} className={`rotate-180 transition-all duration-300 ${isOpenPartySyn ? "-rotate-0" : ""}`} />                   

            </button>
            {isOpenPartySyn && (<>
                <div className="
                    fixed bottom-14 sm:bottom-0 sm:top-12 left-0
                    flex flex-col w-full max-h-96
                    bg-zinc-800 border-2 border-zinc-500 overflow-y-auto
                    sm:hidden"
                >
                    {partySynItems.map((_, index) => (
                        <button key={`${partySynItems[index].name} ${index}`} onClick={() => closeOverlay(partySynItems[index].name.replace(/\s+/g, '_').toLowerCase())}>
                            <div className="border-b-2 border-zinc-500 w-full flex justify-start gap-2 p-3 px-5 text-sm hover:bg-zinc-950 transition duration-300">                 
                                {partySynItems[index].name}
                            </div>
                        </button>
                    ))}
                </div>
            </>
                
            )}

            {/* Desktop version */}
            <div className="
                hidden sm:flex
                fixed top-0 sm:top-12 left-0
                flex-col w-36
                h-[calc(100vh-2.3rem)] sm:h-[calc(100vh-6.3rem)]
                bg-zinc-800 border-2 border-zinc-500 overflow-y-auto"
            >
                {partySynItems.map((_, index) => (
                    <button key={`${partySynItems[index].name} ${index} 1`} onClick={() => closeOverlay(partySynItems[index].name.replace(/\s+/g, '_').toLowerCase())}>
                        <div key={index} className="border-b-2 border-zinc-500 w-full flex justify-start gap-2 p-3 px-5 text-sm hover:bg-zinc-950 transition duration-300">                 
                            {partySynItems[index].name}
                        </div>
                    </button>
                ))}
            </div>
        </>

    );

}