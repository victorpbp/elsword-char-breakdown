import HeaderItem from "./headerItem/headerItem"
import kofiLogo from "../../app/public/kofi_symbol.png"

export default function Header() {
 return (
    <nav className="bg-zinc-900 w-full flex justify-center border-b border-b-foreground/10 h-12">
        <div className="w-full max-w-5xl flex justify-center gap-2 items-center p-3 px-5 text-sm">
            <HeaderItem title={"Home"} icon={kofiLogo} linkto="/" />
            <HeaderItem title={"Glossary"} icon={null} linkto="/glossary" />
        </div>
    </nav>
 )
}
