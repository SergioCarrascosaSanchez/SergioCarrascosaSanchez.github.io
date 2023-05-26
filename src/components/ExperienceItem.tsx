type ExperienceItemProps = {
  title: string;
  company: string;
  description: string;
}

export function ExperienceItem({title, company, description} : ExperienceItemProps) {
  return (
    <div className="p-6 lg:w-7/12 md:w-7/12 xl:w-7/12 2xl:w-7/12 sm:w-10/12 mx-auto bg-white border-1 rounded-xl border-slate-200 shadow-xl">
      <h2 className="font-bold text-slate-900 mb-1 text-2xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl">
        {title}
      </h2>
      <h3 className="mb-2 text-slate-600">{company}</h3>
      <p className="text-justify">{description}</p>
    </div>
  );
}
