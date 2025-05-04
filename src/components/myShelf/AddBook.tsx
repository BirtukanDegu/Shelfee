import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

type AddBookProps = {
    column: ColumnType;
    setBooks: Dispatch<SetStateAction<BookType[]>>;
  };
  
  const AddBook = ({ column, setBooks }: AddBookProps) => {
    const [text, setText] = useState("");
    const [adding, setAdding] = useState(false);
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (!text.trim().length) return;
  
      const newBook = {
        column,
        title: text.trim(),
        id: Math.random().toString(),
      };
  
      setBooks((pv) => [...pv, newBook]);
  
      setAdding(false);
    };
  
    return (
      <>
        {adding ? (
          <motion.form layout onSubmit={handleSubmit}>
            <textarea
              onChange={(e) => setText(e.target.value)}
              autoFocus
              placeholder="Add new book..."
              className="w-full rounded border border-brand-green/50 bg-brand-light-green/5 p-3 text-sm text-brand-green placeholder-brand-green/50 focus:outline-0"
            />
            <div className="mt-1.5 flex items-center justify-end gap-1.5">
              <button
                onClick={() => setAdding(false)}
                className="px-3 py-1.5 text-xs text-brand-green transition-colors hover:text-brand-green/80 cursor-pointer"
              >
                Close
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-brand-green px-3 py-1.5 text-xs text-white transition-colors hover:bg-brand-green/80 cursor-pointer"
              >
                <span>Add</span>
                <Plus className="w-4 h-4"/>
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.button
            layout
            onClick={() => setAdding(true)}
            className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-brand-blue transition-all hover:text-brand-blue/80 hover:scale-105 duration-500 cursor-pointer"
          >
            <span>Add book</span>
            <Plus className="w-4 h-4"/>
          </motion.button>
        )}
      </>
    );
  };

  export default AddBook;