import { EDUCATION } from "../../data/education"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { ExperienceItem } from "../experiences/experience-item"

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATION.map((edu) => (
          <ExperienceItem key={edu.id} experience={edu} />
        ))}
      </div>
    </Panel>
  )
}
