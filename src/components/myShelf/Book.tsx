import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion";

type BookProps = Book & {
  handleDragStart: (
    event: MouseEvent | TouchEvent | PointerEvent | React.DragEvent<HTMLDivElement>, 
    data: { 
      id: string; 
      column: string;
      details:{
        general: GeneralInfo;
        bookDetails: BookDetails;
        authorDetails: AuthorDetails;
        bookSections: BookSections;
        notes: Notes;
      }  
    }) => void;
};
  
const Book = ({ details, id, column, handleDragStart }: BookProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { details, id, column })}
        className="cursor-grab rounded border border-brand-light-green dark:border-brand-light-green/10 py-3 active:cursor-grabbing"
      >
        <div className="flex transition-all duration-150 ease-in-out">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-brand-light-green">
              <time
                  dateTime={details.general.dueDate?? ""}
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-black"
              >
                  <span>{new Date(details.general.issueDate?? "").getFullYear()}</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>{new Date(details.general.issueDate?? "").toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </time>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="border-l border-gray-200 p-4">
              {/* <Image
                src={details.bookDetails.thumbnail ?? ""}
                width={8}
                height={8}
                className="size-8 mr-3 rounded-md p-1 hover:bg-neutral-200"
                alt="Thumbnail"
              /> */}
              <a href="#">
                <span className="text-base font-bold uppercase text-gray-800 dark:text-gray-200">
                  {details.bookDetails.bookTitle}
                </span>
              </a>
              <p className="mt-2 overflow-hidden text-sm leading-tight text-gray-600 dark:text-gray-300 line-clamp-5">
                By {details.bookDetails.bookAuthor}
              </p>
              <p className="mt-2 overflow-hidden text-sm leading-tight text-gray-600 dark:text-gray-300 line-clamp-5">
                {details.bookDetails.bookGenre}, {details.bookDetails.bookLanguage}
              </p>              
            </div>
            <a className="block py-3 px-4 text-xs leading-none font-bold uppercase text-gray-800 dark:text-gray-200 transition-all duration-150 ease-in-out" href="#">
              View Details
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Book;