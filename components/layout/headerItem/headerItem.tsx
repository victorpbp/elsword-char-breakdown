import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import homeArt from "../../../app/public/homeArt.png";

export default function HeaderItem({
    title,
    icon,
    linkto,
    }: {
    title: string;
    icon: StaticImageData | null;
    linkto: string;
    }) {
    return (
        <div
        className="
            cursor-pointer font-bold
            flex items-center p-3
            border-b-2 border-transparent
            hover:border-zinc-700
            hover:bg-zinc-800 
            transition-colors duration-200
            "
        >
            <Link href={linkto}>
                <div className="flex items-center gap-2">
                    <Image width={24} height={24} src={icon ? icon : homeArt} alt={"icon"}/>
                    <p>{title}</p>
                </div>
            </Link>

        </div>
    );
}
