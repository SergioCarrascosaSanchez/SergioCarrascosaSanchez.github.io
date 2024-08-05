import { ReactNode } from "react";

type SectionChildren = {
  children: ReactNode;
}

export function Section({ children }: SectionChildren) {
  return (
    <section className="mb-40 w-11/12 2xl:w-8/12 xl:w-10/12 md:w-10/12 lg:w-10/12">
      {children}
    </section>
  );
}
