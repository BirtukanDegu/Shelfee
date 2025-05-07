interface AuthDataType {
  username?: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

interface BookType {
  title: string;
  id: string;
  column: ColumnType;
}

declare type ColumnType = "toRead" | "reading" | "done";

interface GeneralInfo {
  bookName?: string | null;
  issueDate?: string | null;
  dueDate?: string | null;
}

interface BookDetails {
  book?: string | null;
  bookTitle?: string | null;
  bookAuthor?: string | null;
  bookGenre?: string | null;
  bookLanguage?: string | null;
  thumbnail?: string | null;
  yearPublished?: string | null;
  bookPublisher?: string | null;
}

interface AuthorDetails {
  name?: string | null;
  authorName?: string | null;
  nationality?: string | null;
  gender?: string | null;
  penName?: string | null;
  authorPhoto?: string | null;
  website?: string | null;
  activeYears?: string | null;
}

interface BookSections {
  sections: Section[];
}

interface Section {
  sectionTitle: string;
  time?: number;
  pages?: number;
}

interface Notes {
  note?: string | null;
  language?: string;
}

type BookData = GeneralInfo & 
  BookDetails &
  AuthorDetails &
  BookSections &
  Notes;
