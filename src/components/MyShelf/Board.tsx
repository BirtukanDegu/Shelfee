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
      {/* <div className="flex-[1]">
        <iframe 
          className="border-radius:12px" 
          src="https://open.spotify.com/embed/playlist/3VswAQmGj05xqNkBzyC5zM?utm_source=generator" 
          width="300px" 
          height="352" 
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div> */}
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