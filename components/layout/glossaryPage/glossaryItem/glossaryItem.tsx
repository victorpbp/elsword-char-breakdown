export default function GlossaryItem({
    title,
    description,
    }: {
    title: string;
    description: string;
    }) {

    return (
        <div
            className={`flex flex-col gap-2 items-start p-4
            border-b border-b-foreground/10
            hover:bg-zinc-700/50
            transition-colors duration-200
            ${title === "Synergy" ? "border-t border-t-foreground/10" : ""}
            `}
            id={title.replace(/ /g, "_")}
          >
            <h2
              className="text-2xl font-bold"
            > {title}</h2>
            <p
              className="p-5"
            >{description}</p>
          </div>
    );
}
