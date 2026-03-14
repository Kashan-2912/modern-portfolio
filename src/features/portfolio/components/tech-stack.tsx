import Image from "next/image"

import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tech.title}
                  title={tech.title}
                >
                  <Image
                    src={`/tech-stack-icons/light/${tech.key}${tech.ext ? `.${tech.ext}` : '-light.svg'}`}
                    alt={`${tech.title} light icon`}
                    width={32}
                    height={32}
                    className="hidden [html.light_&]:block"
                    unoptimized
                  />
                  <Image
                    src={`/tech-stack-icons/dark/${tech.key}${tech.ext ? `.${tech.ext}` : '-dark.svg'}`}
                    alt={`${tech.title} dark icon`}
                    width={32}
                    height={32}
                    className="hidden [html.dark_&]:block"
                    unoptimized
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
}
