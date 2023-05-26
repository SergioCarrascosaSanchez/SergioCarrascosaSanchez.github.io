import { ExperienceItem } from "./ExperienceItem";

interface ExperienceItem {
  title: string;
  company: string;
  description: string;
}

type ExperienceProp = {
  listOfExperience: Array<ExperienceItem>;
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
              title={element.title}
              company={element.company}
              description={element.description}
            />
          </div>
        );
      })}
    </>
  );
}
