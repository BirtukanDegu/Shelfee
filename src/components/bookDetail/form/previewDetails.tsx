import { AuthorDetailsPreview } from "./authorDetails/AuthorDetailsPreview";
import { BookSectionsPreview } from "./bookSections/BookSectionsPreview";
import { GeneralPreview } from "./general/GeneralPreview";
import { NotesPreview } from "./notes/NotesPreview";
import { BookDetailsPreview } from "./bookDetails/BookDetailsPreview";
import { ChevronDown } from "lucide-react";

export const PreviewDetails = () => (
  <div className="overflow-x-auto scrollbar">
    <div className="w-[595px] h-[842px] bg-white rounded-2xl border border-dashed justify-center items-center">
      <GeneralPreview />
      <div className="border-b  grid grid-cols-2 justify-between border-dashed">
        <div className="py-4 px-10 border-r border-dashed cursor-pointer relative group">
          <BookDetailsPreview />
        </div>
        <div className="py-4 px-10 border-dashed cursor-pointer relative group">
          <AuthorDetailsPreview />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="border-b justify-between border-dashed">
          <BookSectionsPreview />
        </div>
        <div className="">
          <NotesPreview />
        </div>
      </div>
    </div>
  </div>
);
