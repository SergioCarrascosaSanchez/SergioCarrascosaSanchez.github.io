import { ExperienceItem } from "./ExperienceItem";

interface ExperienceItem {
  logo: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

type ExperienceProp = {
  listOfExperience: ExperienceItem[];
};

export function ExperienceList({ listOfExperience }: ExperienceProp) {
  return (
    <>
      {listOfExperience.map((element, index) => {
        return (
          <div key={element.title} className="grid justify-items-center">
            {index !== 0 && (
              <div className="h-[70px] w-[10px] m-0 bg-violet-900"></div>
            )}
            <ExperienceItem
              logo={element.logo}
              title={element.title}
              company={element.company}
              description={element.description}
              technologies={element.technologies}
            />
          </div>
        );
      })}
    </>
  );
}
