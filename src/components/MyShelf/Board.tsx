import { useContext } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import { BookContext, BookContextType } from "@/context/bookContext";
// import { DEFAULT_BOOKS } from "../../../constants";

const Board = () => {
  const { books, setBooks } = useContext<BookContextType>(BookContext);

  return (
    <div className="flex h-full w-full gap-3 p-12">
      <Column
        title="To be read"
        column="toRead"
        headingColor="text-brand-orange"
        books={books}
        setBooks={setBooks}
      />
      <Column
        title="Reading"
        column="reading"
        headingColor="text-brand-blue"
        books={books}
        setBooks={setBooks}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-green-600"
        books={books}
        setBooks={setBooks}
      />
      <BurnBarrel setBooks={setBooks} />
    </div>
  );
};

export default Board;
