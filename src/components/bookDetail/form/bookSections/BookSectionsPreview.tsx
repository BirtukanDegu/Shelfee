import React from "react";
import { ChevronDown } from "lucide-react";

export const BookSectionsPreview: React.FC<
  BookSections & { onClick?: (step: string) => void }
> = ({ sections, onClick }) => {
  const totalPages = calculateTotalPages(sections);
  const totalTime = calculateTotalTime(sections);

  return (
    <div
      className="group cursor-pointer relative"
      onClick={() => onClick && onClick("4")}
    >
      {!!onClick && (
        <>
          <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
        </>
      )}
      <div className="grid grid-cols-2 items-center">
        <div className="py-4 px-10">
          <p className="text-[11px] text-neutral-400 font-medium uppercase">
            Chapters / Sections
          </p>
        </div>
        <div className="py-4 px-10 grid grid-cols-2 items-center">
          <div>
            <p className="text-[11px] text-neutral-400 font-medium uppercase">
              No. of Pages
            </p>
          </div>
          <div>
            <p className="text-[11px] text-neutral-400 font-medium uppercase">
              Time EST.
            </p>
          </div>
        </div>
      </div>
      {sections.map(({ sectionTitle, pages, time }, index) => (
        <div
          className={`grid grid-cols-2 items-center border-b ${
            index === 0 ? "border-t" : ""
          } border-dashed mx-10 py-3`}
          key={index}
        >
          <p className="flex truncate text-xs font-medium text-gray-600">
            {sectionTitle}
          </p>
          <div className="pl-10 grid grid-cols-2 items-center">
            <p className="flex truncate text-xs font-medium text-gray-600">
              {pages || "-"}
            </p>
            <p className="flex truncate text-xs font-medium text-gray-600">
              {time ? addCommasToNumber(time) : ""} hrs
            </p>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-2">
        <div />
        <div>
          <div className="flex justify-between items-center mx-10 border-b border-dashed py-3">
            <p className="flex truncate text-xs font-medium text-gray-600">
              Total Pages
            </p>
            <p className="flex truncate text-xs font-medium text-gray-600">
              {addCommasToNumber(totalPages)}
            </p>
          </div>
          <div className="flex justify-between items-center px-10 py-3">
            <div>
              <p className="flex truncate text-xs font-medium text-gray-600">
                Total time spent
              </p>
            </div>
            <p className="flex truncate text-md font-medium">
              {addCommasToNumber(totalTime)} hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const calculateTotalPages = (sections: Section[]): number =>
  sections.reduce((total, section) => {
    const pages = section.pages ? +section.pages : 0;
    return total + pages;
  }, 0);

const calculateTotalTime = (sections: Section[]): number =>
  sections.reduce((total, section) => {
    const time = section.time ? +section.time : 0;
    return total + time;
  }, 0);

const addCommasToNumber = (number: number): string => {
  const numberString = number.toString();
  const parts = numberString.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
