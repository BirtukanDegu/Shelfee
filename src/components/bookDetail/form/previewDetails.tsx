import { AuthorDetailsPreview } from "./authorDetails/AuthorDetailsPreview";
import { BookSectionsPreview } from "./bookSections/BookSectionsPreview";
import { GeneralPreview } from "./general/GeneralPreview";
import { NotesPreview } from "./notes/NotesPreview";
import { BookDetailsPreview } from "./bookDetails/BookDetailsPreview";
import { ChevronDown } from "lucide-react";

export const PreviewDetails = ({
  bookDetails,
  authorDetails,
  bookSections,
  notes,
  generalInfo,
  onClick,
}: {
  bookDetails: BookDetails;
  authorDetails: AuthorDetails;
  bookSections: BookSections;
  notes: Notes;
  generalInfo: GeneralInfo;
  onClick?: (step: string) => void;
}) => (
  <div className="overflow-x-auto scrollbar">
    <div className="w-[595px] h-[842px] bg-white dark:bg-slate-950  rounded-2xl border border-dashed justify-center items-center">
      <GeneralPreview {...generalInfo} onClick={onClick} />
      <div className="border-b  grid grid-cols-2 justify-between border-dashed">
        <div
          className="py-4 px-10 border-r border-dashed cursor-pointer relative group"
          onClick={() => onClick && onClick("2")}
        >
          {!!onClick && (
            <>
              <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
            </>
          )}
          <BookDetailsPreview {...bookDetails} />
        </div>
        <div
          className="py-4 px-10 border-dashed cursor-pointer relative group"
          onClick={() => onClick && onClick("3")}
        >
          {!!onClick && (
            <>
              <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
            </>
          )}
          <AuthorDetailsPreview {...authorDetails} />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="border-b justify-between border-dashed">
          <BookSectionsPreview {...bookSections} onClick={onClick} />
        </div>
        <div className="">
          <NotesPreview {...notes} onClick={onClick} />
        </div>
      </div>
    </div>
  </div>
);
