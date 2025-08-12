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
                if (targetTerm !== "knight_emperor_(ke)") {
                    setTimeout(() => {
                        const yOffset = 48;
                        window.scrollBy({ top: yOffset, behavior: 'smooth' });
                    }, 400); // 400ms matches the smooth scroll duration
                }
            }
        }
    }, [targetTerm]);

    return (
        <div className="
            flex flex-row text-zinc-300"
        >
            <PartySynSideMenu />
            <div className="
            flex flex-col flex-grow flex-1 ml-0 md:ml-32 gap-5
            
            lg:max-w-screen-lg 
            ">
                {partySynItems.map((_, index) => (
                    <div key={index} className={`text-sm ${index === partySynItems.length - 1 ? "-mb-2.5" : ""}`}>
                        <PartySynItem number={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}