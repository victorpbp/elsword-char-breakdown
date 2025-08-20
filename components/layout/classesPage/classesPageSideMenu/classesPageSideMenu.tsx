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
                className={`pt-4 max-w-2xl z-50 min-w-72
                fixed left-1/2 transform -translate-x-1/2
                overflow-y-auto no-scrollbar w-full
                ${stageProgression === 1 ? '' : 'hidden'}`}
                style={{
                top: '2rem',
                maxHeight: 'calc(100vh - 2rem)', // leaves space at top and bottom
                }}
            >
                <div className="flex flex-col items-center gap-1">
                    {interestedCharacter.classes.map((cls, index) => (
                        <button key={`${cls.name} ${index} 2`}
                            onClick={() => handleClassSelection(interestedCharacter.classes[index])}
                            className={`px-8 opacity-80 hover:opacity-100 transition-colors duration-200 rounded-lg
                            flex flex-row items-center gap-4 w-full h-44 overflow-hidden`}
                            style={{ 
                                backgroundColor: interestedCharacter.classes[index].name.toLowerCase().includes('nisha') ? "#282078" : interestedCharacter.mainColor,
                                color: interestedCharacter.classes[index].name.toLowerCase().includes('nisha') ? "#ffffff" : "#000000"
                                }}>
                            <Image
                                src={cls.portrait}
                                style={{ 
                                    objectPosition: 'center',
                                    width: '50%',
                                }}
                                alt={cls.name}
                            />
                            <h3 className="text-lg font-semibold mt-2">{cls.name}</h3>
                        </button>
                    ))}
                </div>

            </div>

            {/* Stage 2 - Class Specifier */}

            <div
                className={`pt-4 max-w-2xl min-w-72 z-50 
                fixed left-1/2 transform -translate-x-1/2
                overflow-y-auto no-scrollbar w-full h-full
                ${stageProgression === 2 ? '' : 'hidden'}`}
                style={{
                top: '6rem',
                maxHeight: 'calc(100vh - 12rem)', // leaves space at top and bottom
                }}
            >
                <button key={`${interestedClasses} 3`}
                onClick={() => window.location.href = `/classes/${interestedClasses.name.toLowerCase().replace(/\s+/g, '_')}`}
                className={`px-8 opacity-90 hover:opacity-100 transition-colors duration-200 rounded-lg
                w-full h-full overflow-hidden flex flex-col items-center justify-evenly text-black`}
                style={{ 
                    backgroundColor: interestedClasses.name.toLowerCase().includes('nisha') ? "#282078" : interestedCharacter.mainColor,
                    color: interestedClasses.name.toLowerCase().includes('nisha') ? "#ffffff" : "#000000"
                    }}>
                <div>
                    <h3 className="text-lg font-semibold mt-2">{interestedClasses.name}</h3>
                    <p className="text-sm text-center mt-2">{interestedClasses.description}</p>
                </div>
                <div className="overflow-hidden w-full h-96 flex items-center justify-center">
                    <Image
                            src={interestedClasses.portrait}
                            style={{ 
                                width: '800px', //Adjust width based on the standard to be set for the image resolution
                                height: 'auto',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                            alt={interestedClasses.name}
                    />
                </div>
                </button>
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