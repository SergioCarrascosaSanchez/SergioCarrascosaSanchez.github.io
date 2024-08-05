import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";

type SliderProps = {
  listOfImageSrc: Array<string>;
}

export function Slider({ listOfImageSrc }: SliderProps) {
  const [selector, setSelector] = useState(0);

  function increaseSelector() {
    selector === listOfImageSrc.length - 1
      ? setSelector(0)
      : setSelector(selector + 1);
  }

  function decreaseSelector() {
    selector === 0
      ? setSelector(listOfImageSrc.length - 1)
      : setSelector(selector - 1);
  }

  return (
    <div>
      <div className="relative">
        <div
          onClick={decreaseSelector}
          className="p-2 absolute top-1/2 left-0 hover:cursor-pointer"
        >
          <FiChevronLeft />
        </div>

        <img src={listOfImageSrc[selector]} className="rounded-md"></img>

        <div
          onClick={increaseSelector}
          className="p-2 absolute top-1/2 right-0 hover:cursor-pointer"
        >
          <FiChevronRight />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {listOfImageSrc.map((_, index) => {
          return index === selector ? (
            <VscCircleFilled className="fill-slate-500 m-1" size="15px" />
          ) : (
            <VscCircleFilled className="fill-slate-200 m-1" size="15px" />
          );
        })}
      </div>
    </div>
  );
}
