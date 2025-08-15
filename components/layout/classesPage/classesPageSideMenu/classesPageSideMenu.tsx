'use client';

import { useClasses } from "@/contexts/classes/classesContext";
import Image from "next/image";
import { useState } from "react";

export default function ClassesPageSideMenu() {

    const [stageProgression, setStageProgression] = useState(0);
    const [interestedCharacter, setInterestedCharacter] = useState<string>('Elsword');
    const [interestedClasses, setInterestedClasses] = useState<string>('Knight Emperor (KE)');

    const handleStageProgression = (stage: number, character?: string, classes?: string ) => {
        console.log(`Stage: ${stage}, Character: ${character}, Classes: ${classes}`);
        if (classes) setInterestedClasses(classes);
        if (character) setInterestedCharacter(character);
        setStageProgression(stage);
    }

    const { charactersItems } = useClasses();

    return (
        <>
            {/* Stage 0 - Sidebar */}
            <div className="
                flex flex-col
                fixed top-0 left-0 md:left-32
                h-[calc(100vh-2.3rem)] md:h-[calc(100vh-3.6rem)]
                bg-zinc-800 border-2 border-zinc-500 overflow-y-auto no-scrollbar"
            >
                {charactersItems.map((item, index) => (
                    <button key={`${item.name} ${index} 1`}
                    onClick={() => handleStageProgression(1, item.name)}>
                        <Image
                            src={item.icon}
                            width={48}
                            height={48}
                            alt={item.name}
                            className="rounded-full m-2"
                        />
                    </button>
                ))}
            </div>

            {/* Stage 1 - Class Selection */}
            <div
                className={`p-4 max-w-md z-50
                fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                ${stageProgression === 1 ? '' : 'hidden'}`}
            >
                <div className="flex flex-col items-center gap-4">
                    {charactersItems.find(item => item.name === interestedCharacter)?.classes.map((cls, index) => (
                        <button key={`${cls.name} ${index} 2`}
                            onClick={() => handleStageProgression(2, undefined, cls.name)}
                            className={`p-8 opacity-80 hover:opacity-100 transition-colors duration-200 rounded-lg
                            flex flex-row items-center gap-4
                            w-80 sm:w-96 `}
                            style={{ backgroundColor: charactersItems.find(item => item.name === interestedCharacter)?.mainColor }}>
                            <Image
                                src={cls.icon}
                                width={48}
                                height={48}
                                alt={cls.name}
                                className="rounded-full"
                            />
                            <h3 className="text-lg font-semibold mt-2">{cls.name}</h3>
                        </button>
                    ))}
                </div>

            </div>

            {/* Stage 2 - Class Specifier */}

            <div
                className={`sm:p-4 pt-16 max-w-2xl z-50 min-w-72
                fixed left-1/2 transform -translate-x-1/2
                overflow-y-auto no-scrollbar
                ${stageProgression === 2 ? '' : 'hidden'}`}
                style={{
                top: '0',
                maxHeight: 'calc(100vh - 2rem)', // leaves space at top and bottom
                }}
            >
                <div className="flex flex-col items-center gap-4">
                    {charactersItems.find(item => item.name === interestedCharacter)?.classes
                    .filter(cls => cls.name === interestedClasses)
                    .map((cls, index) => (
                        <button key={`${cls.name} ${index} 3`}
                        onClick={() => window.location.href = `/classes/${cls.name.toLowerCase().replace(/\s+/g, '_')}`}
                        className={`p-4 opacity-90 hover:opacity-100 transition-colors duration-200 rounded-lg
                            flex flex-col items-center`}
                        style={{ backgroundColor: charactersItems.find(item => item.name === interestedCharacter)?.mainColor }}>
                        <Image
                            src={cls.icon}
                            width={48}
                            height={48}
                            alt={cls.name}
                            className="rounded-full"
                        />
                        <h3 className="text-lg font-semibold mt-2">{cls.name}</h3>
                        <p className="text-sm text-center mt-2">{cls.description}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Background logic for Stages 1 and 2 */}
            <div
                className={`w-screen h-screen fixed top-0 left-0
                bg-zinc-800 bg-opacity-90 backdrop-blur-sm
                z-40 ${stageProgression === 0 ? 'hidden' : ''}`}
                onClick={() => handleStageProgression(stageProgression - 1)}
            />

        </>
    );

}