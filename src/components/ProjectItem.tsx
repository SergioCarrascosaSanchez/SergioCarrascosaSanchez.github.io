import { Slider } from "./Slider";
import { IconList } from "./IconList";

type ProjectProps = {
  title: string;
  description: string;
  technologies: Array<string>;
  listOfImageSrc: Array<string>;
};

export function ProjectItem({
  title,
  description,
  technologies,
  listOfImageSrc,
}: ProjectProps) {
  return (
    <>
      <div className="mb-16 p-6 mx-auto bg-white border-1 rounded-xl border-slate-200 shadow-xl">
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-5 lg:grid-cols-2 gap-10 p-6">
          <div className="lg:col-span-1 xl:col-span-3 2xl:col-span-1">
            <Slider listOfImageSrc={listOfImageSrc} />
          </div>
          <div className="lg:col-span-1 xl:col-span-2 2xl:col-span-1">
            <h2 className="font-bold text-slate-900 mb-3 text-2xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl ">
              {title}
            </h2>
            <p className="text-slate-600 text-justify">{description}</p>
            <IconList list={technologies} />
          </div>
        </div>
      </div>
    </>
  );
}
