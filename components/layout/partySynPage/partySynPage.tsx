'use client';

import PartySynItem from "./partySynItem/partySynItem";
import { usePartySyn } from "@/contexts/partySyn/partySynContext";
import PartySynSideMenu from "./partySynSideMenu/partySynSideMenu";
import { useEffect } from "react";

export default function PartySynPage() {

    const { partySynItems, targetTerm } = usePartySyn();

    useEffect(() => {
        console.log("PartySynPage useEffect triggered with targetTerm:", targetTerm);
        if (targetTerm) {
            const element = document.getElementById(targetTerm);
            if (element) {
                console.log("Scrolling to element with ID:", targetTerm);
                element.scrollIntoView({ behavior: 'smooth' });
                if (targetTerm !== "knight_emperor_(ke)" && window.innerWidth <= 640) {
                    setTimeout(() => {
                        // Adjust this value to match your overlay/header height
                        const yOffset = 48; // e.g., -64px for a 4rem header
                        window.scrollBy({ top: yOffset, behavior: 'instant' });
                    }, 400); // 400ms matches the smooth scroll duration
                }
            }
        }
    }, [targetTerm]);

    return (
        <div className="
            flex flex-row min-h-screen text-zinc-300"
        >
            <PartySynSideMenu />
            <div className="
            flex flex-col flex-grow flex-1 ml-0 sm:ml-36 gap-5
            -mt-5 sm:-mt-9
            -mb-8 sm:-mb-3.5
            lg:max-w-screen-lg 
            ">
                {partySynItems.map((_, index) => (
                    <div key={index} className="text-sm">
                        <PartySynItem number={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}