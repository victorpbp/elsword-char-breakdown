import Image from 'next/image'

import { usePartySyn } from "@/contexts/partySyn/partySynContext";

export default function PartySynItem({number}: {number: number}) {

    const { partySynItems } = usePartySyn();
    const { mainColor, name, icon, skills, command, notes } = partySynItems[number];

    return (
        <table 
            id={name.replace(/\s+/g, '_').toLowerCase()}
            className="table-fixed w-full border-2 border-zinc-500">
            <thead>
                <tr className="
                    text-zinc-300 border-2 border-zinc-500
                    text-left 
                " style={{ backgroundColor: mainColor }}>
                    <th className="
                        border-r-2 border-zinc-500 w-1/6 
                        align-top p-0 sm:p-2
                    "
                    ><Image className='mx-auto' src={icon} alt={name} width={60} height={60} /></th>
                    <th className="p-2 font-bold text-lg sm:text-2xl">{name}</th>
                </tr>
            </thead>
            <tbody>
                {skills.map((skill, index) => (
                    <tr key={index} className={`
                        ${index % 2 === 0 ? 'bg-zinc-800' : 'bg-zinc-700'}
                        hover:bg-zinc-950
                        transition duration-300
                        text-zinc-300 border-b-2 border-zinc-500
                        text-left
                    `}>
                        <td className="border-r-2 border-zinc-500 align-top p-0 sm:p-2">
                            <Image className='mx-auto' src={skill.skillIcon} alt={skill.skillName} width={60} height={60} />
                        </td>
                        <td
                            className="p-2"
                        > <span className='font-bold'>{skill.skillName}</span> <br/>
                            {skill.description} {skill.description} {skill.description} {skill.description}
                        </td>
                    </tr>
                ))}
                <tr className="bg-zinc-800 hover:bg-zinc-950 transition duration-300">
                    <td>
                    </td>
                    <td className="p-2">
                        <span className="font-bold">Command:</span> {command} <br/>
                        <span className="font-bold">Notes:</span> {notes}
                    </td>
                </tr>
            </tbody>
            
        </table>
    );
}