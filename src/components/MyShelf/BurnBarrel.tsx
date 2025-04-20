import { Flame, Trash } from "lucide-react";
import { Dispatch, SetStateAction, useState, DragEvent } from "react";

const BurnBarrel = ({
    setBooks,
  }: {
    setBooks: Dispatch<SetStateAction<BookType[]>>;
  }) => {
    const [active, setActive] = useState(false);
  
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      setActive(true);
    };
  
    const handleDragLeave = () => {
      setActive(false);
    };
  
    const handleDragEnd = (e: DragEvent) => {
      const bookId = e.dataTransfer.getData("bookId");
  
      setBooks((pv) => pv.filter((c) => c.id !== bookId));
  
      setActive(false);
    };
  
    return (
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
          active
            ? "border-red-800 bg-red-800/20 text-red-500"
            : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
        }`}
      >
        {active ? <Flame className="animate-bounce" /> : <Trash />}
      </div>
    );
  };

  export default BurnBarrel;