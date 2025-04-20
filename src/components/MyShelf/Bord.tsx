import { useEffect, useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import { DEFAULT_BOOKS } from "../../../constants";

const Board = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect (() => {
    hasChecked && localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    const cardData = localStorage.getItem("books");

    setBooks(cardData ? JSON.parse(cardData) : [])

    setHasChecked(true);
  },[])

  return (
    <div className="flex h-full w-full gap-3 p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        books={books}
        setBooks={setBooks}
      />
      <Column
        title="Queue"
        column="que"
        headingColor="text-yellow-200"
        books={books}
        setBooks={setBooks}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        books={books}
        setBooks={setBooks}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        books={books}
        setBooks={setBooks}
      />
      <BurnBarrel setBooks={setBooks} />
    </div>
  );
};

export default Board;