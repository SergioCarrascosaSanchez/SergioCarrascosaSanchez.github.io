import "./App.css";
import { MainSection } from "./components/MainSection";
import { ProjectList } from "./components/ProjectList";
import { Subtitle } from "./components/Subtitle";
import { Section } from "./components/Section";
import { ExperienceList } from "./components/ExperienceList";
import {ProjectArray, ExperienceArray} from "./Data"

function App() {
  return (
    <>
      <MainSection />
      <Section>
        <Subtitle title="Experiencia" />
        <ExperienceList listOfExperience={ExperienceArray} />
      </Section>
      <Section>
        <Subtitle title="Proyectos Personales" />
        <ProjectList listOfProjects={ProjectArray}/>
      </Section>
    </>
  );
}

export default App;
