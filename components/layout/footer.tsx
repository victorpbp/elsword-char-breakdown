import Image from 'next/image'
import kofiLogo from '../../app/public/kofi_symbol.png'

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center
        border-t mx-auto text-center text-sm gap-4 py-4
        flex-shrink-0
        bg-zinc-900"
        >
            <p>
                Maintained by Study Group {" "}
                <a
                href="https://cobodex.eu/"
                target="_blank"
                className="text-violet-300 hover:text-violet-400 transition-colors duration-200"
                >
                    (Discord)
                </a>
            </p>

            <hr className="w-px h-5 bg-white opacity-25"/>

            <div className="flex items-center gap-2">
                <Image 
                src={kofiLogo}
                alt={"Kofi Logo"} 
                width={25}
                height={25}/>
                    
                <a
                href="https://cobodex.eu/"
                target="_blank"
                className="text-violet-300 hover:text-violet-400 transition-colors duration-200"
                >Support me on Ko-fi!</a>
            </div>
        </footer>
    )

}