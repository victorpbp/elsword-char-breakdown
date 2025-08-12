'use client'
import { useParams } from "next/navigation";
import { useClasses } from "@/contexts/classes/classesContext";

// We need a dictionary to map the uid to the class name
// By using the different classes they have, acronyms
// In case the class doesn't exist, we can send the user back to /classes
// Alternatively, we can settle on sending them a 404 page

import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import stringWidth from 'string-width'
import rehypeRaw from "rehype-raw";
//import rehypeSanitize from "rehype-sanitize"; //Conflicts with colored spans

const markdown = `
# Actual Example

<span style="color:blue">color testing</span>

![Alt Text](https://cobodex.eu/_next/image?url=%2Fskill_icons%2F-1569602341.webp&w=64&q=75 "Optional Title")


# A demo of "react-markdown"

"react-markdown" is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using "dangerouslySetInnerHTML"
* Lets you define your own components (to render "MyHeading" instead of "'h1'")
* Has a lot of plugins

## Contents

Here is an example of a plugin inaaaaaa
(["remark-toc"](https://github.com/remarkjs/remark-toc)).
**This section is replaced by an actual table of contents**.

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:
["remark-gfm"](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ "remark-gfm" |

~~strikethrough~~

* [ ] task list
* [x] checked item


https://www.google.com/

## HTML in markdown

⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use ["rehype-raw"](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
["rehype-sanitize"](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## More info?

Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!

***
A component by [Espen Hovlandsdal](https://espen.codes/)
`
export default function SpecificClassPage() {

    const { classesItems } = useClasses();
    const relevantClass = classesItems.find(item => item.name.toLowerCase().replace(/\s+/g, '_') === useParams().uid);

    return (
      <div className="
        p-8 -mt-10 -mb-5
        bg-zinc-900
        flex flex-col items-start
        w-full max-w-6xl
        markdown
        [&_table]:border-collapse
        [&_table]:border-blue-500
        [&_th]:border [&_td]:border
        [&_th]:border-blue-500 [&_td]:border-blue-500
        [&_th]:px-2 [&_td]:px-2
        [&_th]:py-1 [&_td]:py-1
        [&_th]:bg-zinc-800
        [&_table]:my-4
      ">
        <Markdown
          remarkPlugins={[[remarkGfm, { stringLength: stringWidth }]]}
          rehypePlugins={[rehypeRaw]}
        >
          {markdown}
        </Markdown>      
      </div>
    );
  }
  