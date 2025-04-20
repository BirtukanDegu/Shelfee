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
            ? "border-brand-red bg-brand-red/20 text-brand-red"
            : "border-brand-light-green bg-brand-light-green/5 text-brand-green"
        }`}
      >
        {active ? <Flame className="animate-bounce" /> : <Trash />}
      </div>
    );
  };

  export default BurnBarrel;