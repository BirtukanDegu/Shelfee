"use client";

import { SaveBookButton } from "./saveBook/SaveBookButton";
import { BookSectionsForm } from "./bookSections/BookSectionsForm";
import { GeneralForm } from "./general/GeneralForm";
import { NotesForm } from "./notes/NotesForm";
import { AuthorDetailsForm } from "./authorDetails/AuthorDetailsForm";
import { BookDetailsForm } from "./bookDetails/BookDetailsForm";
import { useGetValue } from "@/hooks/useGetValue";
import { getInitialValue } from "@/lib/getInitialValue";

export const UserInputForm = () => {
  const step = useGetValue("step", getInitialValue("step", "1"));

  return (
    <div>
      <div className={step === "1" ? "block" : "hidden"}>
        <GeneralForm />
      </div>
      <div className={step === "2" ? "block" : "hidden"}>
        <BookDetailsForm />
      </div>
      <div className={step === "3" ? "block" : "hidden"}>
        <AuthorDetailsForm />
      </div>
      <div className={step === "4" ? "block" : "hidden"}>
        <BookSectionsForm />
      </div>
      <div className={step === "5" ? "block" : "hidden"}>
        <NotesForm />
      </div>
      {step === "6" && <SaveBookButton />}
    </div>
  );
};
