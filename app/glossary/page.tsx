// Need to add the moving around by the title of what the user came in for

import GlossaryItem from "@/components/layout/glossary/glossary";
import Link from "next/link";
export default async function Glossary() {

  return (
    <>
      <div
        className="flex flex-col gap-5"
      >
        <div
          className="flex flex-col gap-2 items-center justify-center text-center p-5"
        >

          <h1 className="text-3xl font-bold">Glossary</h1>
          <p className="text-base text-gray-400">
          Here you'll find definition for the many terminologies utilized in this page
          </p>
          <Link href={"#Res Title"}>Link</Link>
        </div>

        <div
          className="flex flex-col justify-start text-left p-5 w-full max-w-5xl"
        >
          <GlossaryItem title="Synergy" description="Divided in low/medium/High, it's the amount of offensive and useful buffs/debuffs a character can provide."/>

          <GlossaryItem title="Damage Amp" description="Part of synergy, composed of buffs/debuffs that increase the damage done by a Character" />

          <GlossaryItem title="Utility" description="Part of synergy, composed mostly of buffs that are mostly defensive in nature (Super armor, dmg reduction, healing …)" />

          <GlossaryItem title="Synergy DPS" description="A character that is not able to heal,freeze and cleanse at the same time, while some of them could be budget supports, that is not their main goal." />

          <GlossaryItem title="Support" description="A character that is able to heal, freeze and cleanse at the same time, while some of them could be Synergy dps, that is not their main goal." />

          <GlossaryItem title="Reaper" description="Title used mostly by supports (that do not have access to 19-4) obtained in “Heart of Behemoth”, this title shreds the defence of the enemy hit." />
          
          <GlossaryItem title="17-1" description="Title used mostly by supports (that do not have access to 19-4) obtained in “ Theme Park Entrance”, this title shreds the defence of the enemy hit." />
          
          <GlossaryItem title="Solace" description="Title used mostly by supports (that do not have access to 19-4) obtained in “Solace’s Fortress”, this title shreds the elemental defence of the enemy hit." />

          <GlossaryItem title="19-4" description="Title used mostly by supports obtained in “The Great Steel Wall”, this title shreds both the defence and the elemental defence of the enemy hit while also working as a resurrection title and granting a small healing." />

          <GlossaryItem title="Res Title" description="Titles that allow you to remain with 1 HP and avoid death once the titles are the following: Eclipse (10-4), Forge in NA (12-2),  Freed Shadow (17-5), Night parade of yada yada (15-6), Concerto (20-5), Attack of steel machine (19-4), Arcane Glyphs (Comes from Iceburners, forget about it) *They all share the same cooldown* “Yapping yada about supports”" />

          <GlossaryItem title="DPS Titles" description="Titles that increase the damage when they are constantly on (mostly used by Synergy DPS) the titles are the following: Survival of the cold (13-4), Black and white (15-6), Order (NaTuRaL FlOw) (Abyss raid), Dogma (21-4) *The titles are not interchangeable, they are listed from weaker to stronger*" />

          <GlossaryItem title="Utility Titles" description="Titles that are mostly used for their secondary effect, while they might seem bad they are most of the time necessary or atleast needed the titles are the following: Guardian of Secret Closed Space (obtained by exchange to Ariel), The setting SUN (13-5), NIGHT PARADE OF THE WHITE-GHOST(15-6), Versatility (15-5), Crest of Masteroad (Master roads)." />

          <GlossaryItem title="ASD" description="ASD stands for All skill damage, a statistic that increases the dmg of all the skills “Except master and Hyper skills” (Lmao) “Oz’s power from Oz”" />

          <GlossaryItem title="SSD" description="SSD stands for Specific skill damage, a statistic that increases the dmg of a specific skill or a specific type of skills. “Revenge of Blood from BQ”" />

          <GlossaryItem title="STD" description="STD stands for Skill tier damage, a statistic that increases the dmg of a specific skill tier.  “Mana flow from RM”" />

        </div>
        
      </div>
    </>
  );
}
