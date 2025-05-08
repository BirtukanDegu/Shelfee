import { format } from "date-fns";
import { ChevronDown } from "lucide-react";

export const GeneralPreview: React.FC<
  GeneralInfo & { onClick?: (step: string) => void }
> = ({ bookName, issueDate, dueDate, onClick }) => (
  <div
    className="border-b py-4 px-10 grid grid-cols-2 justify-between border-dashed group cursor-pointer relative"
    onClick={() => onClick && onClick("1")}
  >
    {!!onClick && (
      <>
        <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-brand-orange -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
      </>
    )}
    <div>
      <p className="text-[11px] text-neutral-400 font-semibold uppercase">
        Book Title
      </p>
      <p className="font-medium text-xs">{bookName}</p>
    </div>
    <div className="flex items-center justify-between pl-10">
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase">
          Start Date
        </p>
        <p className="font-medium text-xs">
          {issueDate ? format(issueDate, "do MMM yyyy'") : ""}
        </p>
      </div>
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase text-right">
          Finish Date
        </p>
        <p className="font-medium text-xs">
          {dueDate ? format(dueDate, "do MMM yyyy'") : ""}
        </p>
      </div>
    </div>
  </div>
);
