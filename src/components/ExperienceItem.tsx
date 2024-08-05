import { IconList } from "./IconList";

type ExperienceItemProps = {
  logo: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
};

export function ExperienceItem({
  logo,
  title,
  company,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col items-start p-6 lg:w-9/12 md:w-9/12 xl:w-9/12 2xl:w-9/12 sm:w-10/12 bg-white border-1 rounded-xl border-slate-200 shadow-xl gap-2">
      <div className="flex items-center gap-8 justify-start flex-row ml-0 mr-0">
        <img src={logo} width={55} height={55} className="rounded-md" />
        <div>
          <h2 className="font-bold text-slate-900 mb-1 text-2xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl">
            {title}
          </h2>
          <h3 className="mb-2 text-slate-600">{company}</h3>
        </div>
      </div>
      <p className="text-justify">{description}</p>
      <IconList list={technologies} />
    </div>
  );
}
