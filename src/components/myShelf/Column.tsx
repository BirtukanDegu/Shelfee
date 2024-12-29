import { Dispatch, SetStateAction, useState, DragEvent } from "react";
import DropIndicator from "./DropIndicator";
import Book from "./Book";
import AddBook from "./AddBook";

type ColumnProps = {
    title: string;
    headingColor: string;
    books: Book[];
    column: ColumnType;
    setBooks: Dispatch<SetStateAction<Book[]>>;
  };
  
  const Column = ({
    title,
    headingColor,
    books,
    column,
    setBooks,
  }: ColumnProps) => {
    const [active, setActive] = useState(false);
  
    const handleDragStart = (
      e: MouseEvent | TouchEvent | PointerEvent | React.DragEvent<HTMLDivElement>,
      book: { 
        id: string; 
        column: string;
        details:{
          general: GeneralInfo;
          bookDetails: BookDetails;
          authorDetails: AuthorDetails;
          bookSections: BookSections;
          notes: Notes;
        } 
      }
    ) => {
      if ('dataTransfer' in e) {
        e.dataTransfer.setData("bookId", book.id);
      }
    };
  
    const handleDragEnd = (e: DragEvent) => {
      const bookId = e.dataTransfer.getData("bookId");
  
      setActive(false);
      clearHighlights();
  
      const indicators = getIndicators();
      const { element } = getNearestIndicator(e, indicators);
  
      const before = element.dataset.before || "-1";
  
      if (before !== bookId) {
        let copy = [...books];
  
        let bookToTransfer = copy.find((c) => c.id === bookId);
        if (!bookToTransfer) return;
        bookToTransfer = { ...bookToTransfer, column };
  
        copy = copy.filter((c) => c.id !== bookId);
  
        const moveToBack = before === "-1";
  
        if (moveToBack) {
          copy.push(bookToTransfer);
        } else {
          const insertAtIndex = copy.findIndex((el) => el.id === before);
          if (insertAtIndex === undefined) return;
  
          copy.splice(insertAtIndex, 0, bookToTransfer);
        }
  
        setBooks(copy);
      }
    };
  
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      highlightIndicator(e);
  
      setActive(true);
    };
  
    const clearHighlights = (els?: HTMLElement[]) => {
      const indicators = els || getIndicators();
  
      indicators.forEach((i) => {
        i.style.opacity = "0";
      });
    };
  
    const highlightIndicator = (e: DragEvent) => {
      const indicators = getIndicators();
  
      clearHighlights(indicators);
  
      const el = getNearestIndicator(e, indicators);
  
      el.element.style.opacity = "1";
    };
  
    const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
      const DISTANCE_OFFSET = 50;
  
      const el = indicators.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
  
          const offset = e.clientY - (box.top + DISTANCE_OFFSET);
  
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        {
          offset: Number.NEGATIVE_INFINITY,
          element: indicators[indicators.length - 1],
        }
      );
  
      return el;
    };
  
    const getIndicators = () => {
      return Array.from(
        document.querySelectorAll(
          `[data-column="${column}"]`
        ) as unknown as HTMLElement[]
      );
    };
  
    const handleDragLeave = () => {
      clearHighlights();
      setActive(false);
    };
  
    const filteredbooks = books.filter((c) => c.column === column);
  
    return (
      <div className="w-56 shrink-0">
        <div className="mb-3 flex items-center justify-between">
          <h3 className={`font-medium ${headingColor}`}>{title}</h3>
          <span className={`rounded text-sm ${headingColor}`}>
            {filteredbooks.length}
          </span>
        </div>
        <div
          onDrop={handleDragEnd}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`h-full w-full transition-colors ${
            active ? "bg-brand-light-green/10" : "bg-brand-light-green/0"
          }`}
        >
          {filteredbooks.map((c) => {
            return <Book key={c.id} {...c} handleDragStart={handleDragStart} />;
          })}
          <DropIndicator beforeId={null} column={column} />
          {/* <AddBook column={column} setBooks={setBooks} /> */}
        </div>
      </div>
    );
  };

  export default Column;