"use client";

import { Button } from "@/components/ui/button";
import { BookContext, BookContextType } from "@/context/bookContext";
import { useData } from "@/hooks/useData";
import { CheckCircle2, LoaderIcon, Save } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export const SaveBookButton = () => {
  const { Book } = useData();
  const { setBooks } = useContext<BookContextType>(BookContext);
  const [status, setStatus] = useState<"saved" | "saving" | "not-saved">(
    "not-saved"
  );

  useEffect(() => {
    if (status === "saved") {
      setTimeout(() => {
        setStatus("not-saved");
      }, 1000);
    }
  }, [status]);

  const handleSubmit = () => {
    setStatus("saving");
    const newBook = {
      id: Math.random().toString(),
      column: "toRead" as ColumnType,
      details: {
        general: Book.generalInfo,
        bookDetails: Book.bookDetails,
        authorDetails: Book.authorDetails,
        bookSections: Book.bookSections,
        notes: Book.notes,
      },
    };

    setBooks((pv) => [...pv, newBook]);

    setStatus("saved");
  };

  return (
    <div className="flex h-[calc(100vh-208px)] justify-center items-center">
      <div>
        <h1 className="text-5xl font-semibold pb-6 dark:text-brand-cream">
          Your book is ready
        </h1>
        <p className="text-neutral-500 text-xl pb-7">
          Please review the details carefully before saving your book.
        </p>
        <Button
          disabled={status === "saving"}
          onClick={handleSubmit}
          type="button"
          className="w-full h-12 rounded-lg text-lg bg-brand-green hover:bg-brand-green/80 text-brand-cream font-semibold flex items-center justify-center gap-2 cursor-pointer"
        >
          {status === "not-saved" && (
            <>
              <Save className="mr-2 h-6 w-6" /> Save Book
            </>
          )}
          {status === "saving" && (
            <>
              <LoaderIcon className="mr-2 h-6 w-6 animate-spin" /> Saving...
            </>
          )}
          {status === "saved" && (
            <>
              <CheckCircle2 className="mr-2 h-6 w-6" /> saved
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
