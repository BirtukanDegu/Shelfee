import { useGetValue, useItemParams } from "@/hooks/useGetValue";

export const useData = () => {
  const book = useGetValue("book");
  const bookName = useGetValue("bookName");
  const bookAuthor = useGetValue("bookAuthor");
  const bookGenre = useGetValue("bookGenre");
  const bookLanguage = useGetValue("bookLanguage");
  const thumbnail = useGetValue("thumbnail");
  const yearPublished = useGetValue("yearPublished");
  const bookPublisher = useGetValue("bookPublisher");

  const name = useGetValue("name");
  const authorName = useGetValue("authorName");
  const nationality = useGetValue("nationality");
  const gender = useGetValue("gender");
  const penName = useGetValue("penName");
  const authorPhoto = useGetValue("authorPhoto");
  const website = useGetValue("website");
  const activeYears = useGetValue("activeYears");

  const note = useGetValue("note");
  const sections = useItemParams();

  const bookTitle = useGetValue("bookTitle");
  const issueDate = useGetValue("issueDate");
  const dueDate = useGetValue("dueDate");

  const language = useGetValue("language") || "ET";

  const generalInfo = {
    bookName,
    issueDate,
    dueDate,
  };

  const bookSections = {
    sections,
  };

  const notes = {
    note: note,
    language,
  };

  const bookDetails = {
    bookTitle,
    bookAuthor,
    bookGenre,
    bookLanguage,
    thumbnail,
    book,
    yearPublished,
    bookPublisher,
  };

  const authorDetails = {
    authorName,
    nationality,
    gender,
    penName,
    authorPhoto,
    website,
    activeYears,
    name,
  };

  return {
    bookDetails,
    authorDetails,
    notes,
    generalInfo,
    bookSections,
  };
};
