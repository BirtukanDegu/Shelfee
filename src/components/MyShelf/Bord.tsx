import { useEffect, useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
// import { DEFAULT_BOOKS } from "../../../constants";

const Board = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect (() => {
    if (hasChecked) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books]);

  useEffect(() => {
    const bookData = localStorage.getItem("books");

    setBooks(bookData ? JSON.parse(bookData) : [])

    setHasChecked(true);
  },[])

  return (
    <div className="flex h-full w-full gap-3 p-12">
      <Column
        title="Wishlist"
        column="wishlist"
        headingColor="text-brand-green"
        books={books}
        setBooks={setBooks}
      />
      <Column
        title="Queue"
        column="que"
        headingColor="text-brand-orange"
        books={books}
        setBooks={setBooks}
      />
      <Column
        title="In progress"
        column="doing"
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