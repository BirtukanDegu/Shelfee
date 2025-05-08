import { languageList } from "@/lib/language";
import { ChevronDown } from "lucide-react";

export const NotesPreview: React.FC<
  Notes & { onClick?: (step: string) => void }
> = ({ note, language = "Am", onClick }) => {
  const languageDetails = languageList.find(
    (languageDetails) =>
      languageDetails.value.toLowerCase() === language.toLowerCase()
  )?.details;

  return (
    <div
      className="grid grid-cols-2 group cursor-pointer relative"
      onClick={() => onClick && onClick("5")}
    >
      {!!onClick && (
        <>
          <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
        </>
      )}
      <div className="py-4 px-10">
        <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3">
          Book Language
        </p>
        {languageDetails && (
          <div className="flex gap-2 justify-between items-center w-full">
            <div className="flex gap-3 items-center">
              <languageDetails.icon className="w-8 h-8 rounded-full" />
              <div>
                <p className="font-medium text-sm">
                  {languageDetails.nativeName}
                </p>
                <p className="text-xxs text-neutral-400">
                  {languageDetails.languageName} {languageDetails.isoCode}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="py-4 pl-10 pr-3">
        <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3">
          Notes/ Thoughts/ Reflections
        </p>
        {note ? (
          <div className="pb-4">
            <p className="text-xs font-medium text-neutral-400 break-words">
              {note}
            </p>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
