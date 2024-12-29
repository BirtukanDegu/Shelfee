/* eslint-disable @next/next/no-img-element */
import React from "react";

export const BookDetailsPreview: React.FC<BookDetails> = ({
  bookTitle,
  bookAuthor,
  bookGenre,
  bookLanguage,
  thumbnail,
  yearPublished,
  bookPublisher,
}) => (
  <div>
    <p className="text-[11px] text-neutral-400 dark:text-brand-cream/50 font-semibold uppercase pb-3.5">
      Book Details
    </p>
    <div className="h-10 mb-3">
      {thumbnail ? (
        <img src={thumbnail} alt="Thumbnail" className="h-10 rounded-md" />
      ) : (
        <div className="rounded-full bg-neutral-100 dark:bg-brand-cream/10 h-10 w-10 animate-pulse" />
      )}
    </div>
    {bookTitle ? (
      <p className="text-2xl font-medium dark:text-brand-cream">{bookTitle}</p>
    ) : (
      <div className="rounded-md bg-neutral-100 dark:bg-brand-cream/10 h-5 w-5/6  animate-pulse mb-4" />
    )}
    {bookAuthor ? (
      <p className="text-neutral-500/90 text-sm mb-3">by: {bookAuthor}</p>
    ) : (
      <div className="rounded-md bg-neutral-100 dark:bg-brand-cream/10 h-4 w-4/6 animate-pulse my-2" />
    )}
    <div className="text-xs text-neutral-500/80">
      {bookGenre || bookLanguage ? (
        <p className="mb-0.5">
          {bookGenre}, {bookLanguage}
        </p>
      ) : (
        <div className="rounded-md bg-neutral-100 dark:bg-brand-cream/10 h-4 w-4/6 animate-pulse my-3" />
      )}
      {bookPublisher ? (
        <p className="mb-1">Published by: {bookPublisher}</p>
      ) : (
        <div className="rounded-md bg-neutral-100 dark:bg-brand-cream/10 h-4 w-3/6 animate-pulse my-2" />
      )}
      {yearPublished && <p>Year Published: {yearPublished}</p>}
    </div>
  </div>
);
