type SubtitleProps = {
  title: string;
}

export function Subtitle({ title }: SubtitleProps) {
  return (
    <>
      <div className="w-[100px] h-[10px] m-0 bg-violet-900"></div>
      <h2 className="font-bold text-4xl md:text-5xl lg:sm:text-5xl xl:text-5xl 2xl:text-5xl mb-14">{title}</h2>
    </>
  );
}
