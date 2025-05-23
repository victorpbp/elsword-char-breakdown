'use client';

import PartySynItem from "./partySynItem/partySynItem";
import { usePartySyn } from "@/contexts/partySyn/partySynContext";

export default function PartySynPage() {

    const { partySynItems } = usePartySyn();

    return (
        <div className="flex flex-col items-start justify-center">
            {partySynItems.map((_, index) => (
                <div key={index} className="w-full max-w-5xl flex justify-center gap-2 items-center p-3 px-5 text-sm">
                    <PartySynItem number={index}/>
                </div>
            ))}
        </div>
    );
}