import { ProjectItem } from "./ProjectItem";

interface ProjectItem {
  title: string;
  description: string;
  technologies: Array<string>;
  listOfImageSrc: Array<string>;
}
type ProjectListProps = {
    listOfProjects: Array<ProjectItem>;
};

export function ProjectList({ listOfProjects }: ProjectListProps) {
  return (
    <>
      {listOfProjects.map((element) => {
        return (
          <ProjectItem
            title={element.title}
            description={element.description}
            technologies={element.technologies}
            listOfImageSrc={element.listOfImageSrc}
          />
        );
      })}
    </>
  );
}
