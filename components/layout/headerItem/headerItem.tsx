'use client'

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import homeArt from "../../../app/public/homeArt.png";
import { usePathname } from "next/navigation";

export default function HeaderItem({
    title,
    icon,
    linkto,
    closeMenu,
    }: {
    title: string;
    icon: StaticImageData | null;
    linkto: string;
    closeMenu?: () => void;
    }) {

    // Check the url path and style the header item accordingly
    const path = usePathname();
    
    return (
        <Link href={linkto}
        onClick={() => closeMenu ? closeMenu() : null}>
            <div
            className={`
                cursor-pointer font-bold
                flex items-center py-2 px-1
                border-b-2 border-transparent
                hover:border-zinc-400
                hover:bg-zinc-800 
                transition-colors duration-200
                active:bg-gray-500
                tranform active:scale-95
                ${path === linkto ? "border-zinc-400" : ""}
                `}>
                
                    <div className="flex items-center gap-2">
                        <Image width={22} height={22} src={icon ? icon : homeArt} alt={"icon"}/>
                        <p>{title}</p>
                    </div>
            </div>
        </Link>
    );
}
