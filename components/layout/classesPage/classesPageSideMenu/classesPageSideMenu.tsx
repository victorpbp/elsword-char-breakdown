'use client';

import { Characters, ClassesItem, useClasses } from "@/contexts/classes/classesContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClassesPageSideMenu() {

    const { charactersItems } = useClasses();

    const [stageProgression, setStageProgression] = useState(0);
    const [interestedCharacter, setInterestedCharacter] = useState<Characters>(charactersItems[0]);
    const [interestedClasses, setInterestedClasses] = useState<ClassesItem>(charactersItems[0].classes[0]);

    const handleCharacterSelection = (character: Characters) => {
        setInterestedCharacter(character);
        setStageProgression(1);
    }
    const handleClassSelection = (classes: ClassesItem) => {
        setInterestedClasses(classes);
        setStageProgression(2);
    }

    const handleStageRegression = (stage: number) => {
        if (stage < 0) return;
        setStageProgression(stage);
    }

    useEffect(() => {

    }, [interestedCharacter]);

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
                    onClick={() => handleCharacterSelection(charactersItems[index])}>
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
                className={`sm:p-4 pt-16 max-w-2xl z-50 min-w-72
                fixed left-1/2 transform -translate-x-1/2
                overflow-y-auto no-scrollbar
                ${stageProgression === 1 ? '' : 'hidden'}`}
                style={{
                top: '5rem',
                maxHeight: 'calc(100vh - 2rem)', // leaves space at top and bottom
                }}
            >
                <div className="flex flex-col items-center gap-4">
                    {interestedCharacter.classes.map((cls, index) => (
                        <button key={`${cls.name} ${index} 2`}
                            onClick={() => handleClassSelection(interestedCharacter.classes[index])}
                            className={`p-8 opacity-80 hover:opacity-100 transition-colors duration-200 rounded-lg
                            flex flex-row items-center gap-4
                            w-80 sm:w-96 `}
                            style={{ backgroundColor: interestedCharacter.mainColor }}>
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
                top: '12rem',
                maxHeight: 'calc(100vh - 2rem)', // leaves space at top and bottom
                }}
            >
                <div className="flex flex-col items-center gap-4">
                        <button key={`${interestedClasses} 3`}
                        onClick={() => window.location.href = `/classes/${interestedClasses.name.toLowerCase().replace(/\s+/g, '_')}`}
                        className={`p-4 opacity-90 hover:opacity-100 transition-colors duration-200 rounded-lg
                            flex flex-col items-center`}
                        style={{ backgroundColor: interestedCharacter.mainColor }}>
                        <Image
                            src={interestedClasses.icon}
                            width={48}
                            height={48}
                            alt={interestedClasses.name}
                            className="rounded-full"
                        />
                        <h3 className="text-lg font-semibold mt-2">{interestedClasses.name}</h3>
                        <p className="text-sm text-center mt-2">{interestedClasses.description}</p>
                        </button>
                </div>
            </div>

            {/* Background logic for Stages 1 and 2 */}
            <div
                className={`w-screen h-screen fixed top-0 left-0
                bg-zinc-800 bg-opacity-90 backdrop-blur-sm
                z-40 ${stageProgression === 0 ? 'hidden' : ''}`}
                onClick={() => handleStageRegression(stageProgression - 1)}
            />

        </>
    );

}