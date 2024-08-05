import { IconItem } from "./IconItem";

type IconListProps = {
  list: string[];
};

export function IconList({ list }: IconListProps) {
  return (
    <ul className="flex flex-wrap">
      {list.map((element) => {
        return <IconItem name={element} />;
      })}
    </ul>
  );
}
