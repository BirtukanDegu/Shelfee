import { useState, useEffect, Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { LoaderIcon } from "lucide-react";

export interface BookContextType {
    books: Book[];
    setBooks: Dispatch<SetStateAction<Book[]>>;
}

export const BookContext = createContext<BookContextType>({
    books: [],
    setBooks: () => {},
});
 

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState<Book[]>([]);
 
    useEffect(() => {
        const bookData = localStorage.getItem("books");
        setBooks(bookData ? JSON.parse(bookData) : [])
        setLoading(false);
    },[])

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
        
        const allowedKeys = ["books", "shelfee-theme"];
            Object.keys(localStorage).forEach((key) => {
            if (!allowedKeys.includes(key)) {
                localStorage.removeItem(key);
            }
        });
    }, [books]);
 
    const contextData = { books, setBooks };
 
    return (
        <BookContext.Provider value={contextData}>
            {loading ? (
                <div className="flex items-center justify-center h-screen w-full">
                    <LoaderIcon className="animate-spin h-8 w-8 text-gray-500" />
                </div>
            ) : (
                <>
                    {children}
                </>
            )}
        </BookContext.Provider>
    );
};
export default BooksProvider;