"use client";
import { PreviewDetails } from "@/components/bookDetail/form/previewDetails";
import { useData } from "@/hooks/useData";
import { useFormContext } from "react-hook-form";

export const BookDataPreview = () => {
  const {
    bookDetails,
    authorDetails,
    bookSections,
    notes,
    generalInfo,
  } = useData();
  const { setValue } = useFormContext();

  const onClick = (step: string) => {
    setValue("step", step);
    localStorage.setItem("step", step);
  };

  return (
    <PreviewDetails
      onClick={onClick}
      bookDetails={bookDetails}
      authorDetails={authorDetails}
      generalInfo={generalInfo}
      bookSections={bookSections}
      notes={notes}
    />
  );
};
