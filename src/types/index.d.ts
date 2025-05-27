interface ApiErrorResponse {
  data?: unknown; 
  errors?: {
    [field: string]: string; 
  };
}

interface AuthDataType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

interface User {
  id: number;
  email: string;
  provider: string;
  socialId: string;
  firstName: string;
  lastName: string;
  photo: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface AuthState {
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: User;
}

interface BookType {
  title: string;
  id: string;
  column: ColumnType;
}

declare type ColumnType = "toRead" | "reading" | "done";

interface Book {
  id: string;
  column: ColumnType;
  details: {
    general: GeneralInfo;
    bookDetails: BookDetails;
    authorDetails: AuthorDetails;
    bookSections: BookSections;
    notes: Notes;
  }
}

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
  Notes ;
