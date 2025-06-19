export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full flex flex-col items-center justify-center
        border-t mx-auto text-center text-sm gap-2 py-2
        h-14
        flex-shrink-0
        bg-zinc-900
        sm:h-auto
        sm:flex-row
        sm:gap-4
        sm:py-4"
        >
            <p>
                Maintained by {" "}
                <a
                href="https://discord.com/users/394146105060753409"
                target="_blank"
                className="text-violet-300 hover:text-violet-400 transition-colors duration-200"
                >
                    Ignia 
                </a>, {" "}
                Elated, Angel, Snowii, Shiranui, BlueElekt, VictorVXD3, Edemon
                
            </p>

{/*
            <hr className="w-px h-5 bg-white opacity-25
            hidden sm:block
            "/>

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
*/}
        </footer>
    )

}